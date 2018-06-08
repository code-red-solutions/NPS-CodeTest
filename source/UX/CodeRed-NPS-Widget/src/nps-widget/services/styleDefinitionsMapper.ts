import { IDictionary, Dictionary } from '../../utils/Dictionary';

export default class StyleDefinitionsMapper {

  private readonly _definitions: IDictionary<string, string>;

  constructor() {
    this._definitions = new Dictionary<string, string>();
    this._definitions.put('top', '--nps-top');
    this._definitions.put('bottom', '--nps-bottom');
    this._definitions.put('left', '--nps-left');
    this._definitions.put('right', '--nps-right');
    this._definitions.put('margin', '--nps-margin');
    this._definitions.put('zindex', '--nps-zindex');
    this._definitions.put('backgroundColour', '--nps-background-color');
    this._definitions.put('foregroundColour', '--nps-foreground-color');
    this._definitions.put('backgroundHoverColour', '--nps-background-hover-colour');
    this._definitions.put('foregroundHoverColour', '--nps-foreground-hover-colour');
  }

  get definitions(): IDictionary<string, string> {
    return this._definitions;
  }

}
