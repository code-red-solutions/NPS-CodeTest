import { IDictionary, Dictionary } from '../utils/Dictionary';

export default class StyleDefinitionsMapper {

  private _definitions: IDictionary<string, string>;

  constructor() {
    this._definitions = new Dictionary<string, string>();
    this._definitions.put("backgroundColour", "--nps-background-color");
  }

  get Definitions(): IDictionary<string, string> {
    return this._definitions;
  }

}
