import { IDictionary } from '../../utils/Dictionary';

export interface IStyleDefinitionsMapper {
  definitions: IDictionary<string, string>;
}

export default class StyleDefinitionsMapper implements IStyleDefinitionsMapper {

  private readonly _definitions: IDictionary<string, string>;

  constructor(definitions: IDictionary<string, string>) {
    this._definitions = definitions;
  }

  get definitions(): IDictionary<string, string> {
    return this._definitions;
  }

}
