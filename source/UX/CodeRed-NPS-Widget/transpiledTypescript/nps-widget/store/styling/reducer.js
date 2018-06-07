"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StlyingAction = require("./actions");
// Type-safe initialState!
exports.initialState = new Array();
var StylingReducer = function (state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case StlyingAction.StylingActionTypeKeys.ADD:
            return state;
        case StlyingAction.StylingActionTypeKeys.CLEAR_ALL:
            return exports.initialState;
        case StlyingAction.StylingActionTypeKeys.SUBTRACT:
            return state;
        default:
            return state;
    }
};
exports.default = StylingReducer;
//# sourceMappingURL=reducer.js.map