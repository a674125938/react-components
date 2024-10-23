"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _this = void 0;

var Pager = function Pager(props) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var prefixCls = "".concat(props.rootPrefixCls, "-item");
  var cls = "".concat(prefixCls, " ").concat(prefixCls, "-").concat(props.page);

  if (props.active) {
    cls = "".concat(cls, " ").concat(prefixCls, "-active");
  }

  if (props.className) {
    cls = "".concat(cls, " ").concat(props.className);
  }

  var handleClick = function handleClick() {
    (0, _newArrowCheck2.default)(this, _this2);
    props.onClick(props.page);
  }.bind(this);

  var handleKeyPress = function handleKeyPress(e) {
    (0, _newArrowCheck2.default)(this, _this2);
    props.onKeyPress(e, props.onClick, props.page);
  }.bind(this);

  return /*#__PURE__*/_react.default.createElement("li", {
    title: props.showTitle ? props.page : null,
    className: cls,
    onClick: handleClick,
    onKeyPress: handleKeyPress,
    tabIndex: "0"
  }, props.itemRender(props.page, 'page', /*#__PURE__*/_react.default.createElement("a", null, props.page)));
}.bind(void 0);

Pager.propTypes = {
  page: _propTypes.default.number,
  active: _propTypes.default.bool,
  last: _propTypes.default.bool,
  locale: _propTypes.default.object,
  className: _propTypes.default.string,
  showTitle: _propTypes.default.bool,
  rootPrefixCls: _propTypes.default.string,
  onClick: _propTypes.default.func,
  onKeyPress: _propTypes.default.func,
  itemRender: _propTypes.default.func
};
var _default = Pager;
exports.default = _default;