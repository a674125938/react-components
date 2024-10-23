"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Menu = _interopRequireDefault(require("../../components/Menu"));

var _excluded = ["groupKey"];

var _this = void 0;

var Group = function Group(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var groupKey = _ref.groupKey,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_Menu.default.SubMenu, (0, _extends2.default)({}, rest, {
    subMenuKey: groupKey
  }));
}.bind(void 0);

Group.propTypes = {
  title: _propTypes.default.node.isRequired,
  styleType: _propTypes.default.oneOf(['collapse', 'popover']),
  disabled: _propTypes.default.bool
};
Group.isMenuSubMenu = true;
/**
 * @deprecated
 */

var _default = Group;
exports.default = _default;