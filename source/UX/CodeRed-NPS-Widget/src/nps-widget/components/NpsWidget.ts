// external libraries
// import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-styles/color.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-slider/paper-slider.js';
import '@polymer/iron-fit-behavior/iron-fit-behavior.js';
import * as _ from 'lodash';

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

export default class NpsWidget extends PolymerElement implements IReduxBindable {

  private store: Store<IApplicationState> = configureStore(undefined);
  private introductionStatement: string;
  private iconType: string = 'feedback';
  private mainQuestion: string;
  private answerValueMin: number;
  private answerValueMax: number;

  static get is() { return 'nps-widget'; }

  constructor(config) {

    super();

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
          _.forEach(
            config.settings.answerRanges,
            (item) => {
              // ReSharper disable once TsResolvedFromInaccessibleModule
              answerRanges.push(_.assign(new AnswerRange(), item));
            }
          );

          this.store.dispatch(
            // TODO: Troubleshoot why type safety isn't workgin here - in the meantime cast to any
            (setAnswerRangesThunk(answerRanges, new AnswerValuesCreator())) as any
          );

        }

        // ReSharper disable once TsResolvedFromInaccessibleModule
        const miscSettings: MiscSettings = _.assign(
          new MiscSettings(),
          {
            widgetName: config.settings.widgetName,
            timeOutOnAnswer: config.settings.timeOutOnAnswer,
            mainQuestion: config.settings.mainQuestion,
            introductionStatement: config.settings.introductionStatement
          }
        );

        // TODO: Troubleshoot why type safety isn't workgin here - in the meantime cast to any
        this.store.dispatch(addMiscSettings(miscSettings));

      }

    }

    // log the state
    console.log(this.store.getState());

  }

  stateReceiver(state: IApplicationState): void {
    this.introductionStatement = state.settings.miscSettings.introductionStatement;
    this.mainQuestion = state.settings.miscSettings.mainQuestion;
    // ReSharper disable TsResolvedFromInaccessibleModule
    this.answerValueMin = _.first(state.settings.answerValues);
    this.answerValueMax = _.last(state.settings.answerValues);
    // ReSharper restore TsResolvedFromInaccessibleModule
  }

  connectedCallback() {
    super.connectedCallback();
    connectToRedux(this, this.store);
  }

  render() {

    const stylingConfig = this.store.getState().styling;

    // ReSharper disable once TsResolvedFromInaccessibleModule
    _.forEach(stylingConfig, styleProperty => {

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
          width: 100%;
          margin-top: 30px;
          margin-bottom: 20px;
          --paper-slider-container-color: ${ColorHelper.backgroundColour()};
--paper-slider-markers-color: ${ColorHelper.foregroundColour()};
--paper-slider-knob-start-color: ${ColorHelper.foregroundColour()};
--paper-slider-height: 7px;
--paper-slider-pin-color: ${ColorHelper.backgroundColourHover()};


          
        }

      </style>

      <paper-fab icon="icons:[[iconType]]" on-click="dosm"></paper-fab>

      <paper-dialog id="modal" modal>
        <div class="container">
          <h3>{{introductionStatement}}</h3>
            <span>[[mainQuestion]]</span>
            <paper-slider id="ratings" pin snaps min="[[answerValueMin]]" max="[[answerValueMax]]" max-markers="[[answerValueMax]]" step="1" value=""></paper-slider>
          <div class="buttons">
            <paper-button dialog-dismiss>Maybe later...</paper-button>
            <paper-button dialog-confirm>Send my feedback</paper-button>
          </div>
        </div>
      </paper-dialog>
    `;

  }

  ready() {
    super.ready();
  }

  dosm() {
    console.log('dosm clicked');
    this.$.modal.open();
  }
}

class ColorHelper {
  static backgroundColour() { return html`var(--nps-background-color, #FFE787)` };
  static foregroundColour() { return html`var(--nps-foreground-color, grey)` };
  static backgroundColourHover() { return html`var(--nps-background-hover-colour, #f2c40e)` };
  static foregroundColourHover() { return html`var(--nps-foreground-hover-colour, black)` };
}

window.customElements.define(NpsWidget.is, NpsWidget);
