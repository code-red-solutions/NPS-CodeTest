"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NpsWidgetStylingConfig = /** @class */ (function () {
    function NpsWidgetStylingConfig(styling) {
        // TODO: Extract out logic in the constructor for testability and to make it pure POCO
        this._zindex = null;
        this._backgroundColour = null;
        this._backgroundHoverColour = null;
        this._foregroundColour = null;
        this._foregroundHoverColour = null;
        this._top = null;
        this._bottom = null;
        this._left = null;
        this._right = null;
        this._margin = null;
        if (!styling)
            return;
        // Clear contradicting styles
        // Will fallback to default styles specified in the template
        if (styling.left && styling.right) {
            styling.left = styling.right = null;
        }
        if (styling.top && styling.bottom) {
            styling.top = styling.bottom = null;
        }
        this.assing(styling);
    }
    NpsWidgetStylingConfig.prototype.assing = function (o) {
        var that = this;
        for (var key in o) {
            if (o.hasOwnProperty(key)) {
                var value = o[key];
                if (typeof value !== "undefined" && typeof that[key] !== "undefined")
                    that[key] = value;
            }
        }
    };
    Object.defineProperty(NpsWidgetStylingConfig.prototype, "zindex", {
        get: function () {
            return this._zindex;
        },
        set: function (value) {
            this._zindex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NpsWidgetStylingConfig.prototype, "backgroundColour", {
        get: function () {
            return this._backgroundColour;
        },
        set: function (value) {
            this._backgroundColour = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NpsWidgetStylingConfig.prototype, "backgroundHoverColour", {
        get: function () {
            return this._backgroundHoverColour;
        },
        set: function (value) {
            this._backgroundHoverColour = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NpsWidgetStylingConfig.prototype, "foregroundColour", {
        get: function () {
            return this._foregroundColour;
        },
        set: function (value) {
            this._foregroundColour = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NpsWidgetStylingConfig.prototype, "foregroundHoverColour", {
        get: function () {
            return this._foregroundHoverColour;
        },
        set: function (value) {
            this._foregroundHoverColour = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NpsWidgetStylingConfig.prototype, "top", {
        get: function () {
            return this._top;
        },
        set: function (value) {
            this._top = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NpsWidgetStylingConfig.prototype, "bottom", {
        get: function () {
            return this._bottom;
        },
        set: function (value) {
            this._bottom = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NpsWidgetStylingConfig.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (value) {
            this._left = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NpsWidgetStylingConfig.prototype, "right", {
        get: function () {
            return this._right;
        },
        set: function (value) {
            this._right = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NpsWidgetStylingConfig.prototype, "margin", {
        get: function () {
            return this._margin;
        },
        set: function (value) {
            this._margin = value;
        },
        enumerable: true,
        configurable: true
    });
    return NpsWidgetStylingConfig;
}());
exports.default = NpsWidgetStylingConfig;
//# sourceMappingURL=NpsWidgetStylingConfig.js.map