"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var polymer_element_js_1 = require("@polymer/polymer/polymer-element.js");
require("@polymer/paper-fab/paper-fab.js");
require("@polymer/iron-icons/iron-icons.js");
require("@polymer/paper-styles/color.js");
// ReSharper disable InconsistentNaming
var NpsWidgetStylingConfig_ts_1 = require("../config/NpsWidgetStylingConfig.ts");
var styleDefinitionsMapper_ts_1 = require("../services/styleDefinitionsMapper.ts");
// import NpsWidgetProperties from './NpsWidgetProperties.ts';
// ReSharper restore InconsistentNaming
// ReSharper disable once InconsistentNaming
var NpsWidget = /** @class */ (function (_super) {
    __extends(NpsWidget, _super);
    function NpsWidget(config) {
        var _this = _super.call(this) || this;
        _this.iconType = 'feedback';
        // Apply config
        if (!config || !config.styling)
            _this.styling = new NpsWidgetStylingConfig_ts_1.default();
        else
            _this.styling = new NpsWidgetStylingConfig_ts_1.default(config.styling);
        _this.render();
        return _this;
    }
    Object.defineProperty(NpsWidget, "is", {
        get: function () { return 'nps-widget'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NpsWidget, "properties", {
        get: function () {
            return {
                iconType: {
                    type: String,
                    value: this.iconType
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    NpsWidget.prototype.render = function () {
        // TODO: Extract this out to seperate class for proper unit testing
        var styleDefinitionsMapper = new styleDefinitionsMapper_ts_1.default();
        /* eslint-disable */
        for (var i = 0; i < styleDefinitionsMapper.definitions.getKeys().length; i++) {
            var key = styleDefinitionsMapper.definitions.getKeys()[i];
            var variableName = styleDefinitionsMapper.definitions.get(key);
            if (variableName) {
                var value = this.styling[key];
                var jsonVariable = {};
                jsonVariable[variableName] = value;
                console.log("Called \"this.updateStyles('" + variableName + "': '" + value + "')\"");
                this.updateStyles(jsonVariable);
            }
        }
        /* eslint-enable */
    };
    Object.defineProperty(NpsWidget, "template", {
        get: function () {
            return polymer_element_js_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n      <style is=\"custom-style\">\n\n        paper-fab {\n          display: inline-block;\n          margin: var(--nps-margin, );\n          z-index: var(--nps-zindex, 99);\n          position: fixed;\n          top: var(--nps-top);\n          bottom: var(--nps-bottom, 10px);\n          left: var(--nps-left);\n          right: var(--nps-right, 10px);\n          --paper-fab-background: var(--nps-background-color, #FFE787);\n          color: var(--nps-foreground-color, darkgrey);\n        }\n\n        paper-fab:hover {\n          --paper-fab-background: var(--nps-background-hover-colour, #FFCC00);\n          color: var(--nps-foreground-hover-colour, black);\n        }\n\n      </style>\n\n      <paper-fab icon=\"icons:[[iconType]]\" on-click=\"dosm\"/>\n    "], ["\n\n      <style is=\"custom-style\">\n\n        paper-fab {\n          display: inline-block;\n          margin: var(--nps-margin, );\n          z-index: var(--nps-zindex, 99);\n          position: fixed;\n          top: var(--nps-top);\n          bottom: var(--nps-bottom, 10px);\n          left: var(--nps-left);\n          right: var(--nps-right, 10px);\n          --paper-fab-background: var(--nps-background-color, #FFE787);\n          color: var(--nps-foreground-color, darkgrey);\n        }\n\n        paper-fab:hover {\n          --paper-fab-background: var(--nps-background-hover-colour, #FFCC00);\n          color: var(--nps-foreground-hover-colour, black);\n        }\n\n      </style>\n\n      <paper-fab icon=\"icons:[[iconType]]\" on-click=\"dosm\"/>\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    NpsWidget.prototype.dosm = function () {
        console.log('dosm clicked');
    };
    return NpsWidget;
}(polymer_element_js_1.PolymerElement));
exports.default = NpsWidget;
window.customElements.define(NpsWidget.is, NpsWidget);
var templateObject_1;
//# sourceMappingURL=NpsWidget.js.map