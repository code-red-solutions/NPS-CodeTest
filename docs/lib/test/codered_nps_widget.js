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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./src/cat.js":
/*!********************!*\
  !*** ./src/cat.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cat = function () {
  function Cat() {
    _classCallCheck(this, Cat);

    this._name = 'Cat';
  }

  _createClass(Cat, [{
    key: 'name',
    get: function get() {
      return this._name;
    }
  }]);

  return Cat;
}();

exports.default = Cat;

/***/ }),

/***/ "./src/dog.js":
/*!********************!*\
  !*** ./src/dog.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dog = function () {
  function Dog() {
    _classCallCheck(this, Dog);

    this._name = 'Dog';
  }

  _createClass(Dog, [{
    key: 'name',
    get: function get() {
      return this._name;
    }
  }]);

  return Dog;
}();

exports.default = Dog;

/***/ }),

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
exports.NpsWidgetStylingConfig = exports.NpsWidgetConfig = exports.Welcome = exports.Dog = exports.Cat = undefined;

var _cat = __webpack_require__(/*! ./cat.js */ "./src/cat.js");

var _cat2 = _interopRequireDefault(_cat);

var _dog = __webpack_require__(/*! ./dog.js */ "./src/dog.js");

var _dog2 = _interopRequireDefault(_dog);

var _welcome = __webpack_require__(/*! ./welcome.ts */ "./src/welcome.ts");

var _welcome2 = _interopRequireDefault(_welcome);

var _NpsWidgetConfig = __webpack_require__(/*! ./nps-widget/config/NpsWidgetConfig */ "./src/nps-widget/config/NpsWidgetConfig.ts");

var _NpsWidgetConfig2 = _interopRequireDefault(_NpsWidgetConfig);

var _NpsWidgetStylingConfig = __webpack_require__(/*! ./nps-widget/config/NpsWidgetStylingConfig */ "./src/nps-widget/config/NpsWidgetStylingConfig.ts");

var _NpsWidgetStylingConfig2 = _interopRequireDefault(_NpsWidgetStylingConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Cat = _cat2.default;
exports.Dog = _dog2.default;
exports.Welcome = _welcome2.default;
exports.NpsWidgetConfig = _NpsWidgetConfig2.default;
exports.NpsWidgetStylingConfig = _NpsWidgetStylingConfig2.default;

/***/ }),

/***/ "./src/nps-widget/config/NpsWidgetConfig.ts":
/*!**************************************************!*\
  !*** ./src/nps-widget/config/NpsWidgetConfig.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NpsWidgetStylingConfig_1 = __webpack_require__(/*! ./NpsWidgetStylingConfig */ "./src/nps-widget/config/NpsWidgetStylingConfig.ts");
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


/***/ }),

/***/ "./src/nps-widget/config/NpsWidgetStylingConfig.ts":
/*!*********************************************************!*\
  !*** ./src/nps-widget/config/NpsWidgetStylingConfig.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NpsWidgetStylingConfig = /** @class */ (function () {
    function NpsWidgetStylingConfig() {
    }
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


/***/ }),

/***/ "./src/welcome.ts":
/*!************************!*\
  !*** ./src/welcome.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Welcome = /** @class */ (function () {
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
exports.default = Welcome;


/***/ })

/******/ });
});
//# sourceMappingURL=codered_nps_widget.js.map