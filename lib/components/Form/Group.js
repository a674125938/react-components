"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

var _ItemPropsWrap = _interopRequireDefault(require("./ItemPropsWrap"));

var _excluded = ["title", "itemProps", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Group = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Group, _Component);

  var _super = _createSuper(Group);

  function Group() {
    (0, _classCallCheck2.default)(this, Group);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Group, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          itemProps = _this$props.itemProps,
          children = _this$props.children,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement(_style.GroupWrap, rest, /*#__PURE__*/_react.default.createElement(_style.GroupTitle, null, title), /*#__PURE__*/_react.default.createElement(_ItemPropsWrap.default, {
        itemProps: itemProps
      }, /*#__PURE__*/_react.default.createElement("div", null, children)));
    }
  }]);
  return Group;
}(_react.Component);

exports.default = Group;
Group.propTypes = {
  /** 标题项 */
  title: _propTypes.default.node,

  /** @ignore */
  children: _propTypes.default.node,

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