"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dictionary_1 = require("../../utils/Dictionary");
var StyleDefinitionsMapper = /** @class */ (function () {
    function StyleDefinitionsMapper() {
        this._definitions = new Dictionary_1.Dictionary();
        this._definitions.put("top", "--nps-top");
        this._definitions.put("bottom", "--nps-bottom");
        this._definitions.put("left", "--nps-left");
        this._definitions.put("right", "--nps-right");
        this._definitions.put("margin", "--nps-margin");
        this._definitions.put("zindex", "--nps-zindex");
        this._definitions.put("backgroundColour", "--nps-background-color");
        this._definitions.put("foregroundColour", "--nps-foreground-color");
        this._definitions.put("backgroundHoverColour", "--nps-background-hover-colour");
        this._definitions.put("foregroundHoverColour", "--nps-foreground-hover-colour");
    }
    Object.defineProperty(StyleDefinitionsMapper.prototype, "Definitions", {
        get: function () {
            return this._definitions;
        },
        enumerable: true,
        configurable: true
    });
    return StyleDefinitionsMapper;
}());
exports.default = StyleDefinitionsMapper;
//# sourceMappingURL=styleDefinitionsMapper.js.map