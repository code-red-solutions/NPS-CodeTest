import * as Utils from '../../utils/Dictionary';
import Dictionary = Utils.Dictionary;
import IDictionary = Utils.IDictionary;

export default class StyleDefinitionsDataHelper {

  static GetData(): IDictionary<string, string> {

    const data = new Dictionary<string, string>();
    data.put('top', '--nps-top');
    data.put('bottom', '--nps-bottom');
    data.put('left', '--nps-left');
    data.put('right', '--nps-right');
    data.put('margin', '--nps-margin');
    data.put('zindex', '--nps-zindex');
    data.put('backgroundColour', '--nps-background-color');
    data.put('foregroundColour', '--nps-foreground-color');
    data.put('backgroundHoverColour', '--nps-background-hover-colour');
    data.put('foregroundHoverColour', '--nps-foreground-hover-colour');
    return data;

  }

}
