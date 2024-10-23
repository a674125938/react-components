"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Tooltip = _interopRequireDefault(require("../../components/Tooltip"));

var _ItemContext = _interopRequireDefault(require("./ItemContext"));

var _ControllerContext = _interopRequireDefault(require("./ControllerContext"));

var _style = require("./style");

var _excluded = ["label", "required", "children", "labelCol", "controllerCol", "status", "tip", "shareStatus", "help"],
    _excluded2 = ["label", "required", "children", "labelCol", "controllerCol", "status", "tip", "shareStatus", "help"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var HelpWithoutMemo = function HelpWithoutMemo(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var help = _ref.help;
  return help ? /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    popup: help,
    align: {
      points: ['bl', 'tl'],
      overflow: {
        adjustX: 1,
        adjustY: 1
      },
      offset: [-10, -10],
      targetOffset: [0, 0]
    }
  }, /*#__PURE__*/_react.default.createElement(_style.HelpIcon, {
    type: "question-circle",
    size: "14px"
  })) : null;
}.bind(void 0);

var Help = /*#__PURE__*/_react.default.memo(HelpWithoutMemo);

var formatTip = function formatTip(tip) {
  (0, _newArrowCheck2.default)(this, _this);
  if (typeof tip === 'string' || /*#__PURE__*/_react.default.isValidElement(tip)) return {
    content: tip
  };
  return tip;
}.bind(void 0);

var RenderTip = function RenderTip(_ref2) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var tip = _ref2.tip,
      status = _ref2.status;
  var finalTip = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return formatTip(tip);
  }.bind(this), [tip]);
  return finalTip ? /*#__PURE__*/_react.default.createElement(_style.Tip, {
    spacing: "sm",
    status: status
  }, finalTip.icon === false ? null : /*#__PURE__*/_react.default.createElement("div", {
    className: _style.tipIconCls
  }, finalTip.icon || finalTip.icon === null || finalTip.icon === false ? finalTip.icon : /*#__PURE__*/_react.default.createElement(_style.StatusIcon, {
    status: status,
    spin: status === 'loading'
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _style.tipContentCls
  }, finalTip.content)) : null;
}.bind(void 0);

var GridItem = function GridItem(props) {
  (0, _newArrowCheck2.default)(this, _this);
  var label = props.label,
      required = props.required,
      children = props.children,
      labelCol = props.labelCol,
      controllerCol = props.controllerCol,
      _props$status = props.status,
      status = _props$status === void 0 ? 'default' : _props$status,
      tip = props.tip,
      shareStatus = props.shareStatus,
      help = props.help,
      rest = (0, _objectWithoutProperties2.default)(props, _excluded);

  var item = /*#__PURE__*/_react.default.createElement(_style.GridItemWrap, rest, /*#__PURE__*/_react.default.createElement(_style.GridLabelWrap, labelCol, label, required && /*#__PURE__*/_react.default.createElement(_style.RequiredLabel, null, "*"), /*#__PURE__*/_react.default.createElement(Help, {
    help: help
  })), /*#__PURE__*/_react.default.createElement(_style.GridControllerWrap, controllerCol, children, /*#__PURE__*/_react.default.createElement(RenderTip, {
    tip: tip,
    status: status
  })));

  return item;
}.bind(void 0);

GridItem.propTypes = {
  label: _propTypes.default.node.isRequired,
  labelCol: _propTypes.default.shape({
    span: _propTypes.default.number,
    offset: _propTypes.default.number,
    pull: _propTypes.default.number,
    push: _propTypes.default.number
  }),
  controllerCol: _propTypes.default.shape({
    span: _propTypes.default.number,
    offset: _propTypes.default.number,
    pull: _propTypes.default.number,
    push: _propTypes.default.number
  }),
  help: _propTypes.default.node,
  required: _propTypes.default.bool,
  status: _propTypes.default.oneOf(['default', 'success', 'warning', 'error', 'loading']),
  shareStatus: _propTypes.default.bool,
  tip: _propTypes.default.oneOfType([_propTypes.default.shape({
    icon: _propTypes.default.node,
    content: _propTypes.default.node
  }), _propTypes.default.node])
};

var UnGridItem = function UnGridItem(props) {
  (0, _newArrowCheck2.default)(this, _this);
  var label = props.label,
      required = props.required,
      children = props.children,
      labelCol = props.labelCol,
      controllerCol = props.controllerCol,
      _props$status2 = props.status,
      status = _props$status2 === void 0 ? 'default' : _props$status2,
      tip = props.tip,
      shareStatus = props.shareStatus,
      help = props.help,
      rest = (0, _objectWithoutProperties2.default)(props, _excluded2);
  return /*#__PURE__*/_react.default.createElement(_style.ItemWrap, rest, /*#__PURE__*/_react.default.createElement(_style.LabelWrap, labelCol, label, required && /*#__PURE__*/_react.default.createElement(_style.RequiredLabel, null, "*"), help && /*#__PURE__*/_react.default.createElement(_style.CommentWrap, null, help)), /*#__PURE__*/_react.default.createElement(_style.ControllerWrap, controllerCol, children, /*#__PURE__*/_react.default.createElement(RenderTip, {
    tip: tip,
    status: status
  })));
}.bind(void 0);

UnGridItem.propTypes = {
  label: _propTypes.default.node.isRequired,
  labelCol: _propTypes.default.shape({
    span: _propTypes.default.number,
    offset: _propTypes.default.number,
    pull: _propTypes.default.number,
    push: _propTypes.default.number
  }),
  controllerCol: _propTypes.default.shape({
    span: _propTypes.default.number,
    offset: _propTypes.default.number,
    pull: _propTypes.default.number,
    push: _propTypes.default.number
  }),
  help: _propTypes.default.node,
  required: _propTypes.default.bool,
  status: _propTypes.default.oneOf(['default', 'success', 'warning', 'error', 'loading']),
  shareStatus: _propTypes.default.bool,
  tip: _propTypes.default.oneOfType([_propTypes.default.shape({
    icon: _propTypes.default.node,
    content: _propTypes.default.node
  }), _propTypes.default.node])
};

var Item = function Item(props) {
  var _this3 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var itemContext = (0, _react.useContext)(_ItemContext.default);

  var fullProps = _objectSpread(_objectSpread({}, itemContext), props);

  var labelCol = fullProps.labelCol,
      controllerCol = fullProps.controllerCol,
      _fullProps$status = fullProps.status,
      status = _fullProps$status === void 0 ? 'default' : _fullProps$status,
      shareStatus = fullProps.shareStatus;
  var notGrid = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    return !(controllerCol || labelCol);
  }.bind(this), [controllerCol, labelCol]);
  var item = notGrid ? /*#__PURE__*/_react.default.createElement(UnGridItem, fullProps) : /*#__PURE__*/_react.default.createElement(GridItem, fullProps);

  if (shareStatus) {
    return /*#__PURE__*/_react.default.createElement(_ControllerContext.default.Provider, {
      value: {
        status: status
      }
    }, item);
  }

  return item;
}.bind(void 0);

Item.propTypes = {
  label: _propTypes.default.node.isRequired,
  labelCol: _propTypes.default.shape({
    span: _propTypes.default.number,
    offset: _propTypes.default.number,
    pull: _propTypes.default.number,
    push: _propTypes.default.number
  }),
  controllerCol: _propTypes.default.shape({
    span: _propTypes.default.number,
    offset: _propTypes.default.number,
    pull: _propTypes.default.number,
    push: _propTypes.default.number
  }),
  help: _propTypes.default.node,
  required: _propTypes.default.bool,
  status: _propTypes.default.oneOf(['default', 'success', 'warning', 'error', 'loading']),
  shareStatus: _propTypes.default.bool,
  tip: _propTypes.default.oneOfType([_propTypes.default.shape({
    icon: _propTypes.default.node,
    content: _propTypes.default.node
  }), _propTypes.default.node])
};

var _default = /*#__PURE__*/_react.default.memo(Item);

exports.default = _default;