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
// import NpsWidgetProperties from './NpsWidgetProperties.ts';
var NpsWidgetStylingConfig_ts_1 = require("../config/NpsWidgetStylingConfig.ts");
var styleDefinitionsMapper_ts_1 = require("../services/styleDefinitionsMapper.ts");
var NpsWidget = /** @class */ (function (_super) {
    __extends(NpsWidget, _super);
    function NpsWidget(config) {
        var _this = _super.call(this) || this;
        _this.name = 'Polymer 3.0 test';
        // this._StyleDefinitionsMapper = new StyleDefinitionsMapper();
        if (config.styling.left && config.styling.right) {
            config.styling.left = '';
        }
        if (config.styling.top && config.styling.bottom) {
            config.styling.top = '';
        }
        if (!config.styling.left && !config.styling.right) {
            config.styling.right = '30px';
        }
        if (!config.styling.top && !config.styling.bottom) {
            config.styling.bottom = '30px';
        }
        /* eslint-disable */
        //for (var i = 0; i < Object.getOwnPropertyNames(config.styling).length; i++) {
        //  let key = Object.getOwnPropertyNames(config.styling)[i];
        //  let variableName = this._StyleDefinitionsMapper.Definitions.get(key);
        //  if (variableName) {
        //    let value = config.styling[key];
        //    let jsonVariable = {};
        //    jsonVariable[variableName] = value;
        //     console.log('Called "this.updateStyles(\'' + variableName + '\': \'' + value + '\')"');
        //    this.updateStyles(jsonVariable);
        //  }
        //  console.log('Calling update styles()');
        //  this.updateStyles();
        //}
        /* eslint-enable */
        _this._config = config;
        _this._styling = new NpsWidgetStylingConfig_ts_1.default();
        _this.styling.backgroundColour = config.styling.backgroundColour;
        return _this;
    }
    Object.defineProperty(NpsWidget, "is", {
        get: function () { return 'nps-widget'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NpsWidget.prototype, "properties", {
        get: function () {
            var x;
            x.styling = this.styling;
            return x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NpsWidget.prototype, "styling", {
        get: function () {
            return this._styling;
        },
        set: function (value) {
            this._styling = value;
        },
        enumerable: true,
        configurable: true
    });
    NpsWidget.prototype.render = function () {
        /* eslint-disable */
        this._StyleDefinitionsMapper = new styleDefinitionsMapper_ts_1.default();
        for (var i = 0; i < Object.getOwnPropertyNames(this._config.styling).length; i++) {
            var key = Object.getOwnPropertyNames(this._config.styling)[i];
            var variableName = this._StyleDefinitionsMapper.Definitions.get(key);
            if (variableName) {
                var value = this._config.styling[key];
                var jsonVariable = {};
                jsonVariable[variableName] = value;
                console.log('Called "this.updateStyles(\'' + variableName + '\': \'' + value + '\')"');
                this.updateStyles(jsonVariable);
            }
            console.log('Calling update styles()');
            this.updateStyles();
        }
        /* eslint-enable */
    };
    Object.defineProperty(NpsWidget, "template", {
        get: function () {
            return polymer_element_js_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <dom-module>\n<custom-style>\n      <style is=\"custom-style\">\n\n        paper-fab {\n          display: inline-block;\n          margin: var(--nps-margin, );\n          z-index: var(--nps-zindex, 99);\n          position: fixed;\n          top: var(--nps-top);\n          bottom: var(--nps-bottom, 10px);\n          left: var(--nps-left);\n          right: var(--nps-right, 10px);\n          --paper-fab-background: var(--nps-background-color);\n          color: var(--nps-foreground-color, darkgrey);\n        }\n\n        paper-fab:hover {\n          --paper-fab-background: var(--nps-background-hover-colour, #fc0);\n          color: var(--nps-foreground-hover-colour, black);\n        }\n\n      </style>\n</custom-style>\n      <paper-fab icon=\"icons:feedback\" on-click=\"dosm\"/>\n      </dom-module>\n    "], ["\n      <dom-module>\n<custom-style>\n      <style is=\"custom-style\">\n\n        paper-fab {\n          display: inline-block;\n          margin: var(--nps-margin, );\n          z-index: var(--nps-zindex, 99);\n          position: fixed;\n          top: var(--nps-top);\n          bottom: var(--nps-bottom, 10px);\n          left: var(--nps-left);\n          right: var(--nps-right, 10px);\n          --paper-fab-background: var(--nps-background-color);\n          color: var(--nps-foreground-color, darkgrey);\n        }\n\n        paper-fab:hover {\n          --paper-fab-background: var(--nps-background-hover-colour, #fc0);\n          color: var(--nps-foreground-hover-colour, black);\n        }\n\n      </style>\n</custom-style>\n      <paper-fab icon=\"icons:feedback\" on-click=\"dosm\"/>\n      </dom-module>\n    "])));
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