"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Portal = _interopRequireDefault(require("rc-util/lib/Portal"));

var _index = _interopRequireDefault(require("./index"));

_Portal.default.prototype.render = function () {
  // eslint-disable-line
  return this.props.children;
};

var render = _index.default.prototype.render;

_index.default.prototype.render = function () {
  // eslint-disable-line
  var tree = render.call(this);

  if (this.state.popupVisible || this._component) {
    return tree;
  }

  return tree[0];
};

var _default = _index.default;
exports.default = _default;