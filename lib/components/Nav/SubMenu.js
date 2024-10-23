"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "RcSubMenu", {
  enumerable: true,
  get: function get() {
    return _rcMenu.SubMenu;
  }
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rcMenu = require("rc-menu");

var _style = require("./style");

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _NavContext = _interopRequireDefault(require("./NavContext"));

var _excluded = ["icon", "title", "marginLeft", "type"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SubMenu(props) {
  var _icon$props;

  var icon = props.icon,
      title = props.title,
      marginLeft = props.marginLeft,
      _props$type = props.type,
      type = _props$type === void 0 ? 'normal' : _props$type,
      rest = (0, _objectWithoutProperties2.default)(props, _excluded);

  var _React$useContext = React.useContext(_NavContext.default),
      subMenuItemRender = _React$useContext.subMenuItemRender;

  var iconTitle = icon ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.isValidElement(icon) && /*#__PURE__*/React.cloneElement(icon, {
    className: (0, _classnames.default)( /*#__PURE__*/React.isValidElement(icon) ? (_icon$props = icon.props) === null || _icon$props === void 0 ? void 0 : _icon$props.className : '', "".concat(_style.prefixClsMenuItem, "-icon"))
  }), /*#__PURE__*/React.createElement("span", {
    className: _style.prefixClsTitleText
  }, title)) : /*#__PURE__*/React.createElement("span", {
    className: _style.prefixClsTitleText
  }, title);
  var titleWrapNode = subMenuItemRender ? /*#__PURE__*/React.cloneElement(subMenuItemRender(props, /*#__PURE__*/React.createElement(React.Fragment, null, iconTitle)), {
    className: _style.prefixClsTitleContent
  }) : /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames.default)(_style.prefixClsTitleContent)
  }, iconTitle);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: marginLeft
    },
    title: title
  }, /*#__PURE__*/React.createElement(_rcMenu.SubMenu, (0, _extends2.default)({
    expandIcon: /*#__PURE__*/React.createElement(_SvgIcon.default, {
      className: "uc-fe-nav-submenu-arrow",
      type: "triangle-down"
    })
  }, rest, {
    className: (0, _classnames.default)("".concat(_style.prefixClsMenu, "-submenu-").concat(type)),
    title: titleWrapNode
  })));
}

var _default = SubMenu;
exports.default = _default;