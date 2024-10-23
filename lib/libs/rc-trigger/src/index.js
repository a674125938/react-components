"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = require("react-dom");

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _contains = _interopRequireDefault(require("rc-util/lib/Dom/contains"));

var _addEventListener = _interopRequireDefault(require("rc-util/lib/Dom/addEventListener"));

var _ContainerRender = _interopRequireDefault(require("rc-util/lib/ContainerRender"));

var _Portal = _interopRequireDefault(require("rc-util/lib/Portal"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var _Popup = _interopRequireDefault(require("./Popup"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];
var IS_REACT_16 = !!_reactDom.createPortal;
var contextTypes = {
  rcTrigger: _propTypes.default.shape({
    onPopupMouseDown: _propTypes.default.func
  })
};

var Trigger = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Trigger, _React$Component);

  var _super = _createSuper(Trigger);

  function Trigger(_props) {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, Trigger);
    _this = _super.call(this, _props);
    _this.state = {};

    _this.onMouseEnter = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);
      var mouseEnterDelay = _this.props.mouseEnterDelay;

      _this.fireEvents('onMouseEnter', e);

      _this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
    }.bind(this);

    _this.onMouseMove = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.fireEvents('onMouseMove', e);

      _this.setPoint(e);
    }.bind(this);

    _this.onMouseLeave = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.fireEvents('onMouseLeave', e);

      _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
    }.bind(this);

    _this.onPopupMouseEnter = function () {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.clearDelayTimer();
    }.bind(this);

    _this.onPopupMouseLeave = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      // https://github.com/react-component/trigger/pull/13
      // react bug?
      if (e.relatedTarget && !e.relatedTarget.setTimeout && _this._component && _this._component.getPopupDomNode && (0, _contains.default)(_this._component.getPopupDomNode(), e.relatedTarget)) {
        return;
      }

      _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
    }.bind(this);

    _this.onFocus = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.fireEvents('onFocus', e); // incase focusin and focusout


      _this.clearDelayTimer();

      if (_this.isFocusToShow()) {
        _this.focusTime = Date.now();

        _this.delaySetPopupVisible(true, _this.props.focusDelay);
      }
    }.bind(this);

    _this.onMouseDown = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.fireEvents('onMouseDown', e);

      _this.preClickTime = Date.now();
    }.bind(this);

    _this.onTouchStart = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.fireEvents('onTouchStart', e);

      _this.preTouchTime = Date.now();
    }.bind(this);

    _this.onBlur = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.fireEvents('onBlur', e);

      _this.clearDelayTimer();

      if (_this.isBlurToHide()) {
        _this.delaySetPopupVisible(false, _this.props.blurDelay);
      }
    }.bind(this);

    _this.onContextMenu = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);
      e.preventDefault();

      _this.fireEvents('onContextMenu', e);

      _this.setPopupVisible(true, e);
    }.bind(this);

    _this.onContextMenuClose = function () {
      (0, _newArrowCheck2.default)(this, _this2);

      if (_this.isContextMenuToShow()) {
        _this.close();
      }
    }.bind(this);

    _this.onClick = function (event) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.fireEvents('onClick', event); // focus will trigger click


      if (_this.focusTime) {
        var preTime;

        if (_this.preClickTime && _this.preTouchTime) {
          preTime = Math.min(_this.preClickTime, _this.preTouchTime);
        } else if (_this.preClickTime) {
          preTime = _this.preClickTime;
        } else if (_this.preTouchTime) {
          preTime = _this.preTouchTime;
        }

        if (Math.abs(preTime - _this.focusTime) < 20) {
          return;
        }

        _this.focusTime = 0;
      }

      _this.preClickTime = 0;
      _this.preTouchTime = 0; // Only prevent default when all the action is click.
      // https://github.com/ant-design/ant-design/issues/17043
      // https://github.com/ant-design/ant-design/issues/17291

      if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) {
        event.preventDefault();
      }

      var nextVisible = !_this.state.popupVisible;

      if (_this.isClickToHide() && !nextVisible || nextVisible && _this.isClickToShow()) {
        _this.setPopupVisible(!_this.state.popupVisible, event);
      }
    }.bind(this);

    _this.onPopupMouseDown = function () {
      var _this3 = this;

      var _this$context$rcTrigg = _this.context.rcTrigger,
          rcTrigger = _this$context$rcTrigg === void 0 ? {} : _this$context$rcTrigg;
      _this.hasPopupMouseDown = true;
      clearTimeout(_this.mouseDownTimeout);
      _this.mouseDownTimeout = setTimeout(function () {
        (0, _newArrowCheck2.default)(this, _this3);
        _this.hasPopupMouseDown = false;
      }.bind(this), 0);

      if (rcTrigger.onPopupMouseDown) {
        rcTrigger.onPopupMouseDown.apply(rcTrigger, arguments);
      }
    };

    _this.onDocumentClick = function (event) {
      (0, _newArrowCheck2.default)(this, _this2);

      if (_this.props.mask && !_this.props.maskClosable) {
        return;
      }

      var target = event.target;
      var root = (0, _reactDom.findDOMNode)((0, _assertThisInitialized2.default)(_this));

      if (!(0, _contains.default)(root, target) && !_this.hasPopupMouseDown) {
        _this.close();
      }
    }.bind(this);

    _this.getRootDomNode = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      return (0, _reactDom.findDOMNode)((0, _assertThisInitialized2.default)(_this));
    }.bind(this);

    _this.getPopupClassNameFromAlign = function (align) {
      (0, _newArrowCheck2.default)(this, _this2);
      var className = [];
      var _this$props = _this.props,
          popupPlacement = _this$props.popupPlacement,
          builtinPlacements = _this$props.builtinPlacements,
          prefixCls = _this$props.prefixCls,
          alignPoint = _this$props.alignPoint,
          getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;

      if (popupPlacement && builtinPlacements) {
        className.push((0, _utils.getAlignPopupClassName)(builtinPlacements, prefixCls, align, alignPoint));
      }

      if (getPopupClassNameFromAlign) {
        className.push(getPopupClassNameFromAlign(align));
      }

      return className.join(' ');
    }.bind(this);

    _this.getComponent = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props2 = _this.props,
          prefixCls = _this$props2.prefixCls,
          destroyPopupOnHide = _this$props2.destroyPopupOnHide,
          popupClassName = _this$props2.popupClassName,
          action = _this$props2.action,
          onPopupAlign = _this$props2.onPopupAlign,
          popupAnimation = _this$props2.popupAnimation,
          popupTransitionName = _this$props2.popupTransitionName,
          popupStyle = _this$props2.popupStyle,
          mask = _this$props2.mask,
          maskAnimation = _this$props2.maskAnimation,
          maskTransitionName = _this$props2.maskTransitionName,
          zIndex = _this$props2.zIndex,
          popup = _this$props2.popup,
          stretch = _this$props2.stretch,
          alignPoint = _this$props2.alignPoint;
      var _this$state = _this.state,
          popupVisible = _this$state.popupVisible,
          point = _this$state.point;

      var align = _this.getPopupAlign();

      var mouseProps = {};

      if (_this.isMouseEnterToShow()) {
        mouseProps.onMouseEnter = _this.onPopupMouseEnter;
      }

      if (_this.isMouseLeaveToHide()) {
        mouseProps.onMouseLeave = _this.onPopupMouseLeave;
      }

      mouseProps.onMouseDown = _this.onPopupMouseDown;
      mouseProps.onTouchStart = _this.onPopupMouseDown;
      return /*#__PURE__*/_react.default.createElement(_Popup.default, (0, _extends2.default)({
        prefixCls: prefixCls,
        destroyPopupOnHide: destroyPopupOnHide,
        visible: popupVisible,
        point: alignPoint && point,
        className: popupClassName,
        action: action,
        align: align,
        onAlign: onPopupAlign,
        animation: popupAnimation,
        getClassNameFromAlign: _this.getPopupClassNameFromAlign
      }, mouseProps, {
        stretch: stretch,
        getRootDomNode: _this.getRootDomNode,
        style: popupStyle,
        mask: mask,
        zIndex: zIndex,
        transitionName: popupTransitionName,
        maskAnimation: maskAnimation,
        maskTransitionName: maskTransitionName,
        ref: _this.savePopup
      }), typeof popup === 'function' ? popup() : popup);
    }.bind(this);

    _this.getContainer = function () {
      (0, _newArrowCheck2.default)(this, _this2);

      var _assertThisInitialize = (0, _assertThisInitialized2.default)(_this),
          props = _assertThisInitialize.props;

      var popupContainer = document.createElement('div'); // Make sure default popup container will never cause scrollbar appearing
      // https://github.com/react-component/trigger/issues/41

      popupContainer.style.position = 'absolute';
      popupContainer.style.top = '0';
      popupContainer.style.left = '0';
      popupContainer.style.width = '100%';
      var mountNode = props.getPopupContainer ? props.getPopupContainer((0, _reactDom.findDOMNode)((0, _assertThisInitialized2.default)(_this))) : props.getDocument().body;
      mountNode.appendChild(popupContainer);
      return popupContainer;
    }.bind(this);

    _this.setPoint = function (point) {
      (0, _newArrowCheck2.default)(this, _this2);
      var alignPoint = _this.props.alignPoint;
      if (!alignPoint || !point) return;

      _this.setState({
        point: {
          pageX: point.pageX,
          pageY: point.pageY
        }
      });
    }.bind(this);

    _this.handlePortalUpdate = function () {
      (0, _newArrowCheck2.default)(this, _this2);

      if (_this.state.prevPopupVisible !== _this.state.popupVisible) {
        _this.props.afterPopupVisibleChange(_this.state.popupVisible);
      }
    }.bind(this);

    _this.savePopup = function (node) {
      (0, _newArrowCheck2.default)(this, _this2);
      _this._component = node;
    }.bind(this);

    var _popupVisible;

    if ('popupVisible' in _props) {
      _popupVisible = !!_props.popupVisible;
    } else {
      _popupVisible = !!_props.defaultPopupVisible;
    }

    _this.state = {
      prevPopupVisible: _popupVisible,
      popupVisible: _popupVisible
    };
    ALL_HANDLERS.forEach(function (h) {
      var _this4 = this;

      (0, _newArrowCheck2.default)(this, _this2);

      _this["fire".concat(h)] = function (e) {
        (0, _newArrowCheck2.default)(this, _this4);

        _this.fireEvents(h, e);
      }.bind(this);
    }.bind(this));
    return _this;
  }

  (0, _createClass2.default)(Trigger, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        rcTrigger: {
          onPopupMouseDown: this.onPopupMouseDown
        }
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.componentDidUpdate({}, {
        popupVisible: this.state.popupVisible
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      var _this5 = this;

      var props = this.props;
      var state = this.state;

      var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
        (0, _newArrowCheck2.default)(this, _this5);

        if (prevState.popupVisible !== state.popupVisible) {
          props.afterPopupVisibleChange(state.popupVisible);
        }
      }.bind(this);

      if (!IS_REACT_16) {
        this.renderComponent(null, triggerAfterPopupVisibleChange);
      } // We must listen to `mousedown` or `touchstart`, edge case:
      // https://github.com/ant-design/ant-design/issues/5804
      // https://github.com/react-component/calendar/issues/250
      // https://github.com/react-component/trigger/issues/50


      if (state.popupVisible) {
        var currentDocument;

        if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
          currentDocument = props.getDocument();
          this.clickOutsideHandler = (0, _addEventListener.default)(currentDocument, 'mousedown', this.onDocumentClick);
        } // always hide on mobile


        if (!this.touchOutsideHandler) {
          currentDocument = currentDocument || props.getDocument();
          this.touchOutsideHandler = (0, _addEventListener.default)(currentDocument, 'touchstart', this.onDocumentClick);
        } // close popup when trigger type contains 'onContextMenu' and document is scrolling.


        if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
          currentDocument = currentDocument || props.getDocument();
          this.contextMenuOutsideHandler1 = (0, _addEventListener.default)(currentDocument, 'scroll', this.onContextMenuClose);
        } // close popup when trigger type contains 'onContextMenu' and window is blur.


        if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
          this.contextMenuOutsideHandler2 = (0, _addEventListener.default)(window, 'blur', this.onContextMenuClose);
        }

        return;
      }

      this.clearOutsideHandler();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearDelayTimer();
      this.clearOutsideHandler();
      clearTimeout(this.mouseDownTimeout);
    }
  }, {
    key: "getPopupDomNode",
    value: function getPopupDomNode() {
      // for test
      if (this._component && this._component.getPopupDomNode) {
        return this._component.getPopupDomNode();
      }

      return null;
    }
  }, {
    key: "getPopupAlign",
    value: function getPopupAlign() {
      var props = this.props;
      var popupPlacement = props.popupPlacement,
          popupAlign = props.popupAlign,
          builtinPlacements = props.builtinPlacements;

      if (popupPlacement && builtinPlacements) {
        return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
      }

      return popupAlign;
    }
  }, {
    key: "setPopupVisible",
    value:
    /**
     * @param popupVisible    Show or not the popup element
     * @param event           SyntheticEvent, used for `pointAlign`
     */
    function setPopupVisible(popupVisible, event) {
      var alignPoint = this.props.alignPoint;
      var prevPopupVisible = this.state.popupVisible;
      this.clearDelayTimer();

      if (prevPopupVisible !== popupVisible) {
        if (!('popupVisible' in this.props)) {
          this.setState({
            popupVisible: popupVisible,
            prevPopupVisible: prevPopupVisible
          });
        }

        this.props.onPopupVisibleChange(popupVisible);
      } // Always record the point position since mouseEnterDelay will delay the show


      if (alignPoint && event) {
        this.setPoint(event);
      }
    }
  }, {
    key: "delaySetPopupVisible",
    value: function delaySetPopupVisible(visible, delayS, event) {
      var _this6 = this;

      var delay = delayS * 1000;
      this.clearDelayTimer();

      if (delay) {
        var point = event ? {
          pageX: event.pageX,
          pageY: event.pageY
        } : null;
        this.delayTimer = setTimeout(function () {
          (0, _newArrowCheck2.default)(this, _this6);
          this.setPopupVisible(visible, point);
          this.clearDelayTimer();
        }.bind(this), delay);
      } else {
        this.setPopupVisible(visible, event);
      }
    }
  }, {
    key: "clearDelayTimer",
    value: function clearDelayTimer() {
      if (this.delayTimer) {
        clearTimeout(this.delayTimer);
        this.delayTimer = null;
      }
    }
  }, {
    key: "clearOutsideHandler",
    value: function clearOutsideHandler() {
      if (this.clickOutsideHandler) {
        this.clickOutsideHandler.remove();
        this.clickOutsideHandler = null;
      }

      if (this.contextMenuOutsideHandler1) {
        this.contextMenuOutsideHandler1.remove();
        this.contextMenuOutsideHandler1 = null;
      }

      if (this.contextMenuOutsideHandler2) {
        this.contextMenuOutsideHandler2.remove();
        this.contextMenuOutsideHandler2 = null;
      }

      if (this.touchOutsideHandler) {
        this.touchOutsideHandler.remove();
        this.touchOutsideHandler = null;
      }
    }
  }, {
    key: "createTwoChains",
    value: function createTwoChains(event) {
      var childPros = this.props.children.props;
      var props = this.props;

      if (childPros[event] && props[event]) {
        return this["fire".concat(event)];
      }

      return childPros[event] || props[event];
    }
  }, {
    key: "isClickToShow",
    value: function isClickToShow() {
      var _this$props3 = this.props,
          action = _this$props3.action,
          showAction = _this$props3.showAction;
      return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
    }
  }, {
    key: "isContextMenuToShow",
    value: function isContextMenuToShow() {
      var _this$props4 = this.props,
          action = _this$props4.action,
          showAction = _this$props4.showAction;
      return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
    }
  }, {
    key: "isClickToHide",
    value: function isClickToHide() {
      var _this$props5 = this.props,
          action = _this$props5.action,
          hideAction = _this$props5.hideAction;
      return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
    }
  }, {
    key: "isMouseEnterToShow",
    value: function isMouseEnterToShow() {
      var _this$props6 = this.props,
          action = _this$props6.action,
          showAction = _this$props6.showAction;
      return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
    }
  }, {
    key: "isMouseLeaveToHide",
    value: function isMouseLeaveToHide() {
      var _this$props7 = this.props,
          action = _this$props7.action,
          hideAction = _this$props7.hideAction;
      return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
    }
  }, {
    key: "isFocusToShow",
    value: function isFocusToShow() {
      var _this$props8 = this.props,
          action = _this$props8.action,
          showAction = _this$props8.showAction;
      return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
    }
  }, {
    key: "isBlurToHide",
    value: function isBlurToHide() {
      var _this$props9 = this.props,
          action = _this$props9.action,
          hideAction = _this$props9.hideAction;
      return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
    }
  }, {
    key: "forcePopupAlign",
    value: function forcePopupAlign() {
      if (this.state.popupVisible && this._component && this._component.alignInstance) {
        this._component.alignInstance.forceAlign();
      }
    }
  }, {
    key: "fireEvents",
    value: function fireEvents(type, e) {
      var childCallback = this.props.children.props[type];

      if (childCallback) {
        childCallback(e);
      }

      var callback = this.props[type];

      if (callback) {
        callback(e);
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.setPopupVisible(false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var popupVisible = this.state.popupVisible;
      var _this$props10 = this.props,
          children = _this$props10.children,
          forceRender = _this$props10.forceRender,
          alignPoint = _this$props10.alignPoint,
          className = _this$props10.className;

      var child = _react.default.Children.only(children);

      var newChildProps = {
        key: 'trigger'
      };

      if (this.isContextMenuToShow()) {
        newChildProps.onContextMenu = this.onContextMenu;
      } else {
        newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
      }

      if (this.isClickToHide() || this.isClickToShow()) {
        newChildProps.onClick = this.onClick;
        newChildProps.onMouseDown = this.onMouseDown;
        newChildProps.onTouchStart = this.onTouchStart;
      } else {
        newChildProps.onClick = this.createTwoChains('onClick');
        newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
        newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
      }

      if (this.isMouseEnterToShow()) {
        newChildProps.onMouseEnter = this.onMouseEnter;

        if (alignPoint) {
          newChildProps.onMouseMove = this.onMouseMove;
        }
      } else {
        newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
      }

      if (this.isMouseLeaveToHide()) {
        newChildProps.onMouseLeave = this.onMouseLeave;
      } else {
        newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
      }

      if (this.isFocusToShow() || this.isBlurToHide()) {
        newChildProps.onFocus = this.onFocus;
        newChildProps.onBlur = this.onBlur;
      } else {
        newChildProps.onFocus = this.createTwoChains('onFocus');
        newChildProps.onBlur = this.createTwoChains('onBlur');
      }

      var childrenClassName = (0, _classnames.default)(child && child.props && child.props.className, className);

      if (childrenClassName) {
        newChildProps.className = childrenClassName;
      }

      var trigger = /*#__PURE__*/_react.default.cloneElement(child, newChildProps);

      if (!IS_REACT_16) {
        return /*#__PURE__*/_react.default.createElement(_ContainerRender.default, {
          parent: this,
          visible: popupVisible,
          autoMount: false,
          forceRender: forceRender,
          getComponent: this.getComponent,
          getContainer: this.getContainer
        }, function (_ref) {
          (0, _newArrowCheck2.default)(this, _this7);
          var renderComponent = _ref.renderComponent;
          this.renderComponent = renderComponent;
          return trigger;
        }.bind(this));
      }

      var portal; // prevent unmounting after it's rendered

      if (popupVisible || this._component || forceRender) {
        portal = /*#__PURE__*/_react.default.createElement(_Portal.default, {
          key: "portal",
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate
        }, this.getComponent());
      }

      return [trigger, portal];
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, prevState) {
      var popupVisible = _ref2.popupVisible;
      var newState = {};

      if (popupVisible !== undefined && prevState.popupVisible !== popupVisible) {
        newState.popupVisible = popupVisible;
        newState.prevPopupVisible = prevState.popupVisible;
      }

      return newState;
    }
  }]);
  return Trigger;
}(_react.default.Component);

Trigger.propTypes = {
  children: _propTypes.default.any,
  action: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  showAction: _propTypes.default.any,
  hideAction: _propTypes.default.any,
  getPopupClassNameFromAlign: _propTypes.default.any,
  onPopupVisibleChange: _propTypes.default.func,
  afterPopupVisibleChange: _propTypes.default.func,
  popup: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]).isRequired,
  popupStyle: _propTypes.default.object,
  prefixCls: _propTypes.default.string,
  popupClassName: _propTypes.default.string,
  className: _propTypes.default.string,
  popupPlacement: _propTypes.default.string,
  builtinPlacements: _propTypes.default.object,
  popupTransitionName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  popupAnimation: _propTypes.default.any,
  mouseEnterDelay: _propTypes.default.number,
  mouseLeaveDelay: _propTypes.default.number,
  zIndex: _propTypes.default.number,
  focusDelay: _propTypes.default.number,
  blurDelay: _propTypes.default.number,
  getPopupContainer: _propTypes.default.func,
  getDocument: _propTypes.default.func,
  forceRender: _propTypes.default.bool,
  destroyPopupOnHide: _propTypes.default.bool,
  mask: _propTypes.default.bool,
  maskClosable: _propTypes.default.bool,
  onPopupAlign: _propTypes.default.func,
  popupAlign: _propTypes.default.object,
  popupVisible: _propTypes.default.bool,
  defaultPopupVisible: _propTypes.default.bool,
  maskTransitionName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  maskAnimation: _propTypes.default.string,
  stretch: _propTypes.default.string,
  alignPoint: _propTypes.default.bool // Maybe we can support user pass position in the future

};
Trigger.contextTypes = contextTypes;
Trigger.childContextTypes = contextTypes;
Trigger.defaultProps = {
  prefixCls: 'rc-trigger-popup',
  getPopupClassNameFromAlign: returnEmptyString,
  getDocument: returnDocument,
  onPopupVisibleChange: noop,
  afterPopupVisibleChange: noop,
  onPopupAlign: noop,
  popupClassName: '',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  focusDelay: 0,
  blurDelay: 0.15,
  popupStyle: {},
  destroyPopupOnHide: false,
  popupAlign: {},
  defaultPopupVisible: false,
  mask: false,
  maskClosable: true,
  action: [],
  showAction: [],
  hideAction: []
};
(0, _reactLifecyclesCompat.polyfill)(Trigger);
var _default = Trigger;
exports.default = _default;