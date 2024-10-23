"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverWrap = exports.animationPrefixCls = exports.prefixCls = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rcTrigger = _interopRequireDefault(require("../../../libs/rc-trigger"));

var _config = _interopRequireDefault(require("../../../config"));

var _animation = require("../../../style/animation");

var _excluded = ["className", "popupClassName", "trueClassName", "triggerRef"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _prefixCls = _config.default.prefixCls;
var prefixCls = _prefixCls + '-popover';
exports.prefixCls = prefixCls;
var animationPrefixCls = prefixCls + '-animation';
exports.animationPrefixCls = animationPrefixCls;
var animationDuration = '0.1s';

var RcTriggerWrap = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(RcTriggerWrap, _Component);

  var _super = _createSuper(RcTriggerWrap);

  function RcTriggerWrap() {
    (0, _classCallCheck2.default)(this, RcTriggerWrap);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(RcTriggerWrap, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          popupClassName = _this$props.popupClassName,
          trueClassName = _this$props.trueClassName,
          triggerRef = _this$props.triggerRef,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement(_rcTrigger.default, (0, _extends2.default)({
        ref: triggerRef,
        className: trueClassName,
        popupClassName: (0, _classnames.default)(className, popupClassName)
      }, rest));
    }
  }]);
  return RcTriggerWrap;
}(_react.Component);

RcTriggerWrap.propTypes = {
  className: _propTypes.default.string,
  popupClassName: _propTypes.default.string,
  trueClassName: _propTypes.default.string,
  triggerRef: _propTypes.default.func
};
var PopoverWrap = ( /*#__PURE__*/0, _styledBase.default)(RcTriggerWrap, {
  target: "e18jm5rj0",
  label: "PopoverWrap"
})("&.", prefixCls, "{position:absolute;left:-9999px;top:-9999px;z-index:1030;display:block;&-hidden{display:none;}}&.", prefixCls, "-animation{&-fade{&-enter,&-appear,&-leave{animation-duration:", animationDuration, ";animation-fill-mode:both;}&-enter,&-appear{animation-name:", _animation.fadeIn, ";}&-leave{animation-name:", _animation.fadeOut, ";}}&-bounce{&-enter,&-appear,&-leave{animation-duration:", animationDuration, ";animation-fill-mode:both;}&-enter,&-appear{animation-name:", _animation.bounceIn, ";}&-leave{animation-name:", _animation.bounceOut, ";}}&-zoom{&-enter,&-appear,&-leave{animation-duration:", animationDuration, ";animation-fill-mode:both;}&-enter,&-appear{animation-name:", _animation.zoomIn, ";}&-leave{animation-name:", _animation.zoomOut, ";}}&-slide-up{&-enter,&-appear{animation-duration:", animationDuration, ";animation-fill-mode:both;transform-origin:0 0;display:block !important;opacity:0;animation-timing-function:cubic-bezier(0.08,0.82,0.17,1);animation-play-state:paused;}&-leave{animation-duration:", animationDuration, ";animation-fill-mode:both;transform-origin:0 0;display:block !important;opacity:1;animation-timing-function:cubic-bezier(0.6,0.04,0.98,0.34);animation-play-state:paused;}&-enter-active.", prefixCls, "-placement-bottomLeft,&-appear-active.", prefixCls, "-placement-bottomLeft,&-enter-active.", prefixCls, "-placement-bottomCenter,&-appear-active.", prefixCls, "-placement-bottomCenter,&-enter-active.", prefixCls, "-placement-bottomRight,&-appear-active.", prefixCls, "-placement-bottomRight{animation-name:", _animation.slideUpIn, ";animation-play-state:running;}&-enter-active.", prefixCls, "-placement-topLeft,&-appear-active.", prefixCls, "-placement-topLeft,&-enter-active.", prefixCls, "-placement-topCenter,&-appear-active.", prefixCls, "-placement-topCenter,&-enter-active.", prefixCls, "-placement-topRight,&-appear-active.", prefixCls, "-placement-topRight{animation-name:", _animation.slideDownIn, ";animation-play-state:running;}&-leave-active.", prefixCls, "-placement-bottomLeft,&-leave-active.", prefixCls, "-placement-bottomCenter,&-leave-active.", prefixCls, "-placement-bottomRight{animation-name:", _animation.slideUpOut, ";animation-play-state:running;}&-leave-active.", prefixCls, "-placement-topLeft,&-leave-active.", prefixCls, "-placement-topCenter,&-leave-active.", prefixCls, "-placement-topRight{animation-name:", _animation.slideDownOut, ";animation-play-state:running;}}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BvcG92ZXIvc3R5bGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NnRCIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Qb3BvdmVyL3N0eWxlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBSY1RyaWdnZXIgZnJvbSAncmMtdHJpZ2dlcic7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnc3JjL2NvbmZpZyc7XG5cbmNvbnN0IHsgcHJlZml4Q2xzOiBfcHJlZml4Q2xzIH0gPSBjb25maWc7XG5leHBvcnQgY29uc3QgcHJlZml4Q2xzID0gX3ByZWZpeENscyArICctcG9wb3Zlcic7XG5leHBvcnQgY29uc3QgYW5pbWF0aW9uUHJlZml4Q2xzID0gcHJlZml4Q2xzICsgJy1hbmltYXRpb24nO1xuXG5pbXBvcnQge1xuICAgIGZhZGVJbixcbiAgICBmYWRlT3V0LFxuICAgIGJvdW5jZUluLFxuICAgIGJvdW5jZU91dCxcbiAgICB6b29tSW4sXG4gICAgem9vbU91dCxcbiAgICBzbGlkZVVwSW4sXG4gICAgc2xpZGVEb3duSW4sXG4gICAgc2xpZGVVcE91dCxcbiAgICBzbGlkZURvd25PdXRcbn0gZnJvbSAnc3JjL3N0eWxlL2FuaW1hdGlvbic7XG5cbmNvbnN0IGFuaW1hdGlvbkR1cmF0aW9uID0gJzAuMXMnO1xuXG5jbGFzcyBSY1RyaWdnZXJXcmFwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB0cnVlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB0cmlnZ2VyUmVmOiBQcm9wVHlwZXMuZnVuY1xuICAgIH07XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZSwgcG9wdXBDbGFzc05hbWUsIHRydWVDbGFzc05hbWUsIHRyaWdnZXJSZWYsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmNUcmlnZ2VyXG4gICAgICAgICAgICAgICAgcmVmPXt0cmlnZ2VyUmVmfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dHJ1ZUNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBwb3B1cENsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc05hbWUsIHBvcHVwQ2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgUG9wb3ZlcldyYXAgPSBzdHlsZWQoUmNUcmlnZ2VyV3JhcClgXG4gICAgJi4ke3ByZWZpeENsc30ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IC05OTk5cHg7XG4gICAgICAgIHRvcDogLTk5OTlweDtcbiAgICAgICAgei1pbmRleDogMTAzMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgJi1oaWRkZW4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuJHtwcmVmaXhDbHN9LWFuaW1hdGlvbiB7XG4gICAgICAgICYtZmFkZSB7XG4gICAgICAgICAgICAmLWVudGVyLFxuICAgICAgICAgICAgJi1hcHBlYXIsXG4gICAgICAgICAgICAmLWxlYXZlIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246ICR7YW5pbWF0aW9uRHVyYXRpb259O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLWVudGVyLFxuICAgICAgICAgICAgJi1hcHBlYXIge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiAke2ZhZGVJbn07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLWxlYXZlIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogJHtmYWRlT3V0fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtYm91bmNlIHtcbiAgICAgICAgICAgICYtZW50ZXIsXG4gICAgICAgICAgICAmLWFwcGVhcixcbiAgICAgICAgICAgICYtbGVhdmUge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHthbmltYXRpb25EdXJhdGlvbn07XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYtZW50ZXIsXG4gICAgICAgICAgICAmLWFwcGVhciB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6ICR7Ym91bmNlSW59O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi1sZWF2ZSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6ICR7Ym91bmNlT3V0fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtem9vbSB7XG4gICAgICAgICAgICAmLWVudGVyLFxuICAgICAgICAgICAgJi1hcHBlYXIsXG4gICAgICAgICAgICAmLWxlYXZlIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246ICR7YW5pbWF0aW9uRHVyYXRpb259O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLWVudGVyLFxuICAgICAgICAgICAgJi1hcHBlYXIge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiAke3pvb21Jbn07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLWxlYXZlIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogJHt6b29tT3V0fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtc2xpZGUtdXAge1xuICAgICAgICAgICAgJi1lbnRlcixcbiAgICAgICAgICAgICYtYXBwZWFyIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246ICR7YW5pbWF0aW9uRHVyYXRpb259O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wOCwgMC44MiwgMC4xNywgMSk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYtbGVhdmUge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHthbmltYXRpb25EdXJhdGlvbn07XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzQpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtZW50ZXItYWN0aXZlLiR7cHJlZml4Q2xzfS1wbGFjZW1lbnQtYm90dG9tTGVmdCxcbiAgICAgICAgICAgICAgICAmLWFwcGVhci1hY3RpdmUuJHtwcmVmaXhDbHN9LXBsYWNlbWVudC1ib3R0b21MZWZ0LFxuICAgICAgICAgICAgICAgICYtZW50ZXItYWN0aXZlLiR7cHJlZml4Q2xzfS1wbGFjZW1lbnQtYm90dG9tQ2VudGVyLFxuICAgICAgICAgICAgICAgICYtYXBwZWFyLWFjdGl2ZS4ke3ByZWZpeENsc30tcGxhY2VtZW50LWJvdHRvbUNlbnRlcixcbiAgICAgICAgICAgICAgICAmLWVudGVyLWFjdGl2ZS4ke3ByZWZpeENsc30tcGxhY2VtZW50LWJvdHRvbVJpZ2h0LFxuICAgICAgICAgICAgICAgICYtYXBwZWFyLWFjdGl2ZS4ke3ByZWZpeENsc30tcGxhY2VtZW50LWJvdHRvbVJpZ2h0IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogJHtzbGlkZVVwSW59O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi1lbnRlci1hY3RpdmUuJHtwcmVmaXhDbHN9LXBsYWNlbWVudC10b3BMZWZ0LFxuICAgICAgICAgICAgICAgICYtYXBwZWFyLWFjdGl2ZS4ke3ByZWZpeENsc30tcGxhY2VtZW50LXRvcExlZnQsXG4gICAgICAgICAgICAgICAgJi1lbnRlci1hY3RpdmUuJHtwcmVmaXhDbHN9LXBsYWNlbWVudC10b3BDZW50ZXIsXG4gICAgICAgICAgICAgICAgJi1hcHBlYXItYWN0aXZlLiR7cHJlZml4Q2xzfS1wbGFjZW1lbnQtdG9wQ2VudGVyLFxuICAgICAgICAgICAgICAgICYtZW50ZXItYWN0aXZlLiR7cHJlZml4Q2xzfS1wbGFjZW1lbnQtdG9wUmlnaHQsXG4gICAgICAgICAgICAgICAgJi1hcHBlYXItYWN0aXZlLiR7cHJlZml4Q2xzfS1wbGFjZW1lbnQtdG9wUmlnaHQge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiAke3NsaWRlRG93bklufTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYtbGVhdmUtYWN0aXZlLiR7cHJlZml4Q2xzfS1wbGFjZW1lbnQtYm90dG9tTGVmdCxcbiAgICAgICAgICAgICAgICAmLWxlYXZlLWFjdGl2ZS4ke3ByZWZpeENsc30tcGxhY2VtZW50LWJvdHRvbUNlbnRlcixcbiAgICAgICAgICAgICAgICAmLWxlYXZlLWFjdGl2ZS4ke3ByZWZpeENsc30tcGxhY2VtZW50LWJvdHRvbVJpZ2h0IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogJHtzbGlkZVVwT3V0fTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYtbGVhdmUtYWN0aXZlLiR7cHJlZml4Q2xzfS1wbGFjZW1lbnQtdG9wTGVmdCxcbiAgICAgICAgICAgICAgICAmLWxlYXZlLWFjdGl2ZS4ke3ByZWZpeENsc30tcGxhY2VtZW50LXRvcENlbnRlcixcbiAgICAgICAgICAgICAgICAmLWxlYXZlLWFjdGl2ZS4ke3ByZWZpeENsc30tcGxhY2VtZW50LXRvcFJpZ2h0IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogJHtzbGlkZURvd25PdXR9O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcbiJdfQ== */"));
exports.PopoverWrap = PopoverWrap;