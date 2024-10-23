"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

var _ItemPropsWrap = _interopRequireDefault(require("./ItemPropsWrap"));

var _excluded = ["itemProps"];

function SubArea(_ref) {
  var itemProps = _ref.itemProps,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_ItemPropsWrap.default, {
    itemProps: itemProps
  }, /*#__PURE__*/_react.default.createElement(_style.SubAreaWrap, rest));
}

SubArea.propTypes = {
  /**
   * 如果存在会在所有包裹的 item 上附加该 props，会覆盖来自上层包裹的 itemProps
   */
  itemProps: _propTypes.default.shape({
    /** 具体见 item 文档 */
    labelCol: _propTypes.default.object,

    /** 具体见 item 文档 */
    controllerCol: _propTypes.default.object,

    /** 具体见 item 文档 */
    shareStatus: _propTypes.default.bool
  })
};

var _default = /*#__PURE__*/_react.default.memo(SubArea);

exports.default = _default;