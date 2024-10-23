"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTreeAllKeys = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var getTreeAllKeys = function getTreeAllKeys() {
  var _this = this;

  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var treeData = arguments.length > 1 ? arguments[1] : undefined;
  treeData.forEach(function (v) {
    (0, _newArrowCheck2.default)(this, _this);
    (v === null || v === void 0 ? void 0 : v.key) && !keys.includes(v.key) && keys.push(v.key);
    (v === null || v === void 0 ? void 0 : v.children) && getTreeAllKeys(keys, v.children);
  }.bind(this));
  return keys;
};

exports.getTreeAllKeys = getTreeAllKeys;