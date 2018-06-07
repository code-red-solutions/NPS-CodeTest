"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NpsWidgetStylingConfig_1 = require("./NpsWidgetStylingConfig");
var NpsWidgetConfig = /** @class */ (function () {
    function NpsWidgetConfig(npsWidgetStyling) {
        if (npsWidgetStyling == null)
            npsWidgetStyling = new NpsWidgetStylingConfig_1.default();
        this._styling = npsWidgetStyling;
    }
    Object.defineProperty(NpsWidgetConfig.prototype, "styling", {
        get: function () {
            return this._styling;
        },
        set: function (value) {
            this._styling = value;
        },
        enumerable: true,
        configurable: true
    });
    return NpsWidgetConfig;
}());
exports.default = NpsWidgetConfig;
//# sourceMappingURL=NpsWidgetConfig.js.map