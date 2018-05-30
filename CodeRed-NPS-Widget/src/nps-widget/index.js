import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-styles/color.js';
import npsWidgetStyling from './npsWidgetStyling.ts';

export default class NpsWidget extends PolymerElement {

  static get is() { return 'nps-widget'; }

  static get template() {
    return html`
      <div>This is my chosen colour: [[colour]] (Made by the app '[[name]]'.)</div>

      <style is="custom-style">
        paper-fab {
          display: inline-block;
          margin: 8px;
          z-index: 2;
          position: fixed;
          bottom: 30px;
          right: 25px;
          --paper-fab-background: var(--smth);
          color: var(--google-green-500);
        }

          paper-fab:hover {
            color: var(--google-yellow-700);
          }
      </style>

      <paper-fab icon="icons:feedback" on-click="dosm"/>
    `;
  }

  constructor() {
    super();
    this.name = 'Polymer 3.0 test';
    this.backgroundColour = 'purple';
    this.updateStyles({ '--smth': this.backgroundColour });
    console.log('loaded nps-widget');
  }

  static get properties() {
    return npsWidgetStyling;
  }

  dosm() {
    console.log('dosm clicked');
  }
}

window.customElements.define(NpsWidget.is, NpsWidget);
