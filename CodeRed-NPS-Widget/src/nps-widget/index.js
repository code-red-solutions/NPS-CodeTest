import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-styles/color.js';
// import NpsWidgetProperties from './NpsWidgetProperties.ts';
import NpsWidgetStylingConfig from './config/NpsWidgetStylingConfig.ts';

export default class NpsWidget extends PolymerElement {

  static get is() { return 'nps-widget'; }

  constructor(config) {
    super();
    this.name = 'Polymer 3.0 test';

    this._styling = new NpsWidgetStylingConfig();
    // create extra variable as HTML literal below can't hande properties of properties
    this._myColour = this.styling.backgroundColour = config.styling.backgroundColour;

    this.updateStyles({ '--nps-background-color': (this.styling.backgroundColour || '') });
    console.log('loaded nps-widget');
  }

  get styling() {
    return this._styling;
  }

  set styling(value) {
    this._styling = value;
  }

  render() {
    this.updateStyles({ '--smth': this.styling.backgroundColour });
  }

  static get template() {
    return html`
      <div>This is my chosen colour: [[_myColour]]. (Made by the app '[[name]]'.)</div>

      <style is="custom-style">

        paper-fab {
          display: inline-block;
          margin: var(--nps-margin, 8px);
          z-index: var(--nps-zindex, 99);
          position: fixed;
          top: var(--nps-top, );
          bottom: var(--nps-bottom, 30px);
          left: var(--nps-left, );
          right: var(--nps-right, 30px);
          --paper-fab-background: var(--nps-background-color, #FFDB4C);
          color: var(--nps-foreground-color, darkgrey);
        }

        paper-fab:hover {
          --paper-fab-background: var(--nps-background-hover-colour, #fc0);
          color: var(--nps-foreground-hover-colour, black);
        }

      </style>

      <paper-fab icon="icons:feedback" on-click="dosm"/>
    `;
  }

  dosm() {
    console.log('dosm clicked');
  }
}

window.customElements.define(NpsWidget.is, NpsWidget);
