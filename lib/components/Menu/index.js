"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Item", {
  enumerable: true,
  get: function get() {
    return _Item.default;
  }
});
Object.defineProperty(exports, "SubMenu", {
  enumerable: true,
  get: function get() {
    return _SubMenu.default;
  }
});
exports.default = void 0;

var _type = require("../../type");

var _Menu = _interopRequireDefault(require("./Menu"));

var _Item = _interopRequireDefault(require("./Item"));

var _SubMenu = _interopRequireDefault(require("./SubMenu"));

var ExportMenu = (0, _type.ExportComponent)(_Menu.default, {
  Item: _Item.default,
  SubMenu: _SubMenu.default
});
var _default = ExportMenu;
exports.default = _default;