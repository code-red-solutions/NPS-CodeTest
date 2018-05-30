import { npsWidgetStyling } from "./npsWidgetStyling";

export class npsWidgetProperties {
  private static _styling: npsWidgetStyling;

  static get styling(): npsWidgetStyling {
    return this._styling;
  }
  static set styling(value: npsWidgetStyling) {
    this._styling = value;
  }

}
