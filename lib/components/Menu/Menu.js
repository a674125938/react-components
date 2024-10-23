"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.strictGroupChildrenAsDataSource = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Checkbox = _interopRequireDefault(require("../../components/Checkbox"));

var _useLocale = _interopRequireDefault(require("../../components/LocaleProvider/useLocale"));

var _hooks = require("../../components/Collapse/hooks");

var _CollapseContext = _interopRequireDefault(require("../../components/Collapse/CollapseContext"));

var _group4 = require("../../hooks/group");

var _useUncontrolled3 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _noop = _interopRequireDefault(require("../../utils/noop"));

var _once = _interopRequireDefault(require("../../utils/once"));

var _useVirtualList3 = _interopRequireDefault(require("../../hooks/useVirtualList"));

var _useSimpleVirtualList3 = _interopRequireDefault(require("../../hooks/useSimpleVirtualList"));

var _style = require("./style");

var _MenuContext = _interopRequireDefault(require("./MenuContext"));

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _excluded = ["selectedKeys", "defaultSelectedKeys", "onChange", "selectable", "multiple", "showSelectAll", "disabled", "block", "locale", "className", "children", "dataSource", "collapseProps", "virtualList", "_selectStyle"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var warn = (0, _once.default)(function () {
  (0, _newArrowCheck2.default)(this, _this);
  return console.warn("Virtual menu only support popover type of SubMenu");
}.bind(void 0));

var strictGroupChildrenAsDataSource = function strictGroupChildrenAsDataSource(children) {
  var _this2 = this;

  var globalDisabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    itemTag: 'isItem',
    subGroupTag: 'isSubGroup',
    itemKeyName: 'itemKey',
    subGroupKeyName: 'subGroupKey'
  },
      itemTag = _ref.itemTag,
      subGroupTag = _ref.subGroupTag,
      itemKeyName = _ref.itemKeyName,
      subGroupKeyName = _ref.subGroupKeyName;

  var subGroupMap = new Map();
  var childrenMap = new Map();

  var _group = function group(children, disabled, prefix) {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);
    var validKeys = [];
    var disabledKeys = [];

    var l = _react.default.Children.count(children);

    var renderChildren = [];

    _react.default.Children.forEach(children, function (child, i) {
      (0, _newArrowCheck2.default)(this, _this3);
      var isFirst = i === 0;
      var isLast = i === l - 1;

      if ( /*#__PURE__*/_react.default.isValidElement(child)) {
        var _child$type, _child$type2;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((_child$type = child.type) !== null && _child$type !== void 0 && _child$type[itemTag]) {
          var _React$cloneElement;

          var props = child.props;
          var key = props[itemKeyName] === undefined ? child.key : props[itemKeyName];
          var isDisabled = disabled || props.disabled;

          if (isDisabled) {
            disabledKeys.push(key);
          } else {
            validKeys.push(key);
          }

          childrenMap.set(key, props.children);
          renderChildren.push( /*#__PURE__*/_react.default.cloneElement(child, (_React$cloneElement = {}, (0, _defineProperty2.default)(_React$cloneElement, itemKeyName, key), (0, _defineProperty2.default)(_React$cloneElement, "disabled", globalDisabled || isDisabled), (0, _defineProperty2.default)(_React$cloneElement, "isFirst", isFirst), (0, _defineProperty2.default)(_React$cloneElement, "isLast", isLast), _React$cloneElement)));
          return; // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } else if (subGroupTag && subGroupKeyName && (_child$type2 = child.type) !== null && _child$type2 !== void 0 && _child$type2[subGroupTag]) {
          var _React$cloneElement2;

          var _props = child.props;

          var _key = _props[subGroupKeyName] || child.key || "".concat(prefix, "-").concat(i);

          var _isDisabled = disabled || _props.disabled;

          var _group2 = _group(child.props.children, _isDisabled, _key),
              _group3 = (0, _slicedToArray2.default)(_group2, 3),
              subValidKeys = _group3[0],
              subDisabledKeys = _group3[1],
              subRenderChildren = _group3[2];

          subGroupMap.set(_key, {
            validKeys: subValidKeys,
            disabledKeys: subDisabledKeys
          });
          validKeys.push.apply(validKeys, (0, _toConsumableArray2.default)(subValidKeys));
          disabledKeys.push.apply(disabledKeys, (0, _toConsumableArray2.default)(subDisabledKeys));
          if (_props.styleType === 'collapse') warn();
          return renderChildren.push( /*#__PURE__*/_react.default.cloneElement(child, (_React$cloneElement2 = {
            disabled: globalDisabled || _isDisabled
          }, (0, _defineProperty2.default)(_React$cloneElement2, subGroupKeyName, _key), (0, _defineProperty2.default)(_React$cloneElement2, "isFirst", isFirst), (0, _defineProperty2.default)(_React$cloneElement2, "isLast", isLast), (0, _defineProperty2.default)(_React$cloneElement2, "styleType", 'popover'), _React$cloneElement2), subRenderChildren));
        }

        renderChildren.push(child);
        return;
      }
    }.bind(this));

    return [validKeys, disabledKeys, renderChildren];
  }.bind(this);

  return [].concat((0, _toConsumableArray2.default)(_group(children, false, 'group-root')), [subGroupMap, childrenMap]);
};

exports.strictGroupChildrenAsDataSource = strictGroupChildrenAsDataSource;

var Menu = /*#__PURE__*/_react.default.forwardRef(function (_ref2, ref) {
  var _this4 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _selectedKeys = _ref2.selectedKeys,
      _ref2$defaultSelected = _ref2.defaultSelectedKeys,
      defaultSelectedKeys = _ref2$defaultSelected === void 0 ? [] : _ref2$defaultSelected,
      _onChange = _ref2.onChange,
      _ref2$selectable = _ref2.selectable,
      selectable = _ref2$selectable === void 0 ? true : _ref2$selectable,
      _ref2$multiple = _ref2.multiple,
      multiple = _ref2$multiple === void 0 ? false : _ref2$multiple,
      showSelectAll = _ref2.showSelectAll,
      disabled = _ref2.disabled,
      block = _ref2.block,
      _locale = _ref2.locale,
      className = _ref2.className,
      children = _ref2.children,
      dataSource = _ref2.dataSource,
      collapseProps = _ref2.collapseProps,
      virtualList = _ref2.virtualList,
      _selectStyle = _ref2._selectStyle,
      rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded);

  var _useUncontrolled = (0, _useUncontrolled3.default)(_selectedKeys, defaultSelectedKeys, _onChange),
      _useUncontrolled2 = (0, _slicedToArray2.default)(_useUncontrolled, 2),
      selectedKeys = _useUncontrolled2[0],
      onSelectedKeysChange = _useUncontrolled2[1]; // clean selectedStatus here


  var onChange = (0, _react.useCallback)(function (keys) {
    (0, _newArrowCheck2.default)(this, _this4);
    return onSelectedKeysChange(keys);
  }.bind(this), [onSelectedKeysChange]);

  if (!selectable) {
    // when unselectable clean selectedKeys and onChange handle
    selectedKeys = [];
    onChange = _noop.default;
  }

  var locale = (0, _useLocale.default)(_zh_CN.default, 'Menu', _locale);

  var _useMemo = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this4);
    return dataSource ? dataSource : (virtualList ? strictGroupChildrenAsDataSource : _group4.groupChildrenAsDataSource)(children, disabled, {
      itemTag: 'isMenuItem',
      subGroupTag: 'isMenuSubMenu',
      itemKeyName: 'itemKey',
      subGroupKeyName: 'subMenuKey'
    });
  }.bind(this), [children, dataSource, disabled, virtualList]),
      _useMemo2 = (0, _slicedToArray2.default)(_useMemo, 4),
      validKeys = _useMemo2[0],
      disabledKeys = _useMemo2[1],
      renderChildren = _useMemo2[2],
      subGroupMap = _useMemo2[3];

  var _useCollapse = (0, _hooks.useCollapse)(collapseProps || {}),
      _useCollapse2 = (0, _slicedToArray2.default)(_useCollapse, 1),
      collapseContext = _useCollapse2[0];

  var _useGroup = (0, _group4.useGroup)(selectedKeys, onChange, multiple, validKeys, disabledKeys, subGroupMap),
      _useGroup2 = (0, _slicedToArray2.default)(_useGroup, 3),
      groupContext = _useGroup2[0],
      selectedStatus = _useGroup2[1],
      toggleAllItems = _useGroup2[2];

  var selectAllCheckbox = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this4);
    return selectable && multiple && showSelectAll && ( /*#__PURE__*/(0, _react.isValidElement)(showSelectAll) ? showSelectAll : /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(_style.selectallWrapCls, disabled && _style.disabledCls),
      key: "__menu-select-all"
    }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      className: _style.checkboxCls,
      checked: selectedStatus === 'ALL',
      indeterminate: selectedStatus === 'PART',
      onChange: toggleAllItems,
      size: "lg",
      disabled: disabled
    }, locale.selectAll)));
  }.bind(this), [disabled, locale.selectAll, multiple, selectable, selectedStatus, showSelectAll, toggleAllItems]);
  var renderList = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this4);

    if (virtualList) {
      var _virtualInfo$height, _virtualInfo$height2;

      var virtualRenderChildren = (selectAllCheckbox ? [selectAllCheckbox] : []).concat(renderChildren);
      var virtualInfo = (0, _typeof2.default)(virtualList) === 'object' ? virtualList : {
        simple: false,
        height: 200
      };
      return virtualInfo.simple ? /*#__PURE__*/_react.default.createElement(SimpleVirtualScrollList, {
        height: (_virtualInfo$height = virtualInfo.height) !== null && _virtualInfo$height !== void 0 ? _virtualInfo$height : 200,
        width: "100%"
      }, virtualRenderChildren) : /*#__PURE__*/_react.default.createElement(VirtualScrollList, {
        height: (_virtualInfo$height2 = virtualInfo.height) !== null && _virtualInfo$height2 !== void 0 ? _virtualInfo$height2 : 200,
        width: "100%"
      }, virtualRenderChildren);
    } else {
      return /*#__PURE__*/_react.default.createElement("div", null, selectAllCheckbox, renderChildren);
    }
  }.bind(this), [renderChildren, selectAllCheckbox, virtualList]);
  (0, _react.useImperativeHandle)(ref, function () {
    var _this5 = this;

    (0, _newArrowCheck2.default)(this, _this4);
    return {
      selectAll: function selectAll() {
        (0, _newArrowCheck2.default)(this, _this5);
        toggleAllItems(true);
      }.bind(this)
    };
  }.bind(this), [toggleAllItems]);
  return /*#__PURE__*/_react.default.createElement(_CollapseContext.default.Provider, {
    value: collapseContext
  }, /*#__PURE__*/_react.default.createElement(_MenuContext.default.Provider, {
    value: _objectSpread(_objectSpread({}, groupContext), {}, {
      locale: locale,
      selectStyle: _selectStyle
    })
  }, /*#__PURE__*/_react.default.createElement(_style.MenuWrap, (0, _extends2.default)({
    className: (0, _classnames.default)(className, _style.prefixCls, multiple ? _style.multipleCls : _style.singleCls, block && _style.blockCls)
  }, rest), renderList)));
}.bind(void 0));

Menu.propTypes = {
  selectedKeys: _propTypes.default.array,
  defaultSelectedKeys: _propTypes.default.array,
  onChange: _propTypes.default.func,
  multiple: _propTypes.default.bool,
  selectable: _propTypes.default.bool,
  showSelectAll: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.element]),
  block: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  virtualList: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    simple: _propTypes.default.oneOf([true]),
    height: _propTypes.default.number
  })]),
  customStyle: _propTypes.default.shape({
    maxHeight: _propTypes.default.string,
    maxWidth: _propTypes.default.string
  }),
  locale: _propTypes.default.any,
  _selectStyle: _propTypes.default.bool
};

var VirtualScrollList = function VirtualScrollList(_ref3) {
  (0, _newArrowCheck2.default)(this, _this);
  var children = _ref3.children,
      height = _ref3.height,
      width = _ref3.width;
  var scrollerRef = (0, _react.useRef)(null);
  var heightWrapperRef = (0, _react.useRef)(null);
  var wrapperRef = (0, _react.useRef)(null);

  var _useVirtualList = (0, _useVirtualList3.default)(scrollerRef, wrapperRef, heightWrapperRef, children, {
    clientHeight: height
  }),
      _useVirtualList2 = (0, _slicedToArray2.default)(_useVirtualList, 2),
      renderChildren = _useVirtualList2[0],
      offsetTop = _useVirtualList2[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: scrollerRef,
    style: {
      maxHeight: height,
      width: width,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: heightWrapperRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: wrapperRef,
    style: {
      transform: "translate(0, ".concat(offsetTop, "px)")
    }
  }, renderChildren)));
}.bind(void 0);

var SimpleVirtualScrollList = function SimpleVirtualScrollList(_ref4) {
  (0, _newArrowCheck2.default)(this, _this);
  var children = _ref4.children,
      height = _ref4.height,
      width = _ref4.width;
  var scrollerRef = (0, _react.useRef)(null);
  var heightWrapperRef = (0, _react.useRef)(null);
  var wrapperRef = (0, _react.useRef)(null);

  var _useSimpleVirtualList = (0, _useSimpleVirtualList3.default)(scrollerRef, wrapperRef, heightWrapperRef, children, {
    clientHeight: height
  }),
      _useSimpleVirtualList2 = (0, _slicedToArray2.default)(_useSimpleVirtualList, 2),
      renderChildren = _useSimpleVirtualList2[0],
      offsetTop = _useSimpleVirtualList2[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: scrollerRef,
    style: {
      maxHeight: height,
      width: width,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: heightWrapperRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: wrapperRef,
    style: {
      transform: "translate(0, ".concat(offsetTop, "px)")
    }
  }, renderChildren)));
}.bind(void 0);

var _default = /*#__PURE__*/_react.default.memo(Menu);

exports.default = _default;