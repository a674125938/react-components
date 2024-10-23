"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _getScrollBarSize = _interopRequireDefault(require("rc-util/lib/getScrollBarSize"));

var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

var _utils = require("./utils");

var _this13 = void 0;

var _excluded = ["wrapperClassName", "className", "children", "style", "width", "height", "defaultOpen", "firstEnter", "open", "prefixCls", "placement", "level", "levelMove", "ease", "duration", "getContainer", "handler", "onChange", "afterVisibleChange", "onMaskClick", "onHandleClick", "showMask", "maskStyle", "keyboard", "closeHandler"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var currentDrawer = {};
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var Drawer = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(Drawer, _React$PureComponent);

  var _super = _createSuper(Drawer);

  function Drawer(_props) {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, Drawer);
    _this = _super.call(this, _props);

    _this.onMaskTouchEnd = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);
      var onMaskClick = _this.props.onMaskClick;

      if (onMaskClick) {
        onMaskClick(e);
      }

      _this.onTouchEnd(e, true);
    }.bind(this);

    _this.onIconTouchEnd = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);
      var onHandleClick = _this.props.onHandleClick;

      if (onHandleClick) {
        onHandleClick(e);
      }

      _this.onTouchEnd(e);
    }.bind(this);

    _this.onTouchEnd = function (e, close) {
      var _this3 = this;

      (0, _newArrowCheck2.default)(this, _this2);

      if (_this.props.open !== undefined) {
        return;
      }

      var open = close || _this.state.open;
      _this.isOpenChange = true;

      _this.setState({
        open: !open
      }, function () {
        (0, _newArrowCheck2.default)(this, _this3);

        _this.domFocus(!open);
      }.bind(this));
    }.bind(this);

    _this.onKeyDown = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      if (e.keyCode === _KeyCode.default.ESC) {
        var _this$props = _this.props,
            onMaskClick = _this$props.onMaskClick,
            onHandleClick = _this$props.onHandleClick;
        e.stopPropagation();
        var onClose = onHandleClick || onMaskClick;

        if (onClose) {
          onClose(e);
        } else {
          _this.onTouchEnd(e, true);
        }
      }
    }.bind(this);

    _this.onWrapperTransitionEnd = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      if (e.target === _this.contentWrapper && e.propertyName.match(/transform$/)) {
        _this.dom.style.transition = '';

        if (!_this.state.open && _this.getCurrentDrawerSome()) {
          document.body.style.overflowX = '';

          if (_this.maskDom) {
            _this.maskDom.style.left = '';
            _this.maskDom.style.width = '';
          }
        }

        var afterVisibleChange = _this.props.afterVisibleChange;
        var open = _this.state.open;
        afterVisibleChange(open);
      }
    }.bind(this);

    _this.getDefault = function (props) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.getParentAndLevelDom(props);

      if (props.getContainer || props.parent) {
        _this.container = _this.defaultGetContainer();
      }
    }.bind(this);

    _this.getCurrentDrawerSome = function () {
      var _this4 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      return !Object.keys(currentDrawer).some(function (key) {
        (0, _newArrowCheck2.default)(this, _this4);
        return currentDrawer[key];
      }.bind(this));
    }.bind(this);

    _this.getContainer = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      return _this.container;
    }.bind(this);

    _this.getParentAndLevelDom = function (props) {
      var _this5 = this;

      (0, _newArrowCheck2.default)(this, _this2);

      if (windowIsUndefined) {
        return;
      }

      var level = props.level,
          getContainer = props.getContainer;
      _this.levelDom = [];

      if (getContainer) {
        if (typeof getContainer === 'string') {
          var dom = document.querySelectorAll(getContainer)[0];
          _this.parent = dom;
        }

        if (typeof getContainer === 'function') {
          _this.parent = getContainer();
        }

        if ((0, _typeof2.default)(getContainer) === 'object' && getContainer instanceof window.HTMLElement) {
          _this.parent = getContainer;
        }
      }

      if (!getContainer && _this.container) {
        _this.parent = _this.container.parentNode;
      }

      if (level === 'all') {
        var children = Array.prototype.slice.call(_this.parent.children);
        children.forEach(function (child) {
          (0, _newArrowCheck2.default)(this, _this5);

          if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE' && child.nodeName !== 'LINK' && child !== _this.container) {
            _this.levelDom.push(child);
          }
        }.bind(this));
      } else if (level) {
        (0, _utils.dataToArray)(level).forEach(function (key) {
          var _this6 = this;

          (0, _newArrowCheck2.default)(this, _this5);
          document.querySelectorAll(key).forEach(function (item) {
            (0, _newArrowCheck2.default)(this, _this6);

            _this.levelDom.push(item);
          }.bind(this));
        }.bind(this));
      }
    }.bind(this);

    _this.setLevelDomTransform = function (open, openTransition, placementName, value) {
      var _this7 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props2 = _this.props,
          placement = _this$props2.placement,
          levelMove = _this$props2.levelMove,
          duration = _this$props2.duration,
          ease = _this$props2.ease,
          onChange = _this$props2.onChange,
          getContainer = _this$props2.getContainer,
          showMask = _this$props2.showMask;

      if (!windowIsUndefined) {
        var right = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? (0, _getScrollBarSize.default)(1) : 0;

        _this.levelDom.forEach(function (dom) {
          (0, _newArrowCheck2.default)(this, _this7);

          if (_this.isOpenChange || openTransition) {
            /* eslint no-param-reassign: "error" */
            dom.style.transition = "transform ".concat(duration, " ").concat(ease);
            (0, _utils.addEventListener)(dom, _utils.transitionEnd, _this.transitionEnd);
            var levelValue = open ? value : 0;

            if (levelMove) {
              var $levelMove = (0, _utils.transformArguments)(levelMove, {
                target: dom,
                open: open
              });
              levelValue = open ? $levelMove[0] : $levelMove[1] || 0;
            }

            var $value = typeof levelValue === 'number' ? "".concat(levelValue, "px") : levelValue;
            var placementPos = placement === 'left' || placement === 'top' ? $value : "-".concat($value);
            var mark = placement === 'left' || placement === 'top' ? '-' : '+';
            placementPos = showMask && (placement === 'left' || placement === 'right') && right ? "calc(".concat(placementPos, " ").concat(mark, " ").concat(right, "px)") : placementPos;
            dom.style.transform = levelValue ? "".concat(placementName, "(").concat(placementPos, ")") : '';
            dom.style.msTransform = levelValue ? "".concat(placementName, "(").concat(placementPos, ")") : '';
          }
        }.bind(this)); // 处理 body 滚动


        if (getContainer === 'body' && showMask) {
          var eventArray = ['touchstart'];
          var domArray = [document.body, _this.maskDom, _this.handlerDom, _this.contentDom];
          var widthTransition = "width ".concat(duration, " ").concat(ease);
          var transformTransition = "transform ".concat(duration, " ").concat(ease);

          if (open && document.body.style.overflow !== 'hidden') {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';

            if (right) {
              document.body.style.position = 'relative';
              document.body.style.width = "calc(100% - ".concat(right, "px)");
              _this.dom.style.transition = 'none';

              switch (placement) {
                case 'right':
                  _this.dom.style.transform = "translateX(-".concat(right, "px)");
                  _this.dom.style.msTransform = "translateX(-".concat(right, "px)");
                  break;

                case 'top':
                case 'bottom':
                  _this.dom.style.width = "calc(100% - ".concat(right, "px)");
                  _this.dom.style.transform = 'translateZ(0)';
                  break;

                default:
                  break;
              }

              clearTimeout(_this.timeout);
              _this.timeout = setTimeout(function () {
                (0, _newArrowCheck2.default)(this, _this7);
                _this.dom.style.transition = "".concat(transformTransition, ",").concat(widthTransition);
                _this.dom.style.width = '';
                _this.dom.style.transform = '';
                _this.dom.style.msTransform = '';
              }.bind(this));
            } // 手机禁滚


            domArray.forEach(function (item, i) {
              (0, _newArrowCheck2.default)(this, _this7);

              if (!item) {
                return;
              }

              (0, _utils.addEventListener)(item, eventArray[i] || 'touchmove', i ? _this.removeMoveHandler : _this.removeStartHandler, _this.passive);
            }.bind(this));
          } else if (_this.getCurrentDrawerSome()) {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';

            if ((_this.isOpenChange || openTransition) && right) {
              document.body.style.position = '';
              document.body.style.width = '';

              if (_utils.transitionStr) {
                document.body.style.overflowX = 'hidden';
              }

              _this.dom.style.transition = 'none';
              var heightTransition;

              switch (placement) {
                case 'right':
                  {
                    _this.dom.style.transform = "translateX(".concat(right, "px)");
                    _this.dom.style.msTransform = "translateX(".concat(right, "px)");
                    _this.dom.style.width = '100%';
                    widthTransition = "width 0s ".concat(ease, " ").concat(duration);

                    if (_this.maskDom) {
                      _this.maskDom.style.left = "-".concat(right, "px");
                      _this.maskDom.style.width = "calc(100% + ".concat(right, "px)");
                    }

                    break;
                  }

                case 'top':
                case 'bottom':
                  {
                    _this.dom.style.width = "calc(100% + ".concat(right, "px)");
                    _this.dom.style.height = '100%';
                    _this.dom.style.transform = 'translateZ(0)';
                    heightTransition = "height 0s ".concat(ease, " ").concat(duration);
                    break;
                  }

                default:
                  break;
              }

              clearTimeout(_this.timeout);
              _this.timeout = setTimeout(function () {
                (0, _newArrowCheck2.default)(this, _this7);
                _this.dom.style.transition = "".concat(transformTransition, ",").concat(heightTransition ? "".concat(heightTransition, ",") : '').concat(widthTransition);
                _this.dom.style.transform = '';
                _this.dom.style.msTransform = '';
                _this.dom.style.width = '';
                _this.dom.style.height = '';
              }.bind(this));
            }

            domArray.forEach(function (item, i) {
              (0, _newArrowCheck2.default)(this, _this7);

              if (!item) {
                return;
              }

              (0, _utils.removeEventListener)(item, eventArray[i] || 'touchmove', i ? _this.removeMoveHandler : _this.removeStartHandler, _this.passive);
            }.bind(this));
          }
        }
      }

      if (_this.isOpenChange && _this.firstEnter) {
        onChange(open);
        _this.isOpenChange = false;
      }
    }.bind(this);

    _this.getChildToRender = function (open) {
      var _classnames,
          _this8 = this;

      (0, _newArrowCheck2.default)(this, _this2);

      /* eslint-disable no-unused-vars */
      var _this$props3 = _this.props,
          $wrapperClass = _this$props3.wrapperClassName,
          className = _this$props3.className,
          children = _this$props3.children,
          style = _this$props3.style,
          width = _this$props3.width,
          height = _this$props3.height,
          defaultOpen = _this$props3.defaultOpen,
          firstEnter = _this$props3.firstEnter,
          $open = _this$props3.open,
          prefixCls = _this$props3.prefixCls,
          placement = _this$props3.placement,
          level = _this$props3.level,
          levelMove = _this$props3.levelMove,
          ease = _this$props3.ease,
          duration = _this$props3.duration,
          getContainer = _this$props3.getContainer,
          handler = _this$props3.handler,
          onChange = _this$props3.onChange,
          afterVisibleChange = _this$props3.afterVisibleChange,
          onMaskClick = _this$props3.onMaskClick,
          onHandleClick = _this$props3.onHandleClick,
          showMask = _this$props3.showMask,
          maskStyle = _this$props3.maskStyle,
          keyboard = _this$props3.keyboard,
          closeHandler = _this$props3.closeHandler,
          props = (0, _objectWithoutProperties2.default)(_this$props3, _excluded);
      /* eslint-enable no-unused-vars */

      var wrapperClassName = (0, _classnames2.default)(prefixCls, (_classnames = {}, (0, _defineProperty2.default)(_classnames, "".concat(prefixCls, "-").concat(placement), true), (0, _defineProperty2.default)(_classnames, "".concat(prefixCls, "-open"), open), (0, _defineProperty2.default)(_classnames, className, !!className), (0, _defineProperty2.default)(_classnames, 'no-mask', !showMask), _classnames));
      var isOpenChange = _this.isOpenChange;
      var isHorizontal = placement === 'left' || placement === 'right';
      var placementName = "translate".concat(isHorizontal ? 'X' : 'Y'); // 百分比与像素动画不同步，第一次打用后全用像素动画。
      // const defaultValue = !this.contentDom || !level ? '100%' : `${value}px`;

      var placementPos = placement === 'left' || placement === 'top' ? '-100%' : '100%';
      var transform = open ? '' : "".concat(placementName, "(").concat(placementPos, ")");

      if (isOpenChange === undefined || isOpenChange) {
        var contentValue = _this.contentDom ? _this.contentDom.getBoundingClientRect()[isHorizontal ? 'width' : 'height'] : 0;
        var value = (isHorizontal ? width : height) || contentValue;

        _this.setLevelDomTransform(open, false, placementName, value);
      }

      var handlerChildren = handler && /*#__PURE__*/_react.default.cloneElement(handler, {
        onClick: function onClick(e) {
          (0, _newArrowCheck2.default)(this, _this8);

          if (handler.props.onClick) {
            handler.props.onClick();
          }

          _this.onIconTouchEnd(e);
        }.bind(this),
        ref: function ref(c) {
          (0, _newArrowCheck2.default)(this, _this8);
          _this.handlerDom = c;
        }.bind(this)
      });

      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
        tabIndex: -1,
        className: wrapperClassName,
        style: style,
        ref: function (c) {
          (0, _newArrowCheck2.default)(this, _this8);
          _this.dom = c;
        }.bind(this),
        onKeyDown: open && keyboard ? _this.onKeyDown : null,
        onTransitionEnd: _this.onWrapperTransitionEnd
      }), showMask && /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefixCls, "-mask"),
        onClick: _this.onMaskTouchEnd,
        style: maskStyle,
        ref: function (c) {
          (0, _newArrowCheck2.default)(this, _this8);
          _this.maskDom = c;
        }.bind(this)
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefixCls, "-content-wrapper"),
        style: {
          transform: transform,
          msTransform: transform,
          width: (0, _utils.isNumeric)(width) ? "".concat(width, "px") : width,
          height: (0, _utils.isNumeric)(height) ? "".concat(height, "px") : height
        },
        ref: function (c) {
          (0, _newArrowCheck2.default)(this, _this8);
          _this.contentWrapper = c;
        }.bind(this)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefixCls, "-content"),
        ref: function (c) {
          (0, _newArrowCheck2.default)(this, _this8);
          _this.contentDom = c;
        }.bind(this),
        onTouchStart: open && showMask ? _this.removeStartHandler : null // 跑用例用
        ,
        onTouchMove: open && showMask ? _this.removeMoveHandler : null // 跑用例用

      }, children), closeHandler, handlerChildren));
    }.bind(this);

    _this.getOpen = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      return _this.props.open !== undefined ? _this.props.open : _this.state.open;
    }.bind(this);

    _this.getTouchParentScroll = function (root, currentTarget, differX, differY) {
      (0, _newArrowCheck2.default)(this, _this2);

      if (!currentTarget || currentTarget === document) {
        return false;
      } // root 为 drawer-content 设定了 overflow, 判断为 root 的 parent 时结束滚动；


      if (currentTarget === root.parentNode) {
        return true;
      }

      var isY = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differY);
      var isX = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differX);
      var scrollY = currentTarget.scrollHeight - currentTarget.clientHeight;
      var scrollX = currentTarget.scrollWidth - currentTarget.clientWidth;
      /**
       * <div style="height: 300px">
       *   <div style="height: 900px"></div>
       * </div>
       * 在没设定 overflow: auto 或 scroll 时，currentTarget 里获取不到 scrollTop 或 scrollLeft,
       * 预先用 scrollTo 来滚动，如果取出的值跟滚动前取出不同，则 currnetTarget 被设定了 overflow; 否则就是上面这种。
       */

      var t = currentTarget.scrollTop;
      var l = currentTarget.scrollLeft;
      currentTarget.scrollTop += 1;
      currentTarget.scrollLeft += 1;
      var currentT = currentTarget.scrollTop;
      var currentL = currentTarget.scrollLeft;
      currentTarget.scrollTop -= 1;
      currentTarget.scrollLeft -= 1;

      if (isY && (!scrollY || !(currentT - t) || scrollY && (currentTarget.scrollTop >= scrollY && differY < 0 || currentTarget.scrollTop <= 0 && differY > 0)) || isX && (!scrollX || !(currentL - l) || scrollX && (currentTarget.scrollLeft >= scrollX && differX < 0 || currentTarget.scrollLeft <= 0 && differX > 0))) {
        return _this.getTouchParentScroll(root, currentTarget.parentNode, differX, differY);
      }

      return false;
    }.bind(this);

    _this.domFocus = function (focus) {
      (0, _newArrowCheck2.default)(this, _this2);

      if (_this.dom && focus) {
        _this.dom.focus();
      }
    }.bind(this);

    _this.removeStartHandler = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      if (e.touches.length > 1) {
        return;
      }

      _this.startPos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    }.bind(this);

    _this.removeMoveHandler = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      if (e.changedTouches.length > 1) {
        return;
      }

      var currentTarget = e.currentTarget;
      var differX = e.changedTouches[0].clientX - _this.startPos.x;
      var differY = e.changedTouches[0].clientY - _this.startPos.y;

      if (currentTarget === _this.maskDom || currentTarget === _this.handlerDom || currentTarget === _this.contentDom && _this.getTouchParentScroll(currentTarget, e.target, differX, differY)) {
        e.preventDefault();
      }
    }.bind(this);

    _this.transitionEnd = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);
      (0, _utils.removeEventListener)(e.target, _utils.transitionEnd, _this.transitionEnd);
      e.target.style.transition = '';
    }.bind(this);

    _this.defaultGetContainer = function () {
      var _this9 = this;

      (0, _newArrowCheck2.default)(this, _this2);

      if (windowIsUndefined) {
        return null;
      }

      if (_this.container) return _this.container;
      var container = document.createElement('div');

      _this.parent.appendChild(container);

      if (_this.props.wrapperClassName) {
        container.className = _this.props.wrapperClassName;
      }

      var parent = _this.parent;

      _this.removeContainer = function () {
        (0, _newArrowCheck2.default)(this, _this9);
        return parent.removeChild(container);
      }.bind(this);

      return container;
    }.bind(this);

    _this.levelDom = [];
    _this.contentDom = null;
    _this.maskDom = null;
    _this.handlerDom = null;
    _this.firstEnter = _props.firstEnter; // 记录首次进入.

    _this.timeout = null;
    _this.drawerId = Number((Date.now() + Math.random()).toString().replace('.', Math.round(Math.random() * 9))).toString(16);

    var _open = _props.open !== undefined ? _props.open : !!_props.defaultOpen;

    currentDrawer[_this.drawerId] = _open;
    _this.state = {
      open: _open
    };
    return _this;
  }

  (0, _createClass2.default)(Drawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this10 = this;

      if (!windowIsUndefined) {
        var passiveSupported = false;
        window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
          get: function get() {
            (0, _newArrowCheck2.default)(this, _this10);
            passiveSupported = true;
            return null;
          }.bind(this)
        }));
        this.passive = passiveSupported ? {
          passive: false
        } : false;
      }

      var open = this.getOpen();

      if (this.props.handler || open || this.firstEnter) {
        this.getDefault(this.props);

        if (open) {
          this.isOpenChange = true;
        }

        this.forceUpdate();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this11 = this;

      var open = nextProps.open,
          placement = nextProps.placement,
          getContainer = nextProps.getContainer;

      if (open !== undefined && open !== this.props.open) {
        this.isOpenChange = true; // 没渲染 dom 时，获取默认数据;

        var getContainerBool = typeof getContainer === 'function' && typeof this.props.getContainer === 'function' ? this.props.getContainer() === getContainer() : this.props.getContainer === getContainer;

        if (!this.container || !getContainerBool) {
          this.getDefault(nextProps);
        }

        var focus = open && !this.props.open;
        this.setState({
          open: open
        }, function () {
          (0, _newArrowCheck2.default)(this, _this11);
          this.domFocus(focus);
        }.bind(this));
      }

      if (placement !== this.props.placement) {
        // test 的 bug, 有动画过场，删除 dom
        this.contentDom = null;
      }

      if (this.props.level !== nextProps.level) {
        this.getParentAndLevelDom(nextProps);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // dom 没渲染时，重走一遍。
      if (!this.firstEnter && this.container) {
        this.forceUpdate();
        this.firstEnter = true;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      delete currentDrawer[this.drawerId];
      delete this.isOpenChange;

      if (this.container) {
        if (this.state.open) {
          this.setLevelDomTransform(false, true);
        }

        document.body.style.overflow = '';
      }

      if (this.removeContainer) {
        this.removeContainer();
      }

      this.firstEnter = false;
      clearTimeout(this.timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this12 = this;

      var _this$props4 = this.props,
          getContainer = _this$props4.getContainer,
          wrapperClassName = _this$props4.wrapperClassName;
      var open = this.getOpen();
      currentDrawer[this.drawerId] = open ? this.container : open;
      var children = this.getChildToRender(this.firstEnter ? open : false);

      if (!getContainer) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: wrapperClassName,
          ref: function (c) {
            (0, _newArrowCheck2.default)(this, _this12);

            if (this.props.getContainer) {
              return;
            }

            this.container = c;
          }.bind(this)
        }, children);
      }

      if (!this.container || !open && !this.firstEnter) {
        return null;
      }

      return /*#__PURE__*/_reactDom.default.createPortal(children, this.getContainer());
    }
  }]);
  return Drawer;
}(_react.default.PureComponent);

Drawer.propTypes = {
  wrapperClassName: _propTypes.default.string,
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  style: _propTypes.default.object,
  width: _propTypes.default.any,
  height: _propTypes.default.any,
  defaultOpen: _propTypes.default.bool,
  firstEnter: _propTypes.default.bool,
  open: _propTypes.default.bool,
  prefixCls: _propTypes.default.string,
  placement: _propTypes.default.string,
  level: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  levelMove: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.func, _propTypes.default.array]),
  ease: _propTypes.default.string,
  duration: _propTypes.default.string,
  getContainer: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object, _propTypes.default.bool]),
  handler: _propTypes.default.any,
  onChange: _propTypes.default.func,
  afterVisibleChange: _propTypes.default.func,
  onMaskClick: _propTypes.default.func,
  onHandleClick: _propTypes.default.func,
  showMask: _propTypes.default.bool,
  maskStyle: _propTypes.default.object,
  keyboard: _propTypes.default.bool,
  closeHandler: _propTypes.default.node
};
Drawer.defaultProps = {
  prefixCls: 'drawer',
  placement: 'left',
  getContainer: 'body',
  level: 'all',
  duration: '.3s',
  ease: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  onChange: function onChange() {
    (0, _newArrowCheck2.default)(this, _this13);
  }.bind(void 0),
  afterVisibleChange: function afterVisibleChange() {
    (0, _newArrowCheck2.default)(this, _this13);
  }.bind(void 0),
  handler: /*#__PURE__*/_react.default.createElement("div", {
    className: "drawer-handle"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "drawer-handle-icon"
  })),
  firstEnter: false,
  showMask: true,
  maskStyle: {},
  wrapperClassName: '',
  className: '',
  keyboard: true
};
var _default = Drawer;
exports.default = _default;