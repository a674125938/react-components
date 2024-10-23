"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Popover = _interopRequireDefault(require("../../components/Popover"));

var _DragWrap = require("./DragWrap");

var _this2 = void 0;

var _excluded = ["record", "contextMenu"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TableRowWithContextMenu = /*#__PURE__*/_react.default.memo(function TableRowWithContextMenu(_ref) {
  var _this = this;

  var record = _ref.record,
      contextMenu = _ref.contextMenu,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      contextMenuVisible = _useState2[0],
      setContextMenuVisible = _useState2[1];

  var hideContextMenu = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this);
    setContextMenuVisible(false);
  }.bind(this), []);

  if (contextMenu) {
    return /*#__PURE__*/_react.default.createElement(_Popover.default, {
      popup: /*#__PURE__*/_react.default.createElement("div", null, contextMenu(record, hideContextMenu)),
      trigger: ['contextMenu'],
      hideAction: ['click'],
      visible: contextMenuVisible,
      onVisibleChange: setContextMenuVisible,
      animation: null,
      alignPoint: true
    }, /*#__PURE__*/_react.default.createElement("tr", rest));
  }

  return /*#__PURE__*/_react.default.createElement("tr", rest);
});

var TableRowWithDrag = /*#__PURE__*/_react.default.memo(function TableRowWithDrag(props) {
  var _useContext = (0, _react.useContext)(_DragWrap.DragContext),
      dragProps = _useContext.dragProps,
      dropProps = _useContext.dropProps;

  return /*#__PURE__*/_react.default.createElement(TableRowWithContextMenu, (0, _extends2.default)({}, props, dragProps, dropProps, {
    draggable: false
  }));
});

var TableRow = function TableRow(_ref2) {
  (0, _newArrowCheck2.default)(this, _this2);
  var restProps = (0, _extends2.default)({}, _ref2);

  var _useContext2 = (0, _react.useContext)(_DragWrap.DragContext),
      draggable = _useContext2.draggable;

  if (draggable) return /*#__PURE__*/_react.default.createElement(TableRowWithDrag, restProps);
  return /*#__PURE__*/_react.default.createElement(TableRowWithContextMenu, restProps);
}.bind(void 0);

TableRow.propTypes = {
  record: _propTypes.default.any.isRequired,
  contextMenu: _propTypes.default.func,
  draggable: _propTypes.default.bool,
  'data-row-key': _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};

var _default = /*#__PURE__*/_react.default.memo(TableRow);

exports.default = _default;