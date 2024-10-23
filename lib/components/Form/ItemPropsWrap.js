"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ItemContext = _interopRequireDefault(require("./ItemContext"));

var _this = void 0;

var ItemPropsWrap = function ItemPropsWrap(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var itemProps = _ref.itemProps,
      children = _ref.children;

  if (itemProps) {
    itemProps = (0, _pick2.default)(itemProps, ['labelCol', 'controllerCol', 'shareStatus']);
    return /*#__PURE__*/_react.default.createElement(_ItemContext.default.Provider, {
      value: itemProps
    }, children);
  }

  return children;
}.bind(void 0);

ItemPropsWrap.propTypes = {
  children: _propTypes.default.node,
  itemProps: _propTypes.default.object
};

var _default = /*#__PURE__*/_react.default.memo(ItemPropsWrap);

exports.default = _default;