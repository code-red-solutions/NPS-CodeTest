import { PolymerElement, html } from '@polymer/polymer';
import template from './template.html';

export default class NpsWidget extends PolymerElement {
  static get properties() {
    return {
      name: {
        type: String
      },
      appVersion: {
        type: String,
        value: process.env.appVersion
      },
      ENV: {
        type: String,
        value: process.env.NODE_ENV
      }
    };
  }

  static get template() {
    return html([`${template}`]);
  }

}

window.customElements.define('nps-widget', NpsWidget);
