"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _this = void 0;

var supportSticky = null;

var checkStickySupport = function checkStickySupport() {
  (0, _newArrowCheck2.default)(this, _this);
  var testDOM = document.createElement('div');
  var style = testDOM.style;
  var prefix = ['', '-o-', '-webkit-', '-moz-', '-ms-'];
  var support = false;

  for (var i = 0; i < prefix.length; i += 1) {
    var stickyName = "".concat(prefix[i], "sticky");
    style.position = stickyName;
    if (style.position === stickyName) support = true;
    break;
  }

  return support;
}.bind(void 0);

var _default = function () {
  (0, _newArrowCheck2.default)(this, _this);
  return supportSticky === null ? supportSticky = checkStickySupport() : supportSticky;
}.bind(void 0);

exports.default = _default;