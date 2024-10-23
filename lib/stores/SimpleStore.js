"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _this = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SimpleStore = function SimpleStore(initialState) {
  (0, _classCallCheck2.default)(this, SimpleStore);
  return createStore(initialState);
};

exports.default = SimpleStore;

var createStore = function createStore(initialState) {
  (0, _newArrowCheck2.default)(this, _this);
  var state = initialState;
  var listeners = [];

  function setState(partial) {
    state = _objectSpread(_objectSpread({}, state), partial);
  }

  function getState() {
    return state;
  }

  function dispatch() {
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
  }

  function subscribe(listener) {
    var _this2 = this;

    listeners.push(listener);
    return {
      unsubscribe: function unsubscribe() {
        (0, _newArrowCheck2.default)(this, _this2);
        return _unsubscribe(listener);
      }.bind(this)
    };
  }

  function _unsubscribe(listener) {
    var index = listeners.indexOf(listener);
    index >= 0 && listeners.splice(index, 1);
  }

  return {
    setState: setState,
    getState: getState,
    subscribe: subscribe,
    unsubscribe: _unsubscribe,
    dispatch: dispatch
  };
}.bind(void 0);