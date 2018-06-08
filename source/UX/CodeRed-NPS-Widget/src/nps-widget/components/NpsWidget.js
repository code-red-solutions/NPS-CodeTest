import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-styles/color.js';

// ReSharper disable InconsistentNaming
import NpsWidgetStylingConfig from '../config/NpsWidgetStylingConfig.ts';
import StyleDefinitionsMapper from '../services/styleDefinitionsMapper.ts';
// import NpsWidgetProperties from './NpsWidgetProperties.ts';
// ReSharper restore InconsistentNaming

// ReSharper disable once InconsistentNaming
export default class NpsWidget extends PolymerElement {

  static get is() { return 'nps-widget'; }

  constructor(config) {

    super();
    this.iconType = 'feedback';

    // Apply config
    if (!config || !config.styling) this.styling = new NpsWidgetStylingConfig();
    else this.styling = new NpsWidgetStylingConfig(config.styling);

    this.render();
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

    // TODO: Extract this out to seperate class for proper unit testing
    const styleDefinitionsMapper = new StyleDefinitionsMapper();

    /* eslint-disable */
     for (let i = 0; i < styleDefinitionsMapper.definitions.getKeys().length; i++) {

      const key = styleDefinitionsMapper.definitions.getKeys()[i];
       const variableName = styleDefinitionsMapper.definitions.get(key);

      if (variableName) {
        const value = this.styling[key];
        const jsonVariable = {};

        jsonVariable[variableName] = value;
        console.log(`Called "this.updateStyles('${variableName}': '${value}')"`);
        this.updateStyles(jsonVariable);
      }

     }
    /* eslint-enable */

  }

  static get template() {
    return html`

      <style is="custom-style">

        paper-fab {
          display: inline-block;
          margin: var(--nps-margin, );
          z-index: var(--nps-zindex, 99);
          position: fixed;
          top: var(--nps-top);
          bottom: var(--nps-bottom, 10px);
          left: var(--nps-left);
          right: var(--nps-right, 10px);
          --paper-fab-background: var(--nps-background-color, #FFE787);
          color: var(--nps-foreground-color, darkgrey);
        }

        paper-fab:hover {
          --paper-fab-background: var(--nps-background-hover-colour, #FFCC00);
          color: var(--nps-foreground-hover-colour, black);
        }

      </style>

      <paper-fab icon="icons:[[iconType]]" on-click="dosm"/>
    `;
  }

  dosm() {
    console.log('dosm clicked');
  }
}

window.customElements.define(NpsWidget.is, NpsWidget);
