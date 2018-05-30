
export class stylingProps {
  private static _backgroundColour: string;

  static get backgroundColour():string {
    return this._backgroundColour;
  }
  static set backgroundColour(value: string) {
    this._backgroundColour = value;
  }

}
