"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.deprecatedLogForPopover = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ControllerContext = _interopRequireDefault(require("../../components/Form/ControllerContext"));

var _Popover = _interopRequireDefault(require("../../components/Popover"));

var _Tag = _interopRequireDefault(require("../../components/Tag"));

var _Tooltip = _interopRequireDefault(require("../../components/Tooltip"));

var _Search = require("../../sharedComponents/Search");

var _useLocale = _interopRequireDefault(require("../../components/LocaleProvider/useLocale"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _usePopoverConfig = _interopRequireDefault(require("../../hooks/usePopoverConfig"));

var _useUncontrolled5 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _useInitial = _interopRequireDefault(require("../../hooks/useInitial"));

var _noop = _interopRequireDefault(require("../../utils/noop"));

var _deprecatedLog = _interopRequireDefault(require("../../utils/deprecatedLog"));

var _warning = require("../../utils/warning");

var _isObject = _interopRequireDefault(require("../../utils/isObject"));

var _isEmpty = _interopRequireDefault(require("../../utils/isEmpty"));

var _style = require("../../components/Input/style");

var _VirtualScrollList = _interopRequireDefault(require("../../sharedComponents/VirtualScrollList"));

var _Option = require("./Option");

var _Group = _interopRequireDefault(require("./Group"));

var _Extra = _interopRequireDefault(require("./Extra"));

var _style2 = require("./style");

var _SelectContext = _interopRequireDefault(require("./SelectContext"));

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _Overflow = _interopRequireWildcard(require("./Overflow"));

var _excluded = ["v1"],
    _excluded2 = ["content"],
    _excluded3 = ["content"],
    _excluded4 = ["v1", "size", "disabled", "multiple", "placeholder", "renderContent", "renderSelector", "renderPopup", "value", "onChange", "visible", "setVisible", "locale", "dataSource", "search", "searchValue", "setSearchValue", "wrapRef", "clearable", "styleType", "block", "status", "tagListCustomStyle"],
    _excluded5 = ["items", "onClose", "disabled"],
    _excluded6 = ["size", "status", "value", "defaultValue", "onChange", "onVisibleChange", "disabled", "search", "multiple", "renderContent", "renderSelector", "placeholder", "locale", "options", "children", "emptyContent", "showSelectAll", "extra", "clearable", "customStyle", "popover", "popoverProps", "renderPopup", "virtualList", "block", "styleType", "tagListCustomStyle"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var deprecatedLogForPopover = (0, _deprecatedLog.default)('Select popover', 'popoverProps');
exports.deprecatedLogForPopover = deprecatedLogForPopover;
var warnLogForVirtualList = (0, _warning.onceWarning)('Select virtualList only valid when use options');
var warnLogForCustomHeight = (0, _warning.onceWarning)('CustomStyle.optionListMaxHeight is invalid when use virtualList, please use virtualList.height');
var warnLogForSearchProps = (0, _warning.onceWarning)("Don't use item.props in custom search, just use item as props.");
var warnLogForSubGroup = (0, _deprecatedLog.default)('Select.Group', 'Cascader');
var popoverStretch = ['minWidth'];
var blockPopoverStretch = ['width'];
var groupOptions = {
  itemTag: 'isMenuItem',
  subGroupTag: 'isMenuSubMenu',
  itemKeyName: 'value',
  subGroupKeyName: 'groupKey',
  displayName: 'label',
  subGroupName: 'children',
  ItemComponent: _Option.PureOption,
  SubGroupComponent: _Group.default
};

var isValidKey = function isValidKey(v) {
  (0, _newArrowCheck2.default)(this, _this);
  return typeof v === 'string' || typeof v === 'number';
}.bind(void 0);

var groupChildrenAsDataSource = function groupChildrenAsDataSource(children) {
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

  var searchValue = arguments.length > 3 ? arguments[3] : undefined;
  var handleSearch = arguments.length > 4 ? arguments[4] : undefined;
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
          var _props = child.props;

          var _key = _props[itemKeyName] === undefined ? child.key : _props[itemKeyName];

          var _visible = searchValue ? handleSearch(_key, child.props) : true;

          if (_visible) {
            var _ref2, _React$cloneElement;

            var isDisabled = disabled || _props.disabled;

            if (isDisabled) {
              disabledKeys.push(_key);
            } else {
              validKeys.push(_key);
            }

            var display = Array.isArray(_visible) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _visible[0], /*#__PURE__*/_react.default.createElement(_Search.Highlight, null, _visible[1]), _visible[2]) : (_ref2 = _props.children) !== null && _ref2 !== void 0 ? _ref2 : _key;
            renderChildren.push( /*#__PURE__*/_react.default.cloneElement(child, (_React$cloneElement = {}, (0, _defineProperty2.default)(_React$cloneElement, itemKeyName, _key), (0, _defineProperty2.default)(_React$cloneElement, "disabled", globalDisabled || isDisabled), (0, _defineProperty2.default)(_React$cloneElement, "isFirst", isFirst), (0, _defineProperty2.default)(_React$cloneElement, "isLast", isLast), (0, _defineProperty2.default)(_React$cloneElement, "key", isValidKey(_key) ? _key : child.key || "".concat(i)), (0, _defineProperty2.default)(_React$cloneElement, "children", display), _React$cloneElement)));
            childrenMap.set(_key, display);
          } else {
            childrenMap.set(_key, _props.children);
          } // eslint-disable-next-line @typescript-eslint/no-explicit-any

        } else if (subGroupTag && subGroupKeyName && (_child$type2 = child.type) !== null && _child$type2 !== void 0 && _child$type2[subGroupTag]) {
          var _React$cloneElement2;

          var _props2 = child.props;

          var _key2 = _props2[subGroupKeyName] || child.key || "".concat(prefix, "-").concat(i);

          var _isDisabled = disabled || _props2.disabled;

          var _group2 = _group(child.props.children, _isDisabled, _key2),
              _group3 = (0, _slicedToArray2.default)(_group2, 3),
              subValidKeys = _group3[0],
              subDisabledKeys = _group3[1],
              subRenderChildren = _group3[2];

          subGroupMap.set(_key2, {
            validKeys: subValidKeys,
            disabledKeys: subDisabledKeys
          });
          validKeys.push.apply(validKeys, (0, _toConsumableArray2.default)(subValidKeys));
          disabledKeys.push.apply(disabledKeys, (0, _toConsumableArray2.default)(subDisabledKeys));
          renderChildren.push( /*#__PURE__*/_react.default.cloneElement(child, (_React$cloneElement2 = {
            disabled: globalDisabled || _isDisabled
          }, (0, _defineProperty2.default)(_React$cloneElement2, subGroupKeyName, _key2), (0, _defineProperty2.default)(_React$cloneElement2, "isFirst", isFirst), (0, _defineProperty2.default)(_React$cloneElement2, "isLast", isLast), (0, _defineProperty2.default)(_React$cloneElement2, "key", _key2), _React$cloneElement2), subRenderChildren));
        } else {
          renderChildren.push(child);
        }
      }
    }.bind(this));

    return [validKeys, disabledKeys, renderChildren];
  }.bind(this);

  return [].concat((0, _toConsumableArray2.default)(_group(children, false, 'group-root')), [subGroupMap, childrenMap]);
};

var groupOptionsAsDataSource = function groupOptionsAsDataSource(options) {
  var _this4 = this;

  var globalDisabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    subGroupName: 'children',
    displayName: 'label',
    itemKeyName: 'itemKey',
    subGroupKeyName: 'subGroupKey',
    ItemComponent: function ItemComponent() {
      (0, _newArrowCheck2.default)(this, _this4);
      return null;
    }.bind(this),
    SubGroupComponent: function SubGroupComponent() {
      (0, _newArrowCheck2.default)(this, _this4);
      return null;
    }.bind(this)
  },
      subGroupName = _ref3.subGroupName,
      displayName = _ref3.displayName,
      itemKeyName = _ref3.itemKeyName,
      subGroupKeyName = _ref3.subGroupKeyName,
      ItemComponent = _ref3.ItemComponent,
      SubGroupComponent = _ref3.SubGroupComponent;

  var searchValue = arguments.length > 3 ? arguments[3] : undefined;
  var handleSearch = arguments.length > 4 ? arguments[4] : undefined;
  var subGroupMap = new Map();
  var childrenMap = new Map();

  var group = function group(options) {
    var _this5 = this;

    var disabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var prefixKey = arguments.length > 2 ? arguments[2] : undefined;
    var validKeys = [];
    var disabledKeys = [];
    var renderChildren = [];
    options.forEach(function (child, i) {
      (0, _newArrowCheck2.default)(this, _this5);
      var subChildren = child[subGroupName];

      if (subChildren) {
        var _key3 = child[subGroupKeyName] || child.key || "".concat(prefixKey, "-").concat(i);

        var reactKey = child.key || isValidKey(child[subGroupKeyName]) ? child[subGroupKeyName] : "".concat(prefixKey, "-").concat(i);
        var isDisabled = disabled || child.disabled;

        var _group4 = group(subChildren, isDisabled, _key3),
            _group5 = (0, _slicedToArray2.default)(_group4, 3),
            subValidKeys = _group5[0],
            subDisabledKeys = _group5[1],
            subRenderChildren = _group5[2];

        subGroupMap.set(_key3, {
          validKeys: subValidKeys,
          disabledKeys: subDisabledKeys
        });
        validKeys.push.apply(validKeys, (0, _toConsumableArray2.default)(subValidKeys));
        disabledKeys.push.apply(disabledKeys, (0, _toConsumableArray2.default)(subDisabledKeys));

        var _visible2 = searchValue ? !!subRenderChildren.length : true;

        if (_visible2) {
          renderChildren.push( /*#__PURE__*/_react.default.createElement(SubGroupComponent, (0, _extends2.default)({
            key: reactKey
          }, child, (0, _defineProperty2.default)({
            disabled: globalDisabled || isDisabled
          }, subGroupKeyName, _key3)), subRenderChildren));
        }
      } else {
        var _key4 = child[itemKeyName] === undefined ? child.key : child[itemKeyName];

        var _reactKey = child.key || isValidKey(child[itemKeyName]) ? child[itemKeyName] : "".concat(prefixKey, "-").concat(i);

        var _isDisabled2 = disabled || child.disabled;

        var _visible3 = searchValue ? handleSearch(_key4, child) : true;

        if (_visible3) {
          var _ref5;

          if (_isDisabled2) {
            disabledKeys.push(_key4);
          } else {
            validKeys.push(_key4);
          }

          var display = Array.isArray(_visible3) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _visible3[0], /*#__PURE__*/_react.default.createElement(_Search.Highlight, null, _visible3[1]), _visible3[2]) : (_ref5 = child[displayName]) !== null && _ref5 !== void 0 ? _ref5 : _key4;
          renderChildren.push( /*#__PURE__*/_react.default.createElement(ItemComponent, (0, _extends2.default)({
            key: _reactKey
          }, child, (0, _defineProperty2.default)({
            disabled: globalDisabled || _isDisabled2
          }, itemKeyName, _key4)), display));
          childrenMap.set(_key4, display);
        } else {
          var _ref7;

          childrenMap.set(_key4, (_ref7 = child[displayName]) !== null && _ref7 !== void 0 ? _ref7 : child[itemKeyName]);
        }
      }
    }.bind(this));
    return [validKeys, disabledKeys, renderChildren];
  };

  return [].concat((0, _toConsumableArray2.default)(group(options, false, 'group-root')), [subGroupMap, childrenMap]);
};

var Popup = /*#__PURE__*/_react.default.memo(function Popup(_ref8) {
  var v1 = _ref8.v1,
      props = (0, _objectWithoutProperties2.default)(_ref8, _excluded);
  var PopupComponent = props.renderPopup ? CustomPopup : v1 ? PopupV1 : PopupV2;
  return /*#__PURE__*/_react.default.createElement(PopupComponent, props);
});

var CustomPopup = /*#__PURE__*/_react.default.memo(function CustomPopup(props) {
  var onChange = props.onChange,
      value = props.value,
      multiple = props.multiple,
      extra = props.extra,
      search = props.search,
      children = props.children,
      options = props.options,
      handleVisibleChange = props.handleVisibleChange,
      renderPopup = props.renderPopup;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderPopup === null || renderPopup === void 0 ? void 0 : renderPopup({
    handleVisible: handleVisibleChange,
    onChange: onChange,
    value: value,
    multiple: multiple,
    extra: extra,
    search: search,
    children: children,
    options: options
  }));
});

var PopupV1 = /*#__PURE__*/_react.default.memo(function PopupV1(_ref9) {
  var _this6 = this;

  var extra = _ref9.extra,
      _ref9$customStyle = _ref9.customStyle,
      customStyle = _ref9$customStyle === void 0 ? {} : _ref9$customStyle,
      search = _ref9.search,
      multiple = _ref9.multiple,
      _emptyContent = _ref9.emptyContent,
      showSelectAll = _ref9.showSelectAll,
      value = _ref9.value,
      options = _ref9.options,
      children = _ref9.children,
      onChange = _ref9.onChange,
      locale = _ref9.locale,
      handleVisibleChange = _ref9.handleVisibleChange,
      hidePopup = _ref9.hidePopup,
      dataSource = _ref9.dataSource,
      searchValue = _ref9.searchValue,
      setSearchValue = _ref9.setSearchValue,
      virtualList = _ref9.virtualList;
  var handleChange = (0, _react.useCallback)(function (value) {
    (0, _newArrowCheck2.default)(this, _this6);

    if (!multiple) {
      handleVisibleChange(false);
      onChange(value[0]);
    } else {
      onChange(value);
    }
  }.bind(this), [multiple, onChange, handleVisibleChange]);
  var handleSearchInput = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this6);
    setSearchValue(e.target.value);
  }.bind(this), [setSearchValue]);
  var finalExtra = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this6);

    if (typeof extra === 'function') {
      return /*#__PURE__*/_react.default.createElement(_Extra.default, null, extra(hidePopup));
    } else if (!(0, _isEmpty.default)(extra)) {
      if ( /*#__PURE__*/_react.default.isValidElement(extra)) {
        return /*#__PURE__*/_react.default.createElement(_Extra.default, null, extra);
      } else if ((0, _isObject.default)(extra)) {
        var _ref10 = extra,
            _content = _ref10.content,
            rest = (0, _objectWithoutProperties2.default)(_ref10, _excluded2);
        return /*#__PURE__*/_react.default.createElement(_Extra.default, rest, _content);
      }
    }
  }.bind(this), [extra, hidePopup]);
  var maxWidth = customStyle.popupMaxWidth ? customStyle.popupMaxWidth : 'none';

  var newCustomStyle = _objectSpread({}, customStyle);

  if (virtualList) {
    if ('optionListMaxHeight' in newCustomStyle) {
      warnLogForCustomHeight();
    }

    newCustomStyle.optionListMaxHeight = 'none';
  }

  var emptyContent = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this6);
    return _emptyContent || /*#__PURE__*/_react.default.createElement(_style2.EmptyContentWrapper, null, locale.emptyTip);
  }.bind(this), [_emptyContent, locale]);
  return /*#__PURE__*/_react.default.createElement(_style2.MenuWrap, {
    maxWidth: maxWidth
  }, search && /*#__PURE__*/_react.default.createElement(_style2.SelectSearchInput, {
    block: true,
    onChange: handleSearchInput,
    value: searchValue,
    status: "default"
  }), children || options !== null && options !== void 0 && options.length ? /*#__PURE__*/_react.default.createElement(_style2.BlockMenu, {
    onChange: handleChange,
    customStyle: newCustomStyle,
    menuCustomStyle: {
      maxWidth: 'none'
    },
    dataSource: dataSource,
    multiple: multiple,
    showSelectAll: showSelectAll,
    selectedKeys: multiple ? value : [value],
    virtualList: options ? virtualList : false
  }) : /*#__PURE__*/_react.default.createElement(_style2.BlockMenu, {
    customStyle: newCustomStyle,
    menuCustomStyle: {
      maxWidth: 'none'
    }
  }, emptyContent), finalExtra ? /*#__PURE__*/_react.default.createElement(_style2.FooterWrap, null, finalExtra) : null);
});

var PopupV2 = /*#__PURE__*/_react.default.memo(function PopupV2(_ref11) {
  var _this7 = this,
      _dataSource$;

  var extra = _ref11.extra,
      _ref11$customStyle = _ref11.customStyle,
      customStyle = _ref11$customStyle === void 0 ? {} : _ref11$customStyle,
      multiple = _ref11.multiple,
      _emptyContent = _ref11.emptyContent,
      showSelectAll = _ref11.showSelectAll,
      value = _ref11.value,
      options = _ref11.options,
      children = _ref11.children,
      onChange = _ref11.onChange,
      locale = _ref11.locale,
      handleVisibleChange = _ref11.handleVisibleChange,
      hidePopup = _ref11.hidePopup,
      dataSource = _ref11.dataSource,
      virtualList = _ref11.virtualList,
      searchValue = _ref11.searchValue;
  var menuRef = (0, _react.useRef)(null);
  var handleChange = (0, _react.useCallback)(function (value) {
    (0, _newArrowCheck2.default)(this, _this7);

    if (!multiple) {
      handleVisibleChange(false);
      onChange(value[0]);
    } else {
      onChange(value);
    }
  }.bind(this), [multiple, onChange, handleVisibleChange]);
  var handleSelectAll = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this7);
    var validKeys = dataSource[0];
    var newValue = Array.from(new Set([].concat((0, _toConsumableArray2.default)(value || []), (0, _toConsumableArray2.default)(validKeys))));
    onChange(newValue);
  }.bind(this), [dataSource, onChange, value]);
  var emptyContent = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this7);
    return _emptyContent || /*#__PURE__*/_react.default.createElement(_style2.EmptyContentWrapper, null, locale.emptyTip);
  }.bind(this), [_emptyContent, locale]);
  var finalExtra = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this7);

    if (typeof extra === 'function') {
      return /*#__PURE__*/_react.default.createElement(_Extra.default, null, extra(hidePopup));
    } else if (!(0, _isEmpty.default)(extra)) {
      if ( /*#__PURE__*/_react.default.isValidElement(extra)) {
        return /*#__PURE__*/_react.default.createElement(_Extra.default, null, extra);
      } else if ((0, _isObject.default)(extra)) {
        var _ref12 = extra,
            _content2 = _ref12.content,
            rest = (0, _objectWithoutProperties2.default)(_ref12, _excluded3);
        return /*#__PURE__*/_react.default.createElement(_Extra.default, rest, _content2);
      }
    }
  }.bind(this), [extra, hidePopup]);
  var maxWidth = customStyle.popupMaxWidth ? customStyle.popupMaxWidth : 'none';

  var newCustomStyle = _objectSpread({}, customStyle);

  if (virtualList) {
    if ('optionListMaxHeight' in newCustomStyle) {
      warnLogForCustomHeight();
    }

    newCustomStyle.optionListMaxHeight = 'none';
  }

  var hasContent = (children || (options === null || options === void 0 ? void 0 : options.length)) && (Array.isArray(dataSource[2]) ? (_dataSource$ = dataSource[2]) === null || _dataSource$ === void 0 ? void 0 : _dataSource$.length : dataSource[2]);
  return /*#__PURE__*/_react.default.createElement(_style2.MenuWrap, {
    maxWidth: maxWidth
  }, hasContent ? /*#__PURE__*/_react.default.createElement(_style2.BlockMenu, {
    showSelectAll: showSelectAll && multiple && /*#__PURE__*/_react.default.createElement("div", {
      className: _style2.selectAllBtnWrapCls,
      key: "__select_select_all",
      onClick: handleSelectAll
    }, locale.selectAll, searchValue ? " (".concat(searchValue, ")") : ''),
    onChange: handleChange,
    customStyle: newCustomStyle,
    menuCustomStyle: {
      maxWidth: 'none'
    },
    dataSource: dataSource,
    multiple: multiple,
    selectedKeys: multiple ? value : [value],
    virtualList: options ? virtualList : false,
    ref: menuRef,
    _selectStyle: multiple
  }) : /*#__PURE__*/_react.default.createElement(_style2.BlockMenu, {
    customStyle: newCustomStyle,
    menuCustomStyle: {
      maxWidth: 'none'
    }
  }, emptyContent), finalExtra ? /*#__PURE__*/_react.default.createElement(_style2.FooterWrap, null, finalExtra) : null);
});

var Selector = /*#__PURE__*/_react.default.memo(function Selector(_ref13) {
  var v1 = _ref13.v1,
      size = _ref13.size,
      disabled = _ref13.disabled,
      multiple = _ref13.multiple,
      placeholder = _ref13.placeholder,
      renderContent = _ref13.renderContent,
      renderSelector = _ref13.renderSelector,
      renderPopup = _ref13.renderPopup,
      value = _ref13.value,
      onChange = _ref13.onChange,
      visible = _ref13.visible,
      setVisible = _ref13.setVisible,
      locale = _ref13.locale,
      dataSource = _ref13.dataSource,
      search = _ref13.search,
      searchValue = _ref13.searchValue,
      setSearchValue = _ref13.setSearchValue,
      wrapRef = _ref13.wrapRef,
      clearable = _ref13.clearable,
      styleType = _ref13.styleType,
      block = _ref13.block,
      status = _ref13.status,
      tagListCustomStyle = _ref13.tagListCustomStyle,
      _popupProps = (0, _objectWithoutProperties2.default)(_ref13, _excluded4);

  var props = {
    size: size,
    disabled: disabled,
    multiple: multiple,
    placeholder: placeholder,
    renderContent: renderContent,
    renderSelector: renderSelector,
    renderPopup: renderPopup,
    value: value,
    onChange: onChange,
    visible: visible,
    setVisible: setVisible,
    locale: locale,
    dataSource: dataSource,
    search: search,
    searchValue: searchValue,
    setSearchValue: setSearchValue,
    wrapRef: wrapRef,
    clearable: clearable,
    block: block,
    status: status,
    tagListCustomStyle: tagListCustomStyle,
    _popupProps: _popupProps
  };
  var SelectorComponent = renderSelector ? CustomSelector : v1 ? SelectorV1 : multiple ? styleType === 'list' ? MultipleListSelector : MultipleSelector : SingleSelector;
  return /*#__PURE__*/_react.default.createElement(SelectorComponent, props);
});

var useOldContent = function useOldContent(_ref14) {
  var _this8 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var locale = _ref14.locale,
      placeholder = _ref14.placeholder,
      multiple = _ref14.multiple,
      dataSource = _ref14.dataSource,
      value = _ref14.value,
      renderContent = _ref14.renderContent,
      renderPopup = _ref14.renderPopup;
  placeholder = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this8);
    return placeholder || locale.placeholder;
  }.bind(this), [locale.placeholder, placeholder]);
  var defaultRenderContent = (0, _react.useCallback)(function (value, valueChild) {
    (0, _newArrowCheck2.default)(this, _this8);

    if (!multiple) {
      if (value === undefined) {
        return placeholder;
      } else {
        return valueChild;
      }
    } else {
      if (value && value.length) {
        return "".concat(locale.selected).concat(value.length).concat(locale.items);
      } else {
        return placeholder;
      }
    }
  }.bind(this), [locale.items, locale.selected, multiple, placeholder]);
  var getContent = (0, _react.useCallback)(function () {
    var _this9 = this;

    (0, _newArrowCheck2.default)(this, _this8);

    var _dataSource = (0, _slicedToArray2.default)(dataSource, 5),
        _dataSource$2 = _dataSource[4],
        childrenMap = _dataSource$2 === void 0 ? new Map() : _dataSource$2;

    var valueChild;

    var getValueChild = function getValueChild(v) {
      (0, _newArrowCheck2.default)(this, _this9);
      return childrenMap.has(v) ? childrenMap.get(v) : v;
    }.bind(this);

    if (!multiple) {
      valueChild = getValueChild(value);
    } else {
      var _value = value ? (0, _toConsumableArray2.default)(value) : []; // only get the top twenty item child for better performance


      if (_value.length > 20) {
        _value.length = 20;
      }

      valueChild = _value.map(getValueChild);
    }

    if (renderContent) {
      return renderContent(value, valueChild);
    } else {
      return defaultRenderContent(value, valueChild);
    }
  }.bind(this), [dataSource, defaultRenderContent, multiple, renderContent, value]);
  var content = (0, _react.useMemo)(getContent, [getContent]); // 自定义渲染弹层时，开发者可能不传入 options 和 children，导致 content memo deps 不触发变更，故强制更新

  if (renderPopup) content = getContent();
  return content;
}.bind(void 0);

var CustomSelector = /*#__PURE__*/_react.default.memo(function CustomSelector(props) {
  var content = useOldContent(props); // eslint-disable-next-line react/prop-types

  var renderSelector = props.renderSelector,
      visible = props.visible,
      _popupProps = props._popupProps;

  var selector = (renderSelector === null || renderSelector === void 0 ? void 0 : renderSelector(content, visible)) || /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);

  return /*#__PURE__*/_react.default.isValidElement(selector) ? /*#__PURE__*/_react.default.cloneElement(selector, _popupProps) : null;
});

var SelectorV1 = /*#__PURE__*/_react.default.memo(function SelectorV1(props) {
  var size = props.size,
      disabled = props.disabled,
      visible = props.visible,
      status = props.status,
      _popupProps = props._popupProps;
  var content = useOldContent(props);
  var title = typeof content === 'string' ? content : undefined;
  return /*#__PURE__*/_react.default.createElement(_style2.SSelector, (0, _extends2.default)({
    styleType: "border",
    size: size,
    disabled: disabled,
    title: title,
    status: status
  }, _popupProps), /*#__PURE__*/_react.default.createElement("div", {
    className: _style2.selectorContentCls,
    key: "content"
  }, content), /*#__PURE__*/_react.default.createElement(_style2.Arrow, {
    key: "icon",
    type: visible ? 'arrow-up' : 'arrow-down'
  }));
});

var RestListItem = /*#__PURE__*/_react.default.memo(function RestListItem(_ref15) {
  var _this10 = this;

  var item = _ref15.item,
      disabled = _ref15.disabled,
      onClose = _ref15.onClose;
  var handleClose = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this10);
    onClose(item.key);
  }.bind(this), [item.key, onClose]);
  return /*#__PURE__*/_react.default.createElement("div", {
    key: item.key,
    className: _style2.restItemCls
  }, /*#__PURE__*/_react.default.createElement("span", {
    "data-role": "label"
  }, item.children), !disabled && /*#__PURE__*/_react.default.createElement("span", {
    "data-role": "close",
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
    type: "cross"
  })));
});

var RestList = /*#__PURE__*/_react.default.memo(function RestList(_ref16) {
  var _this11 = this;

  var items = _ref16.items,
      onClose = _ref16.onClose,
      disabled = _ref16.disabled,
      rest = (0, _objectWithoutProperties2.default)(_ref16, _excluded5);
  var prevent = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this11);
    e.preventDefault();
    e.stopPropagation();
  }.bind(this), []);
  return /*#__PURE__*/_react.default.createElement(_style2.SRestList, (0, _extends2.default)({}, rest, {
    onClick: prevent,
    onContextMenu: prevent
  }), /*#__PURE__*/_react.default.createElement(_VirtualScrollList.default, {
    width: 160,
    height: 180
  }, items.map(function (item) {
    (0, _newArrowCheck2.default)(this, _this11);
    return /*#__PURE__*/_react.default.createElement(RestListItem, {
      item: item,
      key: item.key,
      onClose: onClose,
      disabled: disabled
    });
  }.bind(this))));
});

var TagItem = /*#__PURE__*/_react.default.memo(function TagItem(_ref17) {
  var _this12 = this;

  var item = _ref17.item,
      disabled = _ref17.disabled,
      onClose = _ref17.onClose;
  var handleClose = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this12);
    onClose(item.key);
  }.bind(this), [item.key, onClose]);
  return /*#__PURE__*/_react.default.createElement(_Tag.default, {
    key: item.key,
    closable: true,
    disabled: disabled,
    onClose: handleClose
  }, item.children);
});

var restAlign = {
  points: ['tl', 'br'],
  overflow: {
    adjustX: 1,
    adjustY: 1
  },
  offset: [10, 10],
  targetOffset: [0, 0]
};

var MultipleListSelector = /*#__PURE__*/_react.default.memo(function MultipleSelector(props) {
  var _this13 = this;

  var size = props.size,
      disabled = props.disabled,
      visible = props.visible,
      setVisible = props.setVisible,
      dataSource = props.dataSource,
      value = props.value,
      onChange = props.onChange,
      placeholder = props.placeholder,
      search = props.search,
      _props$searchValue = props.searchValue,
      searchValue = _props$searchValue === void 0 ? '' : _props$searchValue,
      setSearchValue = props.setSearchValue,
      clearable = props.clearable,
      locale = props.locale,
      block = props.block,
      status = props.status,
      tagListCustomStyle = props.tagListCustomStyle,
      _popupProps = props._popupProps;

  var _dataSource2 = (0, _slicedToArray2.default)(dataSource, 5),
      _dataSource2$ = _dataSource2[4],
      childrenMap = _dataSource2$ === void 0 ? new Map() : _dataSource2$;

  var inputRef = (0, _react.useRef)(null);
  var items = (0, _react.useMemo)(function () {
    var _this14 = this;

    (0, _newArrowCheck2.default)(this, _this13);
    return (value || []).map(function (v) {
      (0, _newArrowCheck2.default)(this, _this14);
      return {
        key: v,
        children: childrenMap.has(v) ? childrenMap.get(v) : v
      };
    }.bind(this));
  }.bind(this), [childrenMap, value]);
  var handleClose = (0, _react.useCallback)(function (key) {
    var _this15 = this;

    (0, _newArrowCheck2.default)(this, _this13);
    onChange === null || onChange === void 0 ? void 0 : onChange(value.filter(function (v) {
      (0, _newArrowCheck2.default)(this, _this15);
      return v !== key;
    }.bind(this)));
  }.bind(this), [onChange, value]);
  var renderItem = (0, _react.useCallback)(function (item) {
    (0, _newArrowCheck2.default)(this, _this13);
    return /*#__PURE__*/_react.default.createElement(TagItem, {
      key: item.key,
      disabled: disabled,
      onClose: handleClose,
      item: item
    });
  }.bind(this), [disabled, handleClose]);
  var handleInput = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this13);
    setSearchValue(e.target.value);
  }.bind(this), [setSearchValue]);
  (0, _react.useEffect)(function () {
    var _inputRef$current;

    (0, _newArrowCheck2.default)(this, _this13);
    if (visible) (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  }.bind(this), [visible]);
  var handleClear = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this13);
    e.stopPropagation();
    e.preventDefault();

    if (!disabled) {
      onChange === null || onChange === void 0 ? void 0 : onChange([]);
      setSearchValue(''); // inputRef.current?.focus();

      setVisible(false);
    }
  }.bind(this), [disabled, onChange, setVisible, setSearchValue]);
  var empty = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this13);
    return !(value !== null && value !== void 0 && value.length);
  }.bind(this), [value]);
  var handleSelectorClick = (0, _react.useCallback)(function (e) {
    var _inputRef$current2, _popupProps$onClick;

    (0, _newArrowCheck2.default)(this, _this13);
    (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.focus();
    (_popupProps$onClick = _popupProps.onClick) === null || _popupProps$onClick === void 0 ? void 0 : _popupProps$onClick.call(_popupProps, e);
  }.bind(this), [_popupProps]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_style2.SSelectorMultiple, (0, _extends2.default)({
    focused: visible,
    empty: empty
  }, _popupProps, {
    onClick: handleSelectorClick,
    block: block,
    size: size,
    status: status,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement(_style.InputPart, {
    stretch: true,
    className: _style2.measureWrapCls
  }, placeholder && empty && !searchValue && /*#__PURE__*/_react.default.createElement("div", {
    className: _style2.placeholderCls
  }, placeholder), !searchValue && !empty && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_style2.placeholderCls, _style2.contentCls)
  }, locale.selected, items.length, locale.items), search ? /*#__PURE__*/_react.default.createElement("input", {
    value: searchValue,
    ref: inputRef,
    onChange: handleInput,
    disabled: disabled
  }) : null), /*#__PURE__*/_react.default.createElement(_style.Clear, {
    clearable: clearable && !empty,
    onClick: handleClear
  }), /*#__PURE__*/_react.default.createElement(_style.InputPart, null, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
    type: visible ? 'arrow-up' : 'arrow-down'
  }))), items.length ? /*#__PURE__*/_react.default.createElement(_Tag.default.Group, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _style2.listCls,
    style: _objectSpread({}, tagListCustomStyle)
  }, items.map(renderItem))) : null);
});

var MultipleSelector = /*#__PURE__*/_react.default.memo(function MultipleSelector(props) {
  var _this16 = this;

  var size = props.size,
      disabled = props.disabled,
      visible = props.visible,
      setVisible = props.setVisible,
      dataSource = props.dataSource,
      value = props.value,
      onChange = props.onChange,
      placeholder = props.placeholder,
      search = props.search,
      _props$searchValue2 = props.searchValue,
      searchValue = _props$searchValue2 === void 0 ? '' : _props$searchValue2,
      setSearchValue = props.setSearchValue,
      wrapRef = props.wrapRef,
      clearable = props.clearable,
      block = props.block,
      status = props.status,
      _popupProps = props._popupProps;

  var _dataSource3 = (0, _slicedToArray2.default)(dataSource, 5),
      _dataSource3$ = _dataSource3[4],
      childrenMap = _dataSource3$ === void 0 ? new Map() : _dataSource3$;

  var inputRef = (0, _react.useRef)(null);
  var items = (0, _react.useMemo)(function () {
    var _this17 = this;

    (0, _newArrowCheck2.default)(this, _this16);
    return (value || []).map(function (v) {
      (0, _newArrowCheck2.default)(this, _this17);
      return {
        key: v,
        children: childrenMap.has(v) ? childrenMap.get(v) : v
      };
    }.bind(this));
  }.bind(this), [childrenMap, value]);
  var handleClose = (0, _react.useCallback)(function (key) {
    var _this18 = this;

    (0, _newArrowCheck2.default)(this, _this16);
    onChange === null || onChange === void 0 ? void 0 : onChange(value.filter(function (v) {
      (0, _newArrowCheck2.default)(this, _this18);
      return v !== key;
    }.bind(this)));
  }.bind(this), [onChange, value]);
  var popoverConfigProps = (0, _usePopoverConfig.default)();
  var renderItem = (0, _react.useCallback)(function (item) {
    (0, _newArrowCheck2.default)(this, _this16);
    return /*#__PURE__*/_react.default.createElement(TagItem, {
      key: item.key,
      disabled: disabled,
      onClose: handleClose,
      item: item
    });
  }.bind(this), [disabled, handleClose]);
  var getRestPopupContainer = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this16);
    return wrapRef === null || wrapRef === void 0 ? void 0 : wrapRef.current;
  }.bind(this), [wrapRef]);
  var renderRest = (0, _react.useCallback)(function (items) {
    (0, _newArrowCheck2.default)(this, _this16);
    if (!items.length) return null;
    return /*#__PURE__*/_react.default.createElement(_Tooltip.default, (0, _extends2.default)({
      key: "rest",
      popup: /*#__PURE__*/_react.default.createElement(RestList, {
        onClose: handleClose,
        disabled: disabled,
        items: items
      }),
      arrow: false,
      getPopupContainer: getRestPopupContainer,
      customStyle: {
        popupWrapperPadding: '0'
      },
      align: restAlign
    }, popoverConfigProps), /*#__PURE__*/_react.default.createElement(_Tag.default, {
      disabled: disabled
    }, "+", items.length));
  }.bind(this), [disabled, getRestPopupContainer, handleClose, popoverConfigProps]);
  var handleInput = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this16);
    setSearchValue(e.target.value);
  }.bind(this), [setSearchValue]);
  (0, _react.useEffect)(function () {
    var _inputRef$current3;

    (0, _newArrowCheck2.default)(this, _this16);
    if (visible) (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.focus();
  }.bind(this), [visible]);
  var handleClear = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this16);
    e.stopPropagation();
    e.preventDefault();

    if (!disabled) {
      onChange === null || onChange === void 0 ? void 0 : onChange([]);
      setSearchValue(''); // inputRef.current?.focus();

      setVisible(false);
    }
  }.bind(this), [disabled, onChange, setVisible, setSearchValue]);
  var empty = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this16);
    return !(value !== null && value !== void 0 && value.length);
  }.bind(this), [value]);
  var handleSelectorClick = (0, _react.useCallback)(function (e) {
    var _inputRef$current4, _popupProps$onClick2;

    (0, _newArrowCheck2.default)(this, _this16);
    (_inputRef$current4 = inputRef.current) === null || _inputRef$current4 === void 0 ? void 0 : _inputRef$current4.focus();
    (_popupProps$onClick2 = _popupProps.onClick) === null || _popupProps$onClick2 === void 0 ? void 0 : _popupProps$onClick2.call(_popupProps, e);
  }.bind(this), [_popupProps]);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_style2.SSelectorMultiple, (0, _extends2.default)({
    focused: visible,
    empty: empty
  }, _popupProps, {
    onClick: handleSelectorClick,
    block: block,
    size: size,
    disabled: disabled,
    status: status
  }), /*#__PURE__*/_react.default.createElement(_style.InputPart, {
    stretch: true,
    className: _style2.measureWrapCls
  }, placeholder && empty && !searchValue && /*#__PURE__*/_react.default.createElement("div", {
    className: _style2.placeholderCls
  }, placeholder), items.length ? /*#__PURE__*/_react.default.createElement(_Overflow.Static, (0, _extends2.default)({
    items: items,
    renderItem: renderItem,
    renderRest: renderRest,
    static: true,
    count: count
  }, _popupProps)) : null, search ? /*#__PURE__*/_react.default.createElement("input", {
    value: searchValue,
    ref: inputRef,
    onChange: handleInput,
    disabled: disabled
  }) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: _style2.measureCls
  }, items.length ? /*#__PURE__*/_react.default.createElement(_Overflow.default, {
    items: items,
    renderItem: renderItem,
    renderRest: renderRest,
    onMeasure: setCount,
    changeContent: searchValue
  }) : null, search ? /*#__PURE__*/_react.default.createElement("span", {
    className: _style2.measureContentCls
  }, searchValue) : null)), /*#__PURE__*/_react.default.createElement(_style.Clear, {
    clearable: clearable && !empty,
    onClick: handleClear
  }), /*#__PURE__*/_react.default.createElement(_style.InputPart, null, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
    type: visible ? 'arrow-up' : 'arrow-down'
  }))));
}); // 单选下的选择器


var SingleSelector = /*#__PURE__*/_react.default.memo(function SingleSelector(_ref18) {
  var _this19 = this;

  var size = _ref18.size,
      disabled = _ref18.disabled,
      placeholder = _ref18.placeholder,
      renderContent = _ref18.renderContent,
      renderPopup = _ref18.renderPopup,
      value = _ref18.value,
      onChange = _ref18.onChange,
      visible = _ref18.visible,
      setVisible = _ref18.setVisible,
      dataSource = _ref18.dataSource,
      search = _ref18.search,
      _ref18$searchValue = _ref18.searchValue,
      searchValue = _ref18$searchValue === void 0 ? '' : _ref18$searchValue,
      setSearchValue = _ref18.setSearchValue,
      clearable = _ref18.clearable,
      status = _ref18.status,
      _popupProps = _ref18._popupProps;
  var inputRef = (0, _react.useRef)(null);
  var getContent = (0, _react.useCallback)(function () {
    var _this20 = this;

    (0, _newArrowCheck2.default)(this, _this19);

    var _dataSource4 = (0, _slicedToArray2.default)(dataSource, 5),
        _dataSource4$ = _dataSource4[4],
        childrenMap = _dataSource4$ === void 0 ? new Map() : _dataSource4$;

    var getValueChild = function getValueChild(v) {
      (0, _newArrowCheck2.default)(this, _this20);
      return childrenMap.has(v) ? childrenMap.get(v) : v;
    }.bind(this);

    var valueChild = getValueChild(value);

    if (renderContent) {
      return renderContent(value, valueChild);
    }

    return value === undefined ? undefined : valueChild;
  }.bind(this), [dataSource, renderContent, value]);
  var content = (0, _react.useMemo)(getContent, [getContent]); // 自定义渲染弹层时，开发者可能不传入 options 和 children，导致 content memo deps 不触发变更，故强制更新

  if (renderPopup) content = getContent();
  var handleInput = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this19);
    setSearchValue(e.target.value);
  }.bind(this), [setSearchValue]);
  var empty = value === undefined;

  var sharedProps = _objectSpread({
    className: _style2.selectInputCls,
    size: size,
    disabled: disabled,
    block: true,
    cursor: search ? 'text' : 'pointer',
    focused: visible,
    empty: empty,
    search: search
  }, _popupProps);

  (0, _react.useEffect)(function () {
    var _inputRef$current5;

    (0, _newArrowCheck2.default)(this, _this19);
    if (visible) (_inputRef$current5 = inputRef.current) === null || _inputRef$current5 === void 0 ? void 0 : _inputRef$current5.focus();
  }.bind(this), [visible]);
  var handleClear = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this19);
    e.preventDefault();
    e.stopPropagation();

    if (!disabled) {
      onChange === null || onChange === void 0 ? void 0 : onChange(undefined);
      setSearchValue(''); // inputRef.current?.focus();

      setVisible(false);
    }
  }.bind(this), [disabled, onChange, setVisible, setSearchValue]);
  return /*#__PURE__*/_react.default.createElement(_style2.SSelectorSingle, (0, _extends2.default)({
    status: status
  }, sharedProps), /*#__PURE__*/_react.default.createElement(_style.InputPart, {
    stretch: true,
    className: _style2.inputWrapCls
  }, content ? /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)(_style2.placeholderCls, _style2.contentCls),
    style: {
      visibility: searchValue ? 'hidden' : 'visible'
    }
  }, content) : /*#__PURE__*/_react.default.createElement("span", {
    className: _style2.placeholderCls,
    style: {
      visibility: searchValue ? 'hidden' : 'visible'
    }
  }, placeholder), search && /*#__PURE__*/_react.default.createElement("input", {
    className: _style2.inputCls,
    value: searchValue,
    onChange: handleInput,
    disabled: disabled,
    ref: inputRef
  })), /*#__PURE__*/_react.default.createElement(_style.Clear, {
    clearable: clearable && !empty,
    onClick: handleClear
  }), /*#__PURE__*/_react.default.createElement(_style.InputPart, null, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
    type: visible ? 'arrow-up' : 'arrow-down'
  })));
});

var Select = function Select(_ref19) {
  var _search,
      _search2,
      _search3,
      _this21 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _ref19$size = _ref19.size,
      size = _ref19$size === void 0 ? 'md' : _ref19$size,
      _status = _ref19.status,
      _value = _ref19.value,
      defaultValue = _ref19.defaultValue,
      _onChange = _ref19.onChange,
      _ref19$onVisibleChang = _ref19.onVisibleChange,
      onVisibleChange = _ref19$onVisibleChang === void 0 ? _noop.default : _ref19$onVisibleChang,
      disabled = _ref19.disabled,
      search = _ref19.search,
      multiple = _ref19.multiple,
      renderContent = _ref19.renderContent,
      renderSelector = _ref19.renderSelector,
      placeholder = _ref19.placeholder,
      _locale = _ref19.locale,
      options = _ref19.options,
      children = _ref19.children,
      emptyContent = _ref19.emptyContent,
      showSelectAll = _ref19.showSelectAll,
      extra = _ref19.extra,
      clearable = _ref19.clearable,
      customStyle = _ref19.customStyle,
      popover = _ref19.popover,
      popoverProps = _ref19.popoverProps,
      renderPopup = _ref19.renderPopup,
      virtualList = _ref19.virtualList,
      block = _ref19.block,
      styleType = _ref19.styleType,
      tagListCustomStyle = _ref19.tagListCustomStyle,
      htmlProps = (0, _objectWithoutProperties2.default)(_ref19, _excluded6);
  if (multiple) clearable = true;

  var _useUncontrolled = (0, _useUncontrolled5.default)(_value, defaultValue, _onChange),
      _useUncontrolled2 = (0, _slicedToArray2.default)(_useUncontrolled, 2),
      value = _useUncontrolled2[0],
      onChange = _useUncontrolled2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var locale = (0, _useLocale.default)(_zh_CN.default, 'Select', _locale);
  var wrapRef = (0, _react.useRef)(null);
  if (search === true) search = {};

  var _useUncontrolled3 = (0, _useUncontrolled5.default)((_search = search) === null || _search === void 0 ? void 0 : _search.searchValue, ((_search2 = search) === null || _search2 === void 0 ? void 0 : _search2.defaultSearchValue) || '', (_search3 = search) === null || _search3 === void 0 ? void 0 : _search3.onSearchValueChange),
      _useUncontrolled4 = (0, _slicedToArray2.default)(_useUncontrolled3, 2),
      searchValue = _useUncontrolled4[0],
      setSearchValue = _useUncontrolled4[1];

  (0, _useInitial.default)(function () {
    (0, _newArrowCheck2.default)(this, _this21);
    if (popover) deprecatedLogForPopover();
    if (virtualList && !options) warnLogForVirtualList();
  }.bind(this));
  var handleSearch = (0, _react.useCallback)(function (value, props) {
    var _this22 = this;

    (0, _newArrowCheck2.default)(this, _this21);

    if (!search || !searchValue) {
      return true;
    }

    if ((0, _typeof2.default)(search) === 'object' && search.handleSearch) {
      var _beforeProps$label;

      // assign props for forward compatible
      var beforeProps = _objectSpread({}, props);

      if (options) beforeProps.children = (_beforeProps$label = beforeProps.label) !== null && _beforeProps$label !== void 0 ? _beforeProps$label : beforeProps.value;

      var itemInfo = _objectSpread({}, props);

      if (!('props' in itemInfo)) {
        Object.defineProperty(itemInfo, 'props', {
          get: function get() {
            (0, _newArrowCheck2.default)(this, _this22);
            warnLogForSearchProps();
            return beforeProps;
          }.bind(this)
        });
      }

      return search.handleSearch(searchValue, value, itemInfo);
    } else {
      var _props$label;

      // use label for options case
      var _children = options ? (_props$label = props.label) !== null && _props$label !== void 0 ? _props$label : props.value : props.children;

      if (_children && typeof _children === 'string') {
        var i = _children.indexOf(searchValue);

        if (i >= 0) {
          var l = searchValue.length;
          return [_children.substring(0, i), _children.substring(i, i + l), _children.substring(i + l)];
        }
      }

      return (value + '').indexOf(searchValue) >= 0;
    }
  }.bind(this), [options, search, searchValue]);
  var childrenDataSource = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this21);
    return options ? [] : groupChildrenAsDataSource(children, disabled, groupOptions, searchValue, handleSearch);
  }.bind(this), [children, disabled, handleSearch, options, searchValue]);
  var optionsDataSource = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this21);
    return options ? groupOptionsAsDataSource(options, disabled, groupOptions, searchValue, handleSearch) : [];
  }.bind(this), [disabled, handleSearch, options, searchValue]);
  var dataSource = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this21);

    if (options) {
      return optionsDataSource;
    }

    return childrenDataSource;
  }.bind(this), [options, childrenDataSource, optionsDataSource]);
  virtualList = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this21);
    return options ? virtualList : false;
  }.bind(this), [options, virtualList]);
  var handleVisibleChange = (0, _react.useCallback)(function (open) {
    (0, _newArrowCheck2.default)(this, _this21);
    if (disabled) return;
    setVisible(open);
    onVisibleChange(open);
    if (!open) setSearchValue('');
  }.bind(this), [disabled, onVisibleChange, setSearchValue]);
  var hidePopup = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this21);
    return handleVisibleChange(false);
  }.bind(this), [handleVisibleChange]);
  var hasSubGroup = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this21);
    var hasSubGroup = dataSource[3].size > 0;
    warnLogForSubGroup();
    return hasSubGroup;
  }.bind(this), [dataSource]); // 多层数据/搜索且自定义 selector/自定义渲染内容时，无法兼容，回滚到老版本

  var _useState5 = (0, _react.useState)(function () {
    (0, _newArrowCheck2.default)(this, _this21);
    return hasSubGroup || !!(search && renderSelector);
  }.bind(this)),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 1),
      v1 = _useState6[0];

  var handleOnChange = (0, _react.useCallback)(function (v) {
    (0, _newArrowCheck2.default)(this, _this21);
    onChange(v);
    setSearchValue('');
  }.bind(this), [onChange, setSearchValue]);

  var popup = /*#__PURE__*/_react.default.createElement(Popup, {
    v1: v1,
    extra: extra,
    customStyle: customStyle,
    search: search,
    multiple: multiple,
    emptyContent: emptyContent,
    showSelectAll: showSelectAll,
    value: value,
    renderPopup: renderPopup,
    handleVisibleChange: handleVisibleChange,
    options: options,
    onChange: handleOnChange,
    locale: locale,
    hidePopup: hidePopup,
    dataSource: dataSource,
    searchValue: searchValue,
    setSearchValue: setSearchValue,
    virtualList: virtualList
  }, children);

  var _useContext = (0, _react.useContext)(_ControllerContext.default),
      status = _useContext.status;

  var selector = /*#__PURE__*/_react.default.createElement(Selector, {
    v1: v1,
    size: size,
    status: _status || status,
    disabled: disabled,
    multiple: multiple,
    placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : locale.placeholder,
    renderContent: renderContent,
    renderSelector: renderSelector,
    renderPopup: renderPopup,
    value: value,
    onChange: onChange,
    visible: visible,
    setVisible: setVisible,
    locale: locale,
    dataSource: dataSource,
    clearable: clearable,
    search: search,
    searchValue: searchValue,
    setSearchValue: setSearchValue,
    styleType: styleType,
    wrapRef: wrapRef,
    block: block,
    tagListCustomStyle: tagListCustomStyle
  });

  var popoverTriggerAttrs = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this21);
    return v1 ? {
      trigger: ['click']
    } : {
      trigger: [],
      showAction: ['click', 'contextMenu', 'focus']
    };
  }.bind(this), [v1]);
  var popoverConfigProps = (0, _usePopoverConfig.default)();
  return /*#__PURE__*/_react.default.createElement(_SelectContext.default.Provider, {
    value: {
      hidePopup: hidePopup,
      handleSearch: handleSearch,
      searchValue: searchValue
    }
  }, /*#__PURE__*/_react.default.createElement(_style2.SelectWrap, (0, _extends2.default)({
    ref: wrapRef,
    disabled: disabled,
    multiple: multiple,
    block: block
  }, htmlProps), /*#__PURE__*/_react.default.createElement(_Popover.default, (0, _extends2.default)({
    visible: visible,
    onVisibleChange: handleVisibleChange,
    placement: "bottomLeft",
    stretch: block ? blockPopoverStretch : popoverStretch
  }, popoverTriggerAttrs, popoverConfigProps, popover, popoverProps, {
    popup: popup,
    forceRender: false
  }), selector)));
}.bind(void 0);

Select.propTypes = {
  placeholder: _propTypes.default.node,
  onChange: _propTypes.default.func,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.node
  })),
  extra: _propTypes.default.oneOfType([_propTypes.default.shape({
    content: _propTypes.default.node.isRequired
  }), _propTypes.default.node, _propTypes.default.func]),
  multiple: _propTypes.default.bool,
  showSelectAll: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  styleType: _propTypes.default.oneOf(['list']),
  renderContent: _propTypes.default.func,
  renderSelector: _propTypes.default.func,
  renderPopup: _propTypes.default.func,
  search: _propTypes.default.oneOfType([_propTypes.default.oneOf([true]), _propTypes.default.shape({
    handleSearch: _propTypes.default.func,
    searchValue: _propTypes.default.string,
    defaultSearchValue: _propTypes.default.string,
    onSearchValueChange: _propTypes.default.func
  })]),
  status: _propTypes.default.oneOfType([_propTypes.default.oneOf(['default']), _propTypes.default.oneOf(['error']), _propTypes.default.string]),
  block: _propTypes.default.bool,
  clearable: _propTypes.default.bool,
  popover: _propTypes.default.any,
  popoverProps: _propTypes.default.any,
  onVisibleChange: _propTypes.default.func,
  locale: _propTypes.default.any,
  customStyle: _propTypes.default.shape({
    optionListMaxHeight: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    popupMaxWidth: _propTypes.default.string,
    popupWidth: _propTypes.default.string
  }),
  emptyContent: _propTypes.default.node,
  virtualList: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    simple: _propTypes.default.oneOf([true]),
    height: _propTypes.default.number
  })])
};

var _default = /*#__PURE__*/_react.default.memo(Select);

exports.default = _default;