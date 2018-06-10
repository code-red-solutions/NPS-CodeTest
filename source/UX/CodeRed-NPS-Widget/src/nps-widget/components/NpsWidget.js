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
import StylingDispatcher from '../services/StylingDispatcher.ts';
import StyleDefinitionsMapper from '../services/StyleDefinitionsMapper.ts';

export default class NpsWidget extends PolymerElement {

  static get is() { return 'nps-widget'; }

  constructor(config) {

    super();
    this.iconType = 'feedback';
    this.store = configureStore();

    if (config != null && config.styling != null) {

      const stylingDispatcher = new StylingDispatcher(this.store, new StyleDefinitionsMapper());

      stylingDispatcher.dispatchStyles(config.styling);

    }

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
