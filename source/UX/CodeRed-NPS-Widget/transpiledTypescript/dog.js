"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog = /** @class */ (function () {
    function Dog() {
        this._name = 'Dog';
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Dog;
}());
exports.default = Dog;
//# sourceMappingURL=dog.js.map