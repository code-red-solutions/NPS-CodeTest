// external libraries
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-styles/color.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-button/paper-button.js';
import * as _ from 'lodash';

// local source
import { configureStore } from '../store/store';
// import SettingsAnswerRangeDispatcher from '../services/SettingsAnswerRangeDispatcher.ts';
import StylingDispatcher from '../services/StylingDispatcher.ts';
import StyleDefinitionsMapper from '../services/StyleDefinitionsMapper.ts';
import StyleDefinitionsDataHelper from '../data/StyleDefinitionsDataHelper.ts';
import AnswerValuesCreator from '../services/AnswerValuesCreator.ts';
import { MiscSettings } from '../store/settings/types.ts';
import { addMiscSettings, setAnswerRangesThunk } from '../store/settings/actions.ts';

export default class NpsWidget extends PolymerElement {

  static get is() { return 'nps-widget'; }

  constructor(config) {

    super();
    this.iconType = 'feedback';
    this.store = configureStore();

    // log the state
    console.log(this.store.getState());

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

          this.store.dispatch(
            setAnswerRangesThunk(config.settings.answerRanges, new AnswerValuesCreator())
          );

        }

        const miscSettings = _.assign(
          new MiscSettings(),
          {
            widgetName: config.settings.widgetName,
            timeOutOnAnswer: config.settings.timeOutOnAnswer,
            mainQuestion: config.settings.mainQuestion,
            introductionStatement: config.settings.introductionStatement
          }
        );

        this.store.dispatch(addMiscSettings(miscSettings));

      }

    }

    // log the state
    console.log(this.store.getState());

  }

  static get properties() {
    return {
      iconType: {
        type: String,
        value: this.iconType
      }
    };
  }

  render() {

    const stylingConfig = this.store.getState().styling;
    const widget = this;

    _.forEach(stylingConfig, function (styleProperty) {

      const jsonVariable = {};

      jsonVariable[styleProperty.styleVariableName] = styleProperty.value;
      widget.updateStyles(jsonVariable);
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
          --paper-fab-background: var(--nps-background-color, #FFE787);
          color: var(--nps-foreground-color, lightgrey);
        }

        paper-fab:hover {
          --paper-fab-background: var(--nps-background-hover-colour, #f2c40e);
          color: var(--nps-foreground-hover-colour, black);
        }

      </style>

      <paper-fab icon="icons:{{iconType}}" on-click="dosm"></paper-fab>

      <paper-dialog id="modal" modal>
        <h2>Header</h2>
          Lorem ipsum...
        <div class="buttons">
          <paper-button dialog-dismiss>Cancel</paper-button>
          <paper-button dialog-confirm autofocus>Accept</paper-button>
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
    this.iconType = this.iconType === 'help' ? 'feedback' : 'help';
  }
}

window.customElements.define(NpsWidget.is, NpsWidget);
