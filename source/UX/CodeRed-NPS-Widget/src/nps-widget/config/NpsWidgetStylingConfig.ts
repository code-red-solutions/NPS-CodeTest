
export default class NpsWidgetStylingConfig {

  // ReSharper disable StatementTermination
  constructor()
  constructor(styling: any)
  constructor(styling?: any)
  // ReSharper restore StatementTermination
  {

    // TODO: Extract out logic in the constructor for testability and to make it pure POCO

    if (!styling) return;

    if (!styling.left && !styling.right) {
      styling.right = '30px';
    }

    if (!styling.top && !styling.bottom) {
      styling.bottom = '30px';
    }

    if (styling.left && styling.right) {
      styling.left = null;
    }

    if (styling.top && styling.bottom) {
      styling.top = null;
    }

    if (styling.left && styling.right) {
      styling.left = null;
    }

    if (styling.top && styling.bottom) {
      styling.top = null;
    }

    this.assing(styling);
  }

  assing(o: any): void {
    let that = (<any>this);
    for (let key in o) {
      if (o.hasOwnProperty(key)) {
        let value = o[key];
        if (typeof value !== "undefined" && typeof that[key] !== "undefined")
          that[key] = value;
      }
    }
  }

  get getPropertyNames(): string[] {
    return Object.getOwnPropertyNames(this);
  }

  private _zindex: number = 99;
  get zindex(): number {
    return this._zindex;
  }
  set zindex(value: number) {
    this._zindex = value;
  }

  private _backgroundColour: string = null;
  get backgroundColour(): string {
    return this._backgroundColour;
  }
  set backgroundColour(value: string) {
    this._backgroundColour = value;
  }

  private _backgroundHoverColour: string = null;
  get backgroundHoverColour(): string {
    return this._backgroundHoverColour;
  }
  set backgroundHoverColour(value: string) {
    this._backgroundHoverColour = value;
  }

  private _foregroundColour: string = null;
  get foregroundColour(): string {
    return this._foregroundColour;
  }
  set foregroundColour(value: string) {
    this._foregroundColour = value;
  }

  private _foregroundHoverColour: string = null;
  get foregroundHoverColour(): string {
    return this._foregroundHoverColour;
  }
  set foregroundHoverColour(value: string) {
    this._foregroundHoverColour = value;
  }

  private _top: number = null;
  get top(): number {
    return this._top;
  }
  set top(value: number) {
    this._top = value;
  }

  private _bottom: number = null;
  get bottom(): number {
    return this._bottom;
  }
  set bottom(value: number) {
    this._bottom = value;
  }

  private _left: number = null;
  get left(): number {
    return this._left;
  }
  set left(value: number) {
    this._left = value;
  }

  private _right: number = null;
  get right(): number {
    return this._right;
  }
  set right(value: number) {
    this._right = value;
  }

  private _margin: number = null;
  get margin(): number {
    return this._margin;
  }
  set margin(value: number) {
    this._margin = value;
  }












}
