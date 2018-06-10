
export class StyleProperty {

  constructor(id: string, styleVariableName: string, value: string) {
    this.id = id;
    this.styleVariableName = styleVariableName;
    this.value = value;
  }

  id: string;
  styleVariableName: string;
  value: string;

}
