"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useItems = useItems;
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _intersection2 = _interopRequireDefault(require("lodash/intersection"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rcMenu = require("rc-menu");

var _Popover = _interopRequireDefault(require("../../components/Popover"));

var _Menu = _interopRequireDefault(require("../../components/Menu"));

var _style = require("./style");

var _SubMenu = _interopRequireDefault(require("./SubMenu"));

var _NavContext = _interopRequireDefault(require("./NavContext"));

var _util = require("./util");

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

var _this8 = void 0;

var _excluded = ["title", "icon", "verticalChildren", "marginLeft"],
    _excluded2 = ["title", "icon", "verticalChildren", "marginLeft"],
    _excluded3 = ["label", "children", "key", "style", "labelType"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var NavItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(NavItem, _React$Component);

  var _super = _createSuper(NavItem);

  function NavItem() {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, NavItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.renderIcon = function (icon) {
      var _icon$props;

      (0, _newArrowCheck2.default)(this, _this2);
      return /*#__PURE__*/_react.default.cloneElement(icon, {
        className: (0, _classnames.default)((_icon$props = icon.props) === null || _icon$props === void 0 ? void 0 : _icon$props.className, "".concat(_style.prefixClsMenuItem, "-icon"))
      });
    }.bind(this);

    _this.renderItem = function (contextProps) {
      var _this3 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props = _this.props,
          className = _this$props.className,
          type = _this$props.type;
      var _this$props2 = _this.props,
          title = _this$props2.title,
          icon = _this$props2.icon,
          verticalChildren = _this$props2.verticalChildren,
          marginLeft = _this$props2.marginLeft,
          rest = (0, _objectWithoutProperties2.default)(_this$props2, _excluded);
      var inlineCollapsed = contextProps.inlineCollapsed,
          menuItemRender = contextProps.menuItemRender;

      if (verticalChildren !== null && verticalChildren !== void 0 && verticalChildren.length) {
        return _this.renderVerticalItem(contextProps);
      }

      var dom = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.isValidElement(icon) && _this.renderIcon(icon), _this.renderItemChildren());

      var renderContent = function renderContent() {
        (0, _newArrowCheck2.default)(this, _this3);
        return menuItemRender ? /*#__PURE__*/_react.default.cloneElement(menuItemRender(_this.props, dom), {
          className: (0, _classnames.default)(_style.prefixClsTitleContent)
        }) : /*#__PURE__*/_react.default.createElement("div", {
          className: _style.prefixClsTitleContent
        }, dom);
      }.bind(this);

      var returnNode = /*#__PURE__*/_react.default.createElement(_rcMenu.Item, (0, _extends2.default)({}, rest, {
        className: (0, _classnames.default)(type && "".concat(_style.prefixClsMenuItem, "-").concat(type), _style.prefixClsMenuItem, className, inlineCollapsed && "".concat(_style.prefixClsMenuItem, "-collapsed")),
        title: typeof title === 'string' ? title : undefined
      }), inlineCollapsed ? /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
        popup: /*#__PURE__*/_react.default.createElement("span", {
          className: "".concat(_style.prefixClsMenuItem, "-tooltop-text")
        }, title),
        arrow: false,
        placement: "right"
      }, renderContent()) : renderContent());

      return returnNode;
    }.bind(this);

    _this.renderPopverMenu = function (items, subMenuItemRender, menuItemRender) {
      var _this4 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      return items.map(function (i) {
        (0, _newArrowCheck2.default)(this, _this4);
        var _ref = i,
            children = _ref.children,
            label = _ref.label,
            key = _ref.key;

        if (children) {
          return /*#__PURE__*/_react.default.createElement(_Menu.default.SubMenu, {
            title: subMenuItemRender ? subMenuItemRender(_objectSpread(_objectSpread({}, i), {}, {
              marginLeft: 0
            }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, label)) : label,
            key: key,
            styleType: "popover"
          }, _this.renderPopverMenu(children, subMenuItemRender, menuItemRender));
        }

        return /*#__PURE__*/_react.default.createElement(_Menu.default.Item, {
          key: key
        }, menuItemRender ? menuItemRender(_objectSpread(_objectSpread({}, i), {}, {
          marginLeft: 0
        }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, label)) : label);
      }.bind(this));
    }.bind(this);

    _this.renderVerticalItem = function (_ref2) {
      var _this5 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      var inlineCollapsed = _ref2.inlineCollapsed,
          selectedKeys = _ref2.selectedKeys,
          subMenuItemRender = _ref2.subMenuItemRender,
          menuItemRender = _ref2.menuItemRender;
      var _this$props3 = _this.props,
          className = _this$props3.className,
          type = _this$props3.type,
          children = _this$props3.children;
      var _this$props4 = _this.props,
          title = _this$props4.title,
          icon = _this$props4.icon,
          verticalChildren = _this$props4.verticalChildren,
          marginLeft = _this$props4.marginLeft,
          rest = (0, _objectWithoutProperties2.default)(_this$props4, _excluded2);
      var subKeys = (0, _util.getTreeAllKeys)([], verticalChildren || []).map(function (item) {
        (0, _newArrowCheck2.default)(this, _this5);
        return item.toString();
      }.bind(this));
      var intersectKeys = (0, _intersection2.default)(subKeys, selectedKeys);

      var dom = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.isValidElement(icon) ? _this.renderIcon(icon) : /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(_style.prefixClsMenuItem, "-icon")
      }, title === null || title === void 0 ? void 0 : title.charAt(0)), _this.renderItemChildren());

      var getItem = function getItem(itemRender) {
        (0, _newArrowCheck2.default)(this, _this5);
        return itemRender ? /*#__PURE__*/_react.default.cloneElement(itemRender(_this.props, dom), {
          className: (0, _classnames.default)(_style.prefixClsTitleContent)
        }) : /*#__PURE__*/_react.default.createElement("div", {
          className: _style.prefixClsTitleContent
        }, dom);
      }.bind(this);

      return /*#__PURE__*/_react.default.createElement(_Popover.default, {
        trigger: ['hover'],
        placement: "rightTop",
        popup: /*#__PURE__*/_react.default.createElement(PopMenu, {
          renderPopverMenu: _this.renderPopverMenu,
          verticalChildren: verticalChildren
        })
      }, /*#__PURE__*/_react.default.createElement(_rcMenu.Item, (0, _extends2.default)({}, rest, {
        className: (0, _classnames.default)(type && "".concat(_style.prefixClsMenuItem, "-").concat(type), _style.prefixClsMenuItem, className, inlineCollapsed && "".concat(_style.prefixClsMenuItem, "-collapsed"), intersectKeys.length && "".concat(_style.prefixClsMenuItem, "-pop-has-selected")),
        title: typeof title === 'string' ? title : undefined
      }), children ? getItem(subMenuItemRender) : getItem(menuItemRender)));
    }.bind(this);

    return _this;
  }

  (0, _createClass2.default)(NavItem, [{
    key: "renderItemChildren",
    value: function renderItemChildren() {
      var children = this.props.children;

      var wrapNode = /*#__PURE__*/_react.default.createElement("span", {
        className: _style.prefixClsTitleText
      }, children);

      return wrapNode;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          marginLeft: this.props.marginLeft
        }
      }, /*#__PURE__*/_react.default.createElement(_NavContext.default.Consumer, null, this.renderItem));
    }
  }]);
  return NavItem;
}(_react.default.Component);

exports.default = NavItem;

function useItems(items) {
  var _this6 = this;

  var inlineIndent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var inlineCollapsed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var mode = arguments.length > 3 ? arguments[3] : undefined;
  return _react.default.useMemo(function () {
    (0, _newArrowCheck2.default)(this, _this6);

    if (!items) {
      return items;
    }

    return convertItemsToNodes(items, 0, inlineIndent, inlineCollapsed, mode);
  }.bind(this), [items]);
}
/**
 *
 * @param list
 * @param padding 当前item的padding-left
 * @param inlineIndent 每一级padding递增值
 * @param level 当前等级
 * @param menuLevel 需要将子项目变为右侧Menu垂直展开的等级
 * @returns
 */


function convertItemsToNodes(list, padding, inlineIndent, collapsed, mode) {
  var _this7 = this;

  return (list || []).map(function (opt, index) {
    (0, _newArrowCheck2.default)(this, _this7);

    if (opt && (0, _typeof2.default)(opt) === 'object') {
      var _ref3 = opt,
          label = _ref3.label,
          children = _ref3.children,
          key = _ref3.key,
          style = _ref3.style,
          labelType = _ref3.labelType,
          restProps = (0, _objectWithoutProperties2.default)(_ref3, _excluded3);
      var mergedKey = key !== null && key !== void 0 ? key : "tmp-".concat(index);
      var nextPadding = labelType === 'small' ? padding : inlineIndent; // 垂直展开，有children的菜单 labelType为small时不是NavItem，是SubMenu
      // 折叠目录，所有都是NavItem

      if (labelType !== 'small' && mode === 'vertical' && children || collapsed) {
        return /*#__PURE__*/_react.default.createElement(NavItem, (0, _extends2.default)({}, restProps, {
          key: mergedKey,
          type: labelType,
          style: _objectSpread({}, style),
          marginLeft: padding,
          verticalChildren: children,
          title: label
        }), label);
      }

      if (children) {
        // Sub Menu
        return /*#__PURE__*/_react.default.createElement(_SubMenu.default, (0, _extends2.default)({
          key: mergedKey
        }, restProps, {
          type: labelType,
          title: label,
          marginLeft: padding
        }), convertItemsToNodes(children, nextPadding, inlineIndent, collapsed, mode));
      }

      return /*#__PURE__*/_react.default.createElement(NavItem, (0, _extends2.default)({}, restProps, {
        title: label,
        key: mergedKey,
        type: labelType,
        style: _objectSpread({}, style),
        marginLeft: padding
      }), label);
    }

    return null;
  }.bind(this)).filter(function (opt) {
    (0, _newArrowCheck2.default)(this, _this7);
    return opt;
  }.bind(this));
} // 垂直菜单悬浮展开部分


var PopMenu = function PopMenu(_ref4) {
  var _this9 = this;

  (0, _newArrowCheck2.default)(this, _this8);
  var renderPopverMenu = _ref4.renderPopverMenu,
      verticalChildren = _ref4.verticalChildren;

  var _React$useContext = _react.default.useContext(_NavContext.default),
      setNavSelectedKeys = _React$useContext.setSelectedKeys,
      navSelectedKeys = _React$useContext.selectedKeys,
      subMenuItemRender = _React$useContext.subMenuItemRender,
      menuItemRender = _React$useContext.menuItemRender;

  var _React$useState = _react.default.useState([]),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      menuSelectedKeys = _React$useState2[0],
      setMenuSelectedKeys = _React$useState2[1];

  _react.default.useEffect(function () {
    var _this10 = this;

    (0, _newArrowCheck2.default)(this, _this9);
    var subKeys = (0, _util.getTreeAllKeys)([], verticalChildren || []).map(function (item) {
      (0, _newArrowCheck2.default)(this, _this10);
      return item.toString();
    }.bind(this));
    var intersectKeys = (0, _intersection2.default)(subKeys, navSelectedKeys);
    setMenuSelectedKeys(intersectKeys.length ? intersectKeys : []);
  }.bind(this), [navSelectedKeys]);

  return /*#__PURE__*/_react.default.createElement(_style.NavPopWrap, null, /*#__PURE__*/_react.default.createElement(_Menu.default, {
    selectedKeys: menuSelectedKeys,
    onChange: function (key) {
      (0, _newArrowCheck2.default)(this, _this9);
      setNavSelectedKeys === null || setNavSelectedKeys === void 0 ? void 0 : setNavSelectedKeys(key);
    }.bind(this)
  }, renderPopverMenu(verticalChildren || [], subMenuItemRender, menuItemRender)));
}.bind(void 0);