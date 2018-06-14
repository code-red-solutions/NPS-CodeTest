// external libraries
// import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-styles/color.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-slider/paper-slider.js';
import '@polymer/iron-fit-behavior/iron-fit-behavior.js';
import '@polymer/paper-input/paper-textarea.js';
import '@polymer/paper-tooltip/paper-tooltip.js';
import '@polymer/iron-localstorage/iron-localstorage.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-ajax/iron-ajax.js';

import * as __ from 'lodash';

// local source
import { configureStore, IApplicationState  } from '../store/store';
import StylingDispatcher from '../services/StylingDispatcher';
import StyleDefinitionsMapper from '../services/StyleDefinitionsMapper';
import StyleDefinitionsDataHelper from '../data/StyleDefinitionsDataHelper';
import AnswerValuesCreator from '../services/AnswerValuesCreator';
import { MiscSettings } from '../store/settings/types';
import { addMiscSettings, setAnswerRangesThunk } from '../store/settings/actions';
import Polymerpolymerpolymerelement = require('@polymer/polymer/polymer-element');
import PolymerElement = Polymerpolymerpolymerelement.PolymerElement;
import ReduxConnector = require('../../utils/ReduxConnector');
import IReduxBindable = ReduxConnector.IReduxBindable;
import { Store } from 'redux';
import { html } from '@polymer/polymer/polymer-element';
import Types = require('../store/settings/types');
import AnswerRange = Types.AnswerRange;
import { connectToRedux } from '../../utils/ReduxConnector';
import { setRatingValueThunk, setAnswerRangeQuestionResponse, setPageStateThunk, PageStateKeys } from '../store/userstate/actions';
import { AnswerRangeQuestionFinder } from '../services/AnswerRangeQuestionFinder';
import { UserState } from '../store/userstate/types';
import { ConfigHelper } from '../../utils/ConfigHelper';

export default class NpsWidget extends PolymerElement implements IReduxBindable {

  private store: Store<IApplicationState>;
  private introductionStatement: string;
  private iconType: string = 'feedback';
  private mainQuestion: string;
  private answerValueMin: number;
  private answerValueMax: number;
  private rating: number;
  private selectedAnswerRangeQuestion: string;
  private answerRangeQuestionResponse: string;
  private myLocalStorage: UserState;
  private pageName: string;
  private APISubmissionURL: string = `${ConfigHelper.nps_Service_API_URL}${ConfigHelper.nps_Service_API_Route_feedback}`;

  static get is() { return 'nps-widget'; }

  constructor(config) {

    super();

    this.store = configureStore(undefined);

    // log the state
    console.log(this.store.getState());
    // NpsWidget.iconType = 'help';

    // Check to see if there's custom config to apply
    if (config != null) {

      // Apply any styling config
      if (config.styling != null) {
        const stylingDispatcher = new StylingDispatcher(
          this.store,
          new StyleDefinitionsMapper(StyleDefinitionsDataHelper.GetData())
        );

        stylingDispatcher.dispatchStyles(config.styling);
      }

      // Check to see if there's any settings config
      if (config.settings != null) {

        // Apply any answer settings config
        if (config.settings.answerRanges != null) {

          const answerRanges = new Array<AnswerRange>();
          // ReSharper disable once TsResolvedFromInaccessibleModule
          __.forEach(
            config.settings.answerRanges,
            (item) => {
              // ReSharper disable once TsResolvedFromInaccessibleModule
              answerRanges.push(__.assign(new AnswerRange(), item));
            }
          );

          this.store.dispatch(
            // TODO: Troubleshoot why type safety isn't workgin here - in the meantime cast to any
            (setAnswerRangesThunk(answerRanges, new AnswerValuesCreator())) as any
          );

        }

        // ReSharper disable once TsResolvedFromInaccessibleModule
        const miscSettings: MiscSettings = __.assign(
          new MiscSettings(),
          {
            widgetName: config.settings.widgetName,
            timeOutOnAnswer: config.settings.timeOutOnAnswer,
            mainQuestion: config.settings.mainQuestion,
            introductionStatement: config.settings.introductionStatement
          }
        );

        // TODO: Troubleshoot why type safety isn't workgin here - in the meantime cast to any
        this.store.dispatch((addMiscSettings(miscSettings)) as any);

      }

    }

    // log the state
    console.log(this.store.getState());

  }

  stateReceiver(state: IApplicationState): void {

    // Items to be bound to UI that are NOT user input need a property to bind to.
    // When they're changed via state management, they need to be populated back onto
    // objects that can be one-way bound

    // If there are any user inputs that need to be changed via state, (that's an anti-pattern)
    // they will need to be added here so the state change is obsverved and can be written back to
    // the bound propery and the UI element updated.

    // The exception to this is the slider as I want to pick up the immediate-change-value

    this.introductionStatement = state.settings.miscSettings.introductionStatement;
    this.mainQuestion = state.settings.miscSettings.mainQuestion;
    this.selectedAnswerRangeQuestion = state.userState.selectedAnswerRangeQuestion;
    // ReSharper disable TsResolvedFromInaccessibleModule
    this.answerValueMin = __.first(state.settings.answerValues);
    this.answerValueMax = __.last(state.settings.answerValues);
    // ReSharper restore TsResolvedFromInaccessibleModule

    // only set this if it's there
    if (state.userState.pageState != null)
      this.pageName = state.userState.pageState.toString().toLowerCase();

    // I wanted a quick way to get user data into local storage, so just
    // dump it in and we can pull it out selectively when hydrating
    // this.myLocalStorage = state.userState;

  }

  connectedCallback() {

    super.connectedCallback();

    // The following hooks up the stateReceiver
    connectToRedux(this, this.store);

  }

  render() {

    // Get the styling config from the store and apply it to the UI

    const stylingConfig = this.store.getState().styling;

    // ReSharper disable once TsResolvedFromInaccessibleModule
    __.forEach(stylingConfig, styleProperty => {

      const jsonVariable = {};

      jsonVariable[styleProperty.styleVariableName] = styleProperty.value;
      this.updateStyles(jsonVariable);
      console.log(`Called "this.updateStyles(${styleProperty.styleVariableName}: ${styleProperty.value})"`);

    });

  }


  static get template() {
    return html`

      <style is="custom-style">

        paper-fab {
          margin: var(--nps-margin, );
          z-index: var(--nps-zindex, 99);
          position: fixed;
          top: var(--nps-top);
          bottom: var(--nps-bottom, 10px);
          left: var(--nps-left);
          right: var(--nps-right, 10px);
          --paper-fab-background: ${ColorHelper.backgroundColour()};
          color: ${ColorHelper.foregroundColour()};
        }

        paper-fab:hover {
          --paper-fab-background: ${ColorHelper.backgroundColourHover()};
          color: ${ColorHelper.foregroundColourHover()};
        }

        paper-slider {
        --paper-slider-knob-color: ${ColorHelper.backgroundColourHover()};
        --paper-slider-active-color: ${ColorHelper.backgroundColourHover()};
        margin-bottom: 20px;
        --paper-slider-container-color: ${ColorHelper.backgroundColour()};
        --paper-slider-markers-color: ${ColorHelper.foregroundColour()};
        --paper-slider-knob-start-color: ${ColorHelper.foregroundColour()};
        --paper-slider-height: 7px;
        --paper-slider-pin-color: ${ColorHelper.backgroundColourHover()};
        width: 95%;
        margin-top: 30px;
        float: left;
        }

      </style>

      <iron-localstorage id="localstorage" name="" value="[[myLocalStorage]]"></iron-localstorage>

      <paper-fab id="paper-fab" icon="icons:[[iconType]]" on-click="onFabClick"></paper-fab>

      <paper-dialog id="modal" modal on-iron-overlay-closed="onDialogClosed" oniron-overlay-canceled="onDialogCancelled">
        <div class="container">
          <iron-pages selected$="{{pageName}}" attr-for-selected="page-name" on-iron-select="onSelectedPageChanged">
            <div page-name="feedback">
              <h3>[[introductionStatement]]</h3>
              <div class="container"  style="width: 100%">
                [[mainQuestion]]
                <paper-slider id="ratings" pin snaps min="[[answerValueMin]]" max="[[answerValueMax]]" max-markers="[[answerValueMax]]" step="1" immediate-value="{{rating}}" on-immediate-value-changed="onSliderImmediateChange"></paper-slider>
                <div style="float: right; width: 5%; text-align: right; padding-top: 22px;">
                  <h2>{{rating}}</h2>
                </div>
              </div>
              <div class="container" style="float: left; width: 100%;">
                <paper-textarea label$="[[selectedAnswerRangeQuestion]] (optional)" on-value-changed="onAnswerRangeQuestionResponseChange" value="{{answerRangeQuestionResponse}}"></paper-textarea>
                <br/>
              </div>
              <div class="container" style="width: 100%">
                <div class="buttons" style="float: right">
                  <paper-button dialog-dismiss>Maybe later...</paper-button>
                  <paper-button dialog-confirm>Send my feedback</paper-button>
                </div>
              </div>
            </div>
            <div page-name="submitting">
              <h3>Your feedback is being submitted</h3>
              We're submitting your feedback. Come back and check in a moment.
              <br/>
                <div class="buttons" style="float: right">
                  <paper-button dialog-dismiss>OK</paper-button>
                </div>
            </div>
            <div page-name="submitted">
              <h3>Your feedback has been submitted</h3>
              You won't be asked again for a while
              <br/>
                <div class="buttons" style="float: right">
                  <paper-button dialog-dismiss>OK</paper-button>
                </div>
            </div>
            <div page-name="retry">
              <h3>Your feedback has failed submission</h3>
              Please try again
              <br/>
                <div class="buttons" style="float: right">
                  <paper-button dialog-confirm>Resend my feedback</paper-button>
                </div>
            </div>
          </iron-pages>
          <br/>
        </div>

      <iron-ajax id=ajax
          url$="[[APISubmissionURL]]"
          handle-as="json"
          method="post"
          on-response="handleSubmissionResponse"
          content-type="application/json"
          debounce-duration="300"></iron-ajax>

      </paper-dialog>
    `;

  }

  ready() {

    super.ready();

    // Get config to read the widget name and construct a unique id for local storage
    var localStorageId = `nps-widget-nameof-${this.store.getState().settings.miscSettings.widgetName}`;
    this.$.localstorage.name = localStorageId;

    // Check to see if there's any values to hydrate
    const localStorageData = window.localStorage.getItem(localStorageId);

    if (localStorageData != null) {
      // ReSharper disable once TsResolvedFromInaccessibleModule
      const localState: IApplicationState = __.assign(
        <IApplicationState>{},
        { userState: JSON.parse(localStorageData) as UserState }
      );

      // We can't use the bound property here as it's bound to immediate-change, so let's
      // call the directly value prop directly, which will change the immed-value
      // which will call the changed event below and alter the state
      this.$.ratings.value = localState.userState.rating;
      this.answerRangeQuestionResponse = localState.userState.answerRangeQuestionResponse;

      // If there's page state in localstorage then set it
      if (localState.userState.pageState != null) {
        this.setPageState(localState.userState.pageState);
      } else {
        // otherwise let's default to feedback
        this.setPageState('feedback');
      }
    } else {
      this.setPageState('feedback');
    }

  }



  onFabClick() {
    this.$.modal.open();
  }


  // UI items that are user input can be two-way bound but state management still needs to know about the change.
  // Any programatic change will trigger the events below and will channge the store

  onSliderImmediateChange(e) {
    // TODO: Troubleshoot why type safety isn't workgin here - in the meantime cast to any
    this.store.dispatch((setRatingValueThunk(
      e.target.immediateValue as number,
      new AnswerRangeQuestionFinder()
    )) as any);
    console.log(this.store.getState());
  }

  onAnswerRangeQuestionResponseChange(e) {
    this.store.dispatch((setAnswerRangeQuestionResponse(
      e.target.value as string
    )) as any);
    console.log(this.store.getState());
  }

  onDialogClosed(e) {
    if (e.target.closingReason.confirmed) {
      this.pageName = PageStateKeys.Submitting.toString().toLowerCase();
      const ajax = this.$.ajax;
      ajax.body = JSON.stringify(this.store.getState().userState);
      ajax.generateRequest();
    }
  }

  handleSubmissionResponse(e) {
    console.log(e);
  }

  onDialogCancelled(e) {
  }

  onSelectedPageChanged(e) {

    this.setPageState(e.target.selected);

  }

  setPageState(state: string) {
    const pageState: PageStateKeys = <keyof typeof PageStateKeys>state.toUpperCase() as PageStateKeys;
    // TODO: Troubleshoot why type safety isn't workgin here - in the meantime cast to any
    this.store.dispatch((setPageStateThunk(pageState)) as any);
  }


}

class ColorHelper {
  static backgroundColour() { return html`var(--nps-background-color, #FFE787)` };
  static foregroundColour() { return html`var(--nps-foreground-color, grey)` };
  static backgroundColourHover() { return html`var(--nps-background-hover-colour, #f2c40e)` };
  static foregroundColourHover() { return html`var(--nps-foreground-hover-colour, black)` };
}

window.customElements.define(NpsWidget.is, NpsWidget);

