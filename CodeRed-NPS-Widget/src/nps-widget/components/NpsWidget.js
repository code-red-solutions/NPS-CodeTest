import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-styles/color.js';
// import NpsWidgetProperties from './NpsWidgetProperties.ts';
// import NpsWidgetStylingConfig from '../config/NpsWidgetStylingConfig.ts';
import StyleDefinitionsMapper from '../services/styleDefinitionsMapper.ts';

export default class NpsWidget extends PolymerElement {

  static get is() { return 'nps-widget'; }

  constructor(config) {

    super();

    this.name = 'Polymer 3.0 test';

    this._StyleDefinitionsMapper = new StyleDefinitionsMapper();

    if (config.styling.left && config.styling.right) {
      config.styling.left = '';
    }

    if (config.styling.top && config.styling.bottom) {
      config.styling.top = '';
    }

    if (!config.styling.left && !config.styling.right) {
      config.styling.right = '30px';
    }

    if (!config.styling.top && !config.styling.bottom) {
      config.styling.bottom = '30px';
    }

    /* eslint-disable */
    for (var i = 0; i < Object.getOwnPropertyNames(config.styling).length; i++) {

      let key = Object.getOwnPropertyNames(config.styling)[i];
      let variableName = this._StyleDefinitionsMapper.Definitions.get(key);

      if (variableName) {
        let value = config.styling[key];
        let jsonVariable = {};

        jsonVariable[variableName] = value;
        this.updateStyles(jsonVariable);
      }

    }
    /* eslint-enable */

    // this._styling = new NpsWidgetStylingConfig();
    // this.styling.backgroundColour = config.styling.backgroundColour;

  }

  get styling() {
    return this._styling;
  }

  set styling(value) {
    this._styling = value;
  }

  render() {
    this.updateStyles({ '--nps-background-color': this.styling.backgroundColour });
  }

  static get template() {
    return html`
      <style is="custom-style">

        paper-fab {
          display: inline-block;
          margin: var(--nps-margin, 8px);
          z-index: var(--nps-zindex, 99);
          position: fixed;
          top: var(--nps-top);
          bottom: var(--nps-bottom);
          left: var(--nps-left);
          right: var(--nps-right);
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
