
export default class Welcome {

  constructor(usersName: string) {
    this._name = usersName;
  };

  private _name: string;

  get usersName():string {
    return this._name;
  }
  set usersName(value: string) {
    this._name = value;
  }

  GetWelcomeMessage():string {
    return "<h2>Hello there " + this._name + ", Let's learn TypeScript</h2>";
  }

  ClickMeButton() {
    document.getElementById("divMsg").innerHTML = this.GetWelcomeMessage();
  }



}
