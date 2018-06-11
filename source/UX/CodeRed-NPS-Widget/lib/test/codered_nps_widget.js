(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("codered_nps_widget", [], factory);
	else if(typeof exports === 'object')
		exports["codered_nps_widget"] = factory();
	else
		root["codered_nps_widget"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index-test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index-test.js":
/*!***************************!*\
  !*** ./src/index-test.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleDefinitionsDataHelper = exports.IStyleDefinitionsDataHelper = exports.StylingDispatcher = exports.IStylingDispatcher = exports.StyleDefinitionsMapper = exports.IStyleDefinitionsMapper = undefined;

var _StyleDefinitionsMapper = __webpack_require__(/*! ./nps-widget/services/StyleDefinitionsMapper.ts */ "./src/nps-widget/services/StyleDefinitionsMapper.ts");

var _StyleDefinitionsMapper2 = _interopRequireDefault(_StyleDefinitionsMapper);

var _StylingDispatcher = __webpack_require__(/*! ./nps-widget/services/StylingDispatcher.ts */ "./src/nps-widget/services/StylingDispatcher.ts");

var _StylingDispatcher2 = _interopRequireDefault(_StylingDispatcher);

var _StyleDefinitionsDataHelper = __webpack_require__(/*! ./nps-widget/data/StyleDefinitionsDataHelper.ts */ "./src/nps-widget/data/StyleDefinitionsDataHelper.ts");

var _StyleDefinitionsDataHelper2 = _interopRequireDefault(_StyleDefinitionsDataHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.IStyleDefinitionsMapper = _StyleDefinitionsMapper.IStyleDefinitionsMapper;
exports.StyleDefinitionsMapper = _StyleDefinitionsMapper2.default;
exports.IStylingDispatcher = _StylingDispatcher.IStylingDispatcher;
exports.StylingDispatcher = _StylingDispatcher2.default;
exports.IStyleDefinitionsDataHelper = _StyleDefinitionsDataHelper.IStyleDefinitionsDataHelper;
exports.StyleDefinitionsDataHelper = _StyleDefinitionsDataHelper2.default;

/***/ }),

/***/ "./src/nps-widget/data/StyleDefinitionsDataHelper.ts":
/*!***********************************************************!*\
  !*** ./src/nps-widget/data/StyleDefinitionsDataHelper.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils = __webpack_require__(/*! ../../utils/Dictionary */ "./src/utils/Dictionary.ts");
var Dictionary = Utils.Dictionary;
var StyleDefinitionsDataHelper = /** @class */ (function () {
    function StyleDefinitionsDataHelper() {
    }
    StyleDefinitionsDataHelper.GetData = function () {
        var data = new Dictionary();
        data.put('top', '--nps-top');
        data.put('bottom', '--nps-bottom');
        data.put('left', '--nps-left');
        data.put('right', '--nps-right');
        data.put('margin', '--nps-margin');
        data.put('zindex', '--nps-zindex');
        data.put('backgroundColour', '--nps-background-color');
        data.put('foregroundColour', '--nps-foreground-color');
        data.put('backgroundHoverColour', '--nps-background-hover-colour');
        data.put('foregroundHoverColour', '--nps-foreground-hover-colour');
        return data;
    };
    return StyleDefinitionsDataHelper;
}());
exports.default = StyleDefinitionsDataHelper;


/***/ }),

/***/ "./src/nps-widget/services/StyleDefinitionsMapper.ts":
/*!***********************************************************!*\
  !*** ./src/nps-widget/services/StyleDefinitionsMapper.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StyleDefinitionsMapper = /** @class */ (function () {
    function StyleDefinitionsMapper(definitions) {
        this._definitions = definitions;
    }
    Object.defineProperty(StyleDefinitionsMapper.prototype, "definitions", {
        get: function () {
            return this._definitions;
        },
        enumerable: true,
        configurable: true
    });
    return StyleDefinitionsMapper;
}());
exports.default = StyleDefinitionsMapper;


/***/ }),

/***/ "./src/nps-widget/services/StylingDispatcher.ts":
/*!******************************************************!*\
  !*** ./src/nps-widget/services/StylingDispatcher.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = __webpack_require__(/*! ../store/styling/actions */ "./src/nps-widget/store/styling/actions.ts");
var types_1 = __webpack_require__(/*! ../store/styling/types */ "./src/nps-widget/store/styling/types.ts");
var StylingDispatcher = /** @class */ (function () {
    function StylingDispatcher(store, styleDefinitionsMapper) {
        this.styleDefinitionsMapper = styleDefinitionsMapper;
        this.store = store;
    }
    StylingDispatcher.prototype.dispatchStyles = function (styling) {
        for (var i = 0; i < this.styleDefinitionsMapper.definitions.getKeys().length; i++) {
            var id = this.styleDefinitionsMapper.definitions.getKeys()[i];
            var styleVariableName = this.styleDefinitionsMapper.definitions.get(id);
            var value = styling[id] || null;
            var styleProperty = new types_1.StyleProperty(id, styleVariableName, value);
            this.store.dispatch(actions_1.addStyle(styleProperty));
        }
    };
    return StylingDispatcher;
}());
exports.default = StylingDispatcher;


/***/ }),

/***/ "./src/nps-widget/store/styling/actions.ts":
/*!*************************************************!*\
  !*** ./src/nps-widget/store/styling/actions.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StylingActionTypeKeys;
(function (StylingActionTypeKeys) {
    StylingActionTypeKeys["ClearAll"] = "CLEAR_ALL";
    StylingActionTypeKeys["Add"] = "ADD";
    StylingActionTypeKeys["OtherAction"] = "___other_action____";
})(StylingActionTypeKeys = exports.StylingActionTypeKeys || (exports.StylingActionTypeKeys = {}));
exports.clearStyles = function () { return ({
    type: StylingActionTypeKeys.ClearAll
}); };
exports.addStyle = function (styleProperty) { return ({
    type: StylingActionTypeKeys.Add,
    styleProperty: styleProperty
}); };
//const addStyleThunk: ActionCreator<ThunkResult<Action>> = (styleProperty: StyleProperty) => {
//  return (dispatch: Dispatch<IAddAction>): Action  => {
//    // side effects here
//    return dispatch({
//      type: StylingActionTypeKeys.Add,
//      styleProperty: styleProperty
//    });
//  };
//};


/***/ }),

/***/ "./src/nps-widget/store/styling/types.ts":
/*!***********************************************!*\
  !*** ./src/nps-widget/store/styling/types.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StyleProperty = /** @class */ (function () {
    function StyleProperty(id, styleVariableName, value) {
        this.id = id;
        this.styleVariableName = styleVariableName;
        this.value = value;
    }
    return StyleProperty;
}());
exports.StyleProperty = StyleProperty;


/***/ }),

/***/ "./src/utils/Dictionary.ts":
/*!*********************************!*\
  !*** ./src/utils/Dictionary.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ })

/******/ });
});
//# sourceMappingURL=codered_nps_widget.js.map