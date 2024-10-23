"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Popover = _interopRequireDefault(require("../../components/Popover"));

var _Collapse = _interopRequireDefault(require("../../components/Collapse"));

var _Checkbox = _interopRequireDefault(require("../../components/Checkbox"));

var _placements = require("../../components/Popover/placements");

var _group = require("../../hooks/group");

var _style = require("./style");

var _MenuContext = _interopRequireDefault(require("./MenuContext"));

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var placements = (0, _placements.getPlacements)(0);

var getPopoverContainer = function getPopoverContainer(triggerNode) {
  var _triggerNode$parentNo;

  (0, _newArrowCheck2.default)(this, _this);
  return (_triggerNode$parentNo = triggerNode.parentNode) === null || _triggerNode$parentNo === void 0 ? void 0 : _triggerNode$parentNo.parentNode;
}.bind(void 0);

var SubMenu = function SubMenu(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var title = _ref.title,
      _ref$styleType = _ref.styleType,
      styleType = _ref$styleType === void 0 ? 'collapse' : _ref$styleType,
      subMenuKey = _ref.subMenuKey,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      isFirst = _ref.isFirst,
      isLast = _ref.isLast;
  var menuContext = (0, _react.useContext)(_MenuContext.default);

  var _useSubGroup = (0, _group.useSubGroup)(subMenuKey || '', menuContext),
      _useSubGroup2 = (0, _slicedToArray2.default)(_useSubGroup, 2),
      selectedStatus = _useSubGroup2[0],
      toggleAllItems = _useSubGroup2[1];

  var multiple = menuContext.multiple,
      locale = menuContext.locale;

  var selectAllCheckbox = multiple && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_style.selectallWrapCls, disabled && _style.disabledCls)
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    size: "lg",
    className: _style.checkboxCls,
    checked: selectedStatus === 'ALL',
    indeterminate: selectedStatus === 'PART',
    onChange: toggleAllItems,
    disabled: disabled
  }, locale.selectAll));

  return styleType === 'collapse' ? /*#__PURE__*/_react.default.createElement(_Collapse.default.Panel, {
    className: (0, _classnames.default)(_style.collapseWrapCls, className, isFirst && _style.firstCls, isLast && _style.lastCls),
    title: function (_ref2) {
      (0, _newArrowCheck2.default)(this, _this2);
      var open = _ref2.open;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)(_style.collapseTitleCls, selectedStatus !== 'NONE' && _style.selectedCls)
      }, title, /*#__PURE__*/_react.default.createElement(_style.SubMenuIcon, {
        size: "14px",
        type: open ? 'arrow-up' : 'arrow-down'
      }));
    }.bind(this),
    panelKey: subMenuKey
  }, selectAllCheckbox, children) : /*#__PURE__*/_react.default.createElement(_Popover.default, {
    popup: /*#__PURE__*/_react.default.createElement(_style.PopupMenuWrap, {
      className: _style.popupWrapCls
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _style.popupContentCls
    }, selectAllCheckbox, children)),
    getPopupContainer: getPopoverContainer,
    builtinPlacements: placements,
    placement: "rightTop"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(className, isFirst && _style.firstCls, isLast && _style.lastCls)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_style.popupTitleCls, selectedStatus !== 'NONE' && _style.selectedCls)
  }, title, /*#__PURE__*/_react.default.createElement(_style.SubMenuIcon, {
    type: "triangle-right"
  }))));
}.bind(void 0);

SubMenu.propTypes = {
  title: _propTypes.default.node.isRequired,
  styleType: _propTypes.default.oneOf(['collapse', 'popover']),
  disabled: _propTypes.default.bool,
  isFirst: _propTypes.default.bool,
  isLast: _propTypes.default.bool
};

var MemoSubMenu = /*#__PURE__*/_react.default.memo(SubMenu);

MemoSubMenu.isMenuSubMenu = true;
var _default = MemoSubMenu;
exports.default = _default;