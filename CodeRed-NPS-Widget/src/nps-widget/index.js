import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-styles/color.js';
import stylingProps from './stylingProps.ts'

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
    this.colour = 'purple';
    this.updateStyles({ '--smth': this.colour });
    console.log('loaded nps-widget');
  }

  static get properties() {
    return stylingProps;
  }

  dosm() {
    console.log('dosm clicked');
  }
}

window.customElements.define(NpsWidget.is, NpsWidget);
