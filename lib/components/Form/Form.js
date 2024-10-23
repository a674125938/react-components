"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ConfigContext = _interopRequireDefault(require("../../components/ConfigProvider/ConfigContext"));

var _style = require("./style");

var _ItemPropsWrap = _interopRequireDefault(require("./ItemPropsWrap"));

var _excluded = ["itemProps", "onSubmit"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Form = function Form(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var itemProps = _ref.itemProps,
      onSubmit = _ref.onSubmit,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_ConfigContext.default),
      preventFormDefaultAction = _useContext.preventFormDefaultAction;

  var handleSubmit = _react.default.useCallback(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);

    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    onSubmit && onSubmit(e);
  }.bind(this), [onSubmit]);

  return /*#__PURE__*/_react.default.createElement(_ItemPropsWrap.default, {
    itemProps: itemProps
  }, /*#__PURE__*/_react.default.createElement(_style.FormWrap, (0, _extends2.default)({
    onSubmit: preventFormDefaultAction ? handleSubmit : onSubmit
  }, rest)));
}.bind(void 0);

var Size = ['md', 'lg'];
Form.propTypes = {
  /** @ignore */
  onSubmit: _propTypes.default.func,

  /**
   * 配合表单控件的size使用
   */
  size: _propTypes.default.oneOf(Size),

  /**
   * 如果存在会在所有包裹的 item 上附加该 props
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
Form.defaultProps = {
  size: 'md'
};

var _default = /*#__PURE__*/_react.default.memo(Form);

exports.default = _default;