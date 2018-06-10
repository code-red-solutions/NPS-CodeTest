"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducer_1 = require("./styling/reducer");
var reducers = redux_1.combineReducers({
    styling: reducer_1.default
});
exports.default = reducers;
//# sourceMappingURL=reducers.js.map