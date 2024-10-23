"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("../../components/Button"));

var _Menu = _interopRequireDefault(require("../../components/Menu"));

var _Popover = _interopRequireDefault(require("../../components/Popover"));

var _Tooltip = _interopRequireDefault(require("../../components/Tooltip"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _usePopoverConfig = _interopRequireDefault(require("../../hooks/usePopoverConfig"));

var _useOverflow3 = _interopRequireDefault(require("../../hooks/useOverflow"));

var _style = require("./style");

var _useConfig2 = _interopRequireDefault(require("../../hooks/useConfig"));

var _config = _interopRequireDefault(require("../../config"));

var _excluded = ["onClick", "disabled", "handleHide"],
    _excluded2 = ["label", "tooltip"],
    _excluded3 = ["label", "disabled", "onClick"],
    _excluded4 = ["actionList", "exposeCount", "size", "smart", "buttonStyleType", "popoverProps", "dropdownButton", "className"],
    _excluded5 = ["actionList", "exposeCount", "smart"],
    _excluded6 = ["autoAdjustment"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SubMenuItem = function SubMenuItem(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var onClick = _ref.onClick,
      disabled = _ref.disabled,
      handleHide = _ref.handleHide,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var clickHandler = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this2);
    if (disabled) return;

    if (onClick) {
      onClick(e);
      handleHide === null || handleHide === void 0 ? void 0 : handleHide();
    }
  }.bind(this), [disabled, handleHide, onClick]);
  return /*#__PURE__*/_react.default.createElement(_Menu.default.Item, (0, _extends2.default)({
    onClick: clickHandler,
    disabled: disabled
  }, rest));
}.bind(void 0);

SubMenuItem.propTypes = {
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  handleHide: _propTypes.default.func,
  children: _propTypes.default.node.isRequired
};

var renderActionButtonList = function renderActionButtonList(_ref2) {
  var _this3 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var list = _ref2.list,
      size = _ref2.size,
      buttonStyleType = _ref2.buttonStyleType;
  return list.map(function (info, i) {
    (0, _newArrowCheck2.default)(this, _this3);
    var label = info.label,
        tooltip = info.tooltip,
        rest = (0, _objectWithoutProperties2.default)(info, _excluded2);

    var button = /*#__PURE__*/_react.default.createElement(_Button.default, (0, _extends2.default)({
      key: i,
      size: size,
      styleType: buttonStyleType,
      fakeDisabled: !!tooltip
    }, rest), label);

    return tooltip ? typeof tooltip === 'string' || /*#__PURE__*/_react.default.isValidElement(tooltip) ? /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
      popup: tooltip,
      placement: "topRight",
      key: i
    }, button) : /*#__PURE__*/_react.default.createElement(_Tooltip.default, (0, _extends2.default)({
      placement: "topRight",
      key: i
    }, tooltip), button) : button;
  }.bind(this));
}.bind(void 0);

var ActionMenu = function ActionMenu(_ref3) {
  var _this4 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var list = _ref3.list,
      size = _ref3.size,
      buttonStyleType = _ref3.buttonStyleType,
      dropdownButton = _ref3.dropdownButton,
      popoverProps = _ref3.popoverProps;
  var popoverConfigProps = (0, _usePopoverConfig.default)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var hide = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this4);
    setVisible(false);
  }.bind(this), []);
  if (!list.length) return null;

  var _renderList = function renderList(list) {
    var _this5 = this;

    (0, _newArrowCheck2.default)(this, _this4);
    return list.map(function (info, i) {
      (0, _newArrowCheck2.default)(this, _this5);

      if (info.children) {
        return /*#__PURE__*/_react.default.createElement(_Menu.default.SubMenu, {
          key: i,
          styleType: "popover",
          title: info.label
        }, _renderList(info.children));
      }

      var label = info.label,
          disabled = info.disabled,
          onClick = info.onClick,
          rest = (0, _objectWithoutProperties2.default)(info, _excluded3);
      return /*#__PURE__*/_react.default.createElement(SubMenuItem, (0, _extends2.default)({
        key: i,
        disabled: disabled,
        onClick: onClick,
        handleHide: hide
      }, rest), label);
    }.bind(this));
  }.bind(this);

  return /*#__PURE__*/_react.default.createElement(_Popover.default, (0, _extends2.default)({
    trigger: ['click'],
    popup: /*#__PURE__*/_react.default.createElement(_Menu.default, {
      selectable: false,
      customStyle: {
        maxHeight: '380px'
      }
    }, _renderList(list))
  }, popoverConfigProps, popoverProps, {
    visible: visible,
    onVisibleChange: setVisible
  }), dropdownButton ? typeof dropdownButton === 'string' || /*#__PURE__*/_react.default.isValidElement(dropdownButton) ? /*#__PURE__*/_react.default.createElement(_Button.default, {
    size: size,
    styleType: buttonStyleType
  }, dropdownButton) : /*#__PURE__*/_react.default.createElement(_Button.default, dropdownButton) : /*#__PURE__*/_react.default.createElement(_Button.default, {
    size: size,
    styleType: buttonStyleType,
    icon: /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
      type: "ellipsis"
    })
  }));
}.bind(void 0);

var _uid = 0;
var ID_KEY = 'data-urc-action_list-id';

var PureActionList = function PureActionList(_ref4) {
  (0, _newArrowCheck2.default)(this, _this);
  var _ref4$actionList = _ref4.actionList,
      actionList = _ref4$actionList === void 0 ? [] : _ref4$actionList,
      _ref4$exposeCount = _ref4.exposeCount,
      exposeCount = _ref4$exposeCount === void 0 ? 3 : _ref4$exposeCount,
      _ref4$size = _ref4.size,
      size = _ref4$size === void 0 ? 'md' : _ref4$size,
      _ref4$smart = _ref4.smart,
      smart = _ref4$smart === void 0 ? true : _ref4$smart,
      _ref4$buttonStyleType = _ref4.buttonStyleType,
      buttonStyleType = _ref4$buttonStyleType === void 0 ? 'border' : _ref4$buttonStyleType,
      popoverProps = _ref4.popoverProps,
      dropdownButton = _ref4.dropdownButton,
      className = _ref4.className,
      rest = (0, _objectWithoutProperties2.default)(_ref4, _excluded4);
  var l = actionList.length;
  var buttonList, menuList;

  if (l > exposeCount + 1) {
    buttonList = actionList.slice(0, exposeCount);
    menuList = actionList.slice(exposeCount);
  } else if (l === exposeCount + 1) {
    if (smart) {
      buttonList = actionList;
      menuList = [];
    } else {
      buttonList = actionList.slice(0, exposeCount);
      menuList = actionList.slice(exposeCount);
    }
  } else {
    buttonList = actionList;
    menuList = [];
  }

  var sharedProps = {
    size: size,
    buttonStyleType: buttonStyleType
  };
  return /*#__PURE__*/_react.default.createElement(_style.SWrap, (0, _extends2.default)({}, rest, {
    className: (0, _classnames.default)(_style.prefixCls, className),
    sharedProps: {
      size: size
    },
    spacing: "smart"
  }), renderActionButtonList(_objectSpread({
    list: buttonList
  }, sharedProps)), menuList.length ? /*#__PURE__*/_react.default.createElement(ActionMenu, (0, _extends2.default)({
    list: menuList
  }, sharedProps, {
    dropdownButton: dropdownButton,
    popoverProps: popoverProps
  })) : null);
}.bind(void 0);

var AutoAdjustmentActionList = function AutoAdjustmentActionList(_ref5) {
  var _this6 = this;

  (0, _newArrowCheck2.default)(this, _this);

  var _ref5$actionList = _ref5.actionList,
      actionList = _ref5$actionList === void 0 ? [] : _ref5$actionList,
      _ref5$exposeCount = _ref5.exposeCount,
      _exposeCount = _ref5$exposeCount === void 0 ? 3 : _ref5$exposeCount,
      smart = _ref5.smart,
      rest = (0, _objectWithoutProperties2.default)(_ref5, _excluded5);

  var _useState3 = (0, _react.useState)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    return _uid++;
  }.bind(this)),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 1),
      uid = _useState4[0];

  var l = actionList.length;
  var containerRef = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    containerRef.current = document.querySelector("[".concat(ID_KEY, "=\"").concat(uid, "\"]"));
  }.bind(this), [uid]);
  var maxCount = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    var maxCount = Math.min(l, Math.max(_exposeCount, 0));
    if (maxCount === l - 1 && smart) maxCount = l;
    return maxCount;
  }.bind(this), [_exposeCount, l, smart]);

  var _useOverflow = (0, _useOverflow3.default)({
    containerRef: containerRef,
    defaultCount: maxCount,
    maxCount: maxCount
  }),
      _useOverflow2 = (0, _slicedToArray2.default)(_useOverflow, 1),
      exposeCount = _useOverflow2[0];

  return /*#__PURE__*/_react.default.createElement(PureActionList, (0, _extends2.default)({}, rest, {
    actionList: actionList,
    exposeCount: exposeCount,
    smart: false
  }, (0, _defineProperty2.default)({}, ID_KEY, uid)));
}.bind(void 0);

var ActionList = function ActionList(_ref7) {
  (0, _newArrowCheck2.default)(this, _this);
  var _autoAdjustment = _ref7.autoAdjustment,
      rest = (0, _objectWithoutProperties2.default)(_ref7, _excluded6);

  var _useConfig = (0, _useConfig2.default)(),
      actionListAutoAdjustment = _useConfig.actionListAutoAdjustment;

  var autoAdjustment = _autoAdjustment === undefined ? actionListAutoAdjustment === undefined ? _config.default.actionListAutoAdjustment : actionListAutoAdjustment : _autoAdjustment;

  if (autoAdjustment) {
    return /*#__PURE__*/_react.default.createElement(AutoAdjustmentActionList, rest);
  } else {
    return /*#__PURE__*/_react.default.createElement(PureActionList, rest);
  }
}.bind(void 0);

ActionList.propTypes = {
  actionList: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.node,
    onClick: _propTypes.default.func,
    children: _propTypes.default.arrayOf(_propTypes.default.shape({
      label: _propTypes.default.node,
      onClick: _propTypes.default.func,
      children: _propTypes.default.arrayOf(_propTypes.default.shape({
        label: _propTypes.default.node,
        onClick: _propTypes.default.func,
        children: _propTypes.default.arrayOf(_propTypes.default.object),
        tooltip: _propTypes.default.any,
        disabled: _propTypes.default.bool
      })),
      tooltip: _propTypes.default.any,
      disabled: _propTypes.default.bool
    })),
    tooltip: _propTypes.default.any,
    disabled: _propTypes.default.bool
  })).isRequired,
  exposeCount: _propTypes.default.number,
  autoAdjustment: _propTypes.default.bool,
  smart: _propTypes.default.bool,
  popoverProps: _propTypes.default.any
};

var _default = /*#__PURE__*/_react.default.memo(ActionList);

exports.default = _default;