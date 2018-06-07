"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.internalDict = {};
    }
    Dictionary.prototype.getKeys = function () {
        var keys = [];
        for (var key in this.internalDict) {
            keys.push(key);
        }
        return keys;
    };
    Dictionary.prototype.getValues = function () {
        var vals = [];
        for (var key in this.internalDict) {
            vals.push(this.internalDict[key]);
        }
        return vals;
    };
    Dictionary.prototype.get = function (key) {
        return this.internalDict[key];
    };
    Dictionary.prototype.put = function (key, val) {
        this.internalDict[key] = val;
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
//# sourceMappingURL=Dictionary.js.map