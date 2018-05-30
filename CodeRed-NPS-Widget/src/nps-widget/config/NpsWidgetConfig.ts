import NpsWidgetStylingConfig from "./Styling/NpsWidgetStylingConfig";

export default class NpsWidgetConfig {
  private _styling: NpsWidgetStylingConfig;

  constructor(npsWidgetStyling: NpsWidgetStylingConfig) {
    if (npsWidgetStyling == null) npsWidgetStyling = new NpsWidgetStylingConfig();
    this._styling = npsWidgetStyling
  }

  get styling(): NpsWidgetStylingConfig {
    return this._styling;
  }

  set styling(value: NpsWidgetStylingConfig) {
    this._styling = value;
  }

}
