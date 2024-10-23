"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroyAll = exports.openModal = exports.open = exports.confirm = exports.alert = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../../components/Button"));

var _ThemeProvider = _interopRequireDefault(require("../../components/ThemeProvider"));

var _LocaleProvider = _interopRequireDefault(require("../../components/LocaleProvider"));

var _runtime = require("../../components/ThemeProvider/runtime");

var _runtime2 = require("../../components/LocaleProvider/runtime");

var _warning = _interopRequireDefault(require("../../utils/warning"));

var _Modal = _interopRequireDefault(require("./Modal"));

var _excluded = ["reportUpdate"],
    _excluded2 = ["onOk", "onClose"],
    _excluded3 = ["onOk", "onClose"],
    _excluded4 = ["onOk", "onClose"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var methodWarning = function methodWarning() {
  (0, _newArrowCheck2.default)(this, _this);
  return (0, _warning.default)("You're using a method to call a Modal, this may cause a lot of problems.");
}.bind(void 0);

var destroyWarning = function destroyWarning() {
  (0, _newArrowCheck2.default)(this, _this);
  return (0, _warning.default)("Wrong name of destory, please use destroy to instead");
}.bind(void 0);

var i = 0;

var getCallUID = function getCallUID() {
  (0, _newArrowCheck2.default)(this, _this);
  return '_modal_id_' + i++;
}.bind(void 0);

var queueMap = {};

var cleanModal = function cleanModal(id) {
  (0, _newArrowCheck2.default)(this, _this);
  var modal = queueMap[id];

  if (modal && modal.destroy) {
    modal.destroy();
  }

  delete queueMap[id];
}.bind(void 0);

var addModal = function addModal(modal) {
  (0, _newArrowCheck2.default)(this, _this);
  var id = getCallUID();
  queueMap[id] = modal;
  return id;
}.bind(void 0);

var cleanAllModal = function cleanAllModal() {
  (0, _newArrowCheck2.default)(this, _this);
  var remainModalCount = Object.keys(queueMap).length;

  if (remainModalCount) {
    Object.keys(queueMap).forEach(cleanModal);
    return remainModalCount;
  }
}.bind(void 0);

exports.destroyAll = cleanAllModal;

var ContextWrap = function ContextWrap(_ref) {
  (0, _newArrowCheck2.default)(this, _this);
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_ThemeProvider.default, {
    theme: (0, _runtime.getRuntimeTheme)()
  }, /*#__PURE__*/_react.default.createElement(_LocaleProvider.default, {
    locale: (0, _runtime2.getRuntimeLocale)()
  }, children));
}.bind(void 0);

ContextWrap.propTypes = {
  children: _propTypes.default.node
};

var ModalWrap = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(ModalWrap, _PureComponent);

  var _super = _createSuper(ModalWrap);

  function ModalWrap() {
    var _this3 = this;

    var _this2;

    (0, _classCallCheck2.default)(this, ModalWrap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));

    _this2.update = function (props) {
      (0, _newArrowCheck2.default)(this, _this3);

      _this2.setState(_objectSpread({}, props));
    }.bind(this);

    return _this2;
  }

  (0, _createClass2.default)(ModalWrap, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.reportUpdate(this.update);
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
          reportUpdate = _this$props.reportUpdate,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement(ContextWrap, null, /*#__PURE__*/_react.default.createElement(_Modal.default, (0, _extends2.default)({}, rest, {
        visible: true
      }, this.state)));
    }
  }]);
  return ModalWrap;
}(_react.PureComponent);

ModalWrap.propTypes = {
  reportUpdate: _propTypes.default.func
};

var pop = function pop(props) {
  var _this4 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var container = document.createElement('div');
  document.body.appendChild(container);

  var destroy = function destroy() {
    (0, _newArrowCheck2.default)(this, _this4);

    var result = _reactDom.default.unmountComponentAtNode(container);

    if (result && container.parentElement) {
      container.parentElement.removeChild(container);
    }
  }.bind(this);

  var update = null;

  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(ModalWrap, (0, _extends2.default)({}, props, {
    reportUpdate: function (_update) {
      (0, _newArrowCheck2.default)(this, _this4);
      return update = _update;
    }.bind(this)
  })), container);

  methodWarning();
  var callID = addModal({
    destroy: destroy
  });
  return {
    destory: function destory() {
      (0, _newArrowCheck2.default)(this, _this4);
      cleanModal(callID);
      destroyWarning();
    }.bind(this),
    destroy: function destroy() {
      (0, _newArrowCheck2.default)(this, _this4);
      return cleanModal(callID);
    }.bind(this),
    update: update
  };
}.bind(void 0);

var openModal = function openModal(modal) {
  var _this5 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var container = document.createElement('div');
  document.body.appendChild(container);

  var destroy = function destroy() {
    (0, _newArrowCheck2.default)(this, _this5);

    var result = _reactDom.default.unmountComponentAtNode(container);

    if (result && container.parentElement) {
      container.parentElement.removeChild(container);
    }
  }.bind(this);

  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(ContextWrap, null, modal), container);

  methodWarning();
  var callID = addModal({
    destroy: destroy
  });
  return {
    destroy: function destroy() {
      (0, _newArrowCheck2.default)(this, _this5);
      return cleanModal(callID);
    }.bind(this)
  };
}.bind(void 0);

exports.openModal = openModal;

var isPromise = function isPromise(promiseLike) {
  (0, _newArrowCheck2.default)(this, _this);
  return promiseLike && promiseLike.then && (0, _isFunction2.default)(promiseLike.then);
}.bind(void 0);

var promiseJudgeHandle = function promiseJudgeHandle(promiseLike, handle) {
  var _this6 = this;

  (0, _newArrowCheck2.default)(this, _this);

  if (isPromise(promiseLike)) {
    promiseLike.then(function (res) {
      (0, _newArrowCheck2.default)(this, _this6);
      handle();
      return res;
    }.bind(this));
  } else {
    handle();
  }
}.bind(void 0);

var alert = function alert(_ref2, content) {
  var _this7 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _ref2$onOk = _ref2.onOk,
      onOk = _ref2$onOk === void 0 ? function () {
    (0, _newArrowCheck2.default)(this, _this7);
  }.bind(this) : _ref2$onOk,
      _ref2$onClose = _ref2.onClose,
      onClose = _ref2$onClose === void 0 ? function () {
    (0, _newArrowCheck2.default)(this, _this7);
  }.bind(this) : _ref2$onClose,
      rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);

  var _onClose = function _onClose() {
    var _this8 = this;

    (0, _newArrowCheck2.default)(this, _this7);
    return promiseJudgeHandle(onClose(), function () {
      (0, _newArrowCheck2.default)(this, _this8);
      return modal.destroy();
    }.bind(this));
  }.bind(this);

  var _onOk = function _onOk() {
    var _this9 = this;

    (0, _newArrowCheck2.default)(this, _this7);
    return promiseJudgeHandle(onOk(), function () {
      (0, _newArrowCheck2.default)(this, _this9);
      return modal.destroy();
    }.bind(this));
  }.bind(this);

  var AlertFooter = function AlertFooter(_ref3) {
    (0, _newArrowCheck2.default)(this, _this7);
    var locale = _ref3.locale;
    return /*#__PURE__*/_react.default.createElement(_Button.default, {
      size: "lg",
      styleType: "primary",
      onClick: _onOk
    }, locale.confirm);
  }.bind(this);

  AlertFooter.propTypes = {
    locale: _propTypes.default.object.isRequired
  };
  var options = {
    children: content,
    maskClosable: false,
    size: 'sm',
    title: 'Alert',
    onClose: _onClose,
    footer: AlertFooter
  };
  var modal = pop(_objectSpread(_objectSpread({}, options), rest));
  return modal;
}.bind(void 0);

exports.alert = alert;

var confirm = function confirm(_ref4, content) {
  var _this10 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _ref4$onOk = _ref4.onOk,
      onOk = _ref4$onOk === void 0 ? function () {
    (0, _newArrowCheck2.default)(this, _this10);
  }.bind(this) : _ref4$onOk,
      _ref4$onClose = _ref4.onClose,
      onClose = _ref4$onClose === void 0 ? function () {
    (0, _newArrowCheck2.default)(this, _this10);
  }.bind(this) : _ref4$onClose,
      rest = (0, _objectWithoutProperties2.default)(_ref4, _excluded3);

  var _onClose = function _onClose() {
    var _this11 = this;

    (0, _newArrowCheck2.default)(this, _this10);
    return promiseJudgeHandle(onClose(), function () {
      (0, _newArrowCheck2.default)(this, _this11);
      return modal.destroy();
    }.bind(this));
  }.bind(this);

  var _onOk = function _onOk() {
    var _this12 = this;

    (0, _newArrowCheck2.default)(this, _this10);
    return promiseJudgeHandle(onOk(), function () {
      (0, _newArrowCheck2.default)(this, _this12);
      return modal.destroy();
    }.bind(this));
  }.bind(this);

  var options = {
    children: content,
    maskClosable: false,
    size: 'sm',
    title: 'Confirm',
    onClose: _onClose,
    onOk: _onOk
  };
  var modal = pop(_objectSpread(_objectSpread({}, options), rest));
  return modal;
}.bind(void 0);

exports.confirm = confirm;

var open = function open(_ref5, content) {
  var _this13 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _ref5$onOk = _ref5.onOk,
      onOk = _ref5$onOk === void 0 ? function () {
    (0, _newArrowCheck2.default)(this, _this13);
  }.bind(this) : _ref5$onOk,
      _ref5$onClose = _ref5.onClose,
      onClose = _ref5$onClose === void 0 ? function () {
    (0, _newArrowCheck2.default)(this, _this13);
  }.bind(this) : _ref5$onClose,
      rest = (0, _objectWithoutProperties2.default)(_ref5, _excluded4);

  var _onClose = function _onClose() {
    var _this14 = this;

    (0, _newArrowCheck2.default)(this, _this13);
    return promiseJudgeHandle(onClose(), function () {
      (0, _newArrowCheck2.default)(this, _this14);
      return modal.destroy();
    }.bind(this));
  }.bind(this);

  var _onOk = function _onOk() {
    var _this15 = this;

    (0, _newArrowCheck2.default)(this, _this13);
    return promiseJudgeHandle(onOk(), function () {
      (0, _newArrowCheck2.default)(this, _this15);
      return modal.destroy();
    }.bind(this));
  }.bind(this);

  var options = _objectSpread({
    children: content,
    onClose: _onClose,
    onOk: _onOk
  }, rest);

  var modal = pop(options);
  return modal;
}.bind(void 0);

exports.open = open;