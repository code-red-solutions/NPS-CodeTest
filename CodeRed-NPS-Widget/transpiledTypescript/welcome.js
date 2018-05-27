/*export default*/ var Welcome = /** @class */ (function () {
    function Welcome(usersName) {
        this._name = usersName;
    }
    ;
    Object.defineProperty(Welcome.prototype, "usersName", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Welcome.prototype.GetWelcomeMessage = function () {
        return "<h2>Hello there " + this._name + ", Let's learn TypeScript</h2>";
    };
    Welcome.prototype.ClickMeButton = function () {
        document.getElementById("divMsg").innerHTML = this.GetWelcomeMessage();
    };
    return Welcome;
}());
//# sourceMappingURL=welcome.js.map