"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.popup = exports.loading = exports.error = exports.warning = exports.message = exports.info = exports.success = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ThemeProvider = _interopRequireDefault(require("../../components/ThemeProvider"));

var _LocaleProvider = _interopRequireDefault(require("../../components/LocaleProvider"));

var _runtime = require("../../components/ThemeProvider/runtime");

var _runtime2 = require("../../components/LocaleProvider/runtime");

var _Message = _interopRequireDefault(require("./Message"));

var _MessageContainer = _interopRequireDefault(require("./MessageContainer"));

var _this = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var config = {
  duration: 4500,
  getContainer: function getContainer() {
    (0, _newArrowCheck2.default)(this, _this);
    return document.body;
  }.bind(void 0),
  top: 20
};
var messageContainerDom = document.createElement('div');
var mainContainerDom = config.getContainer();
var containerRef;

function MessageRefComponent() {
  var _this2 = this;

  var myRef = _react.default.useRef(null);

  _react.default.useEffect(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    containerRef = myRef.current;
  }.bind(this), [myRef.current]);

  return /*#__PURE__*/_react.default.createElement(_MessageContainer.default, {
    ref: function (ref) {
      (0, _newArrowCheck2.default)(this, _this2);
      return myRef.current = ref;
    }.bind(this),
    id: "uc-fe-message-content-wrap",
    top: config.top
  });
}

mainContainerDom.appendChild(messageContainerDom);

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(MessageRefComponent, null), messageContainerDom);

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

var popupMessage = function popupMessage(message) {
  var _this3 = this;

  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config.duration;
  var onClose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    (0, _newArrowCheck2.default)(this, _this3);
  }.bind(this);

  if (!containerRef) {
    console.error("Error: containerRef is not ready , please check");
    return;
  }

  var messageUid = containerRef.appendMessage( /*#__PURE__*/_react.default.createElement(ContextWrap, null, message));

  var destroy = function destroy() {
    (0, _newArrowCheck2.default)(this, _this3);
    containerRef.removeMessage(messageUid) && onClose();
  }.bind(this);

  if (duration) {
    setTimeout(function () {
      (0, _newArrowCheck2.default)(this, _this3);
      destroy();
    }.bind(this), duration);
  }

  return {
    destory: function destory() {
      (0, _newArrowCheck2.default)(this, _this3);
      console.error("Warning: wrong name of destory, please use destroy to instead");
      destroy();
    }.bind(this),
    destroy: destroy
  };
};

var showMessage = function showMessage(styleType, content) {
  var _this4 = this;

  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : config.duration;
  var onClose = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
    (0, _newArrowCheck2.default)(this, _this4);
  }.bind(this);
  var option = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var zIndex = option.zIndex,
      style = option.style,
      className = option.className;
  var props = {
    children: content
  };

  var newStyle = _objectSpread({}, style);

  if ('zIndex' in option) {
    newStyle.zIndex = zIndex;
  }

  if (! /*#__PURE__*/_react.default.isValidElement(content) && Object.prototype.toString.call(content) === '[object Object]') {
    props = content;
  }

  var destroy = function destroy() {
    (0, _newArrowCheck2.default)(this, _this4);
  }.bind(this);

  var message = /*#__PURE__*/_react.default.createElement(_Message.default, (0, _extends2.default)({
    styleType: styleType,
    style: newStyle,
    className: className
  }, props, {
    onClose: function () {
      (0, _newArrowCheck2.default)(this, _this4);
      return destroy();
    }.bind(this)
  }));

  var instance = popupMessage(message, duration, onClose, option);
  destroy = instance.destroy;
  return instance;
};

var message = function message() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return showMessage.apply(void 0, ['default'].concat(args));
};

exports.message = message;

var info = function info() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return showMessage.apply(void 0, ['default'].concat(args));
};

exports.info = info;

var success = function success() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return showMessage.apply(void 0, ['success'].concat(args));
};

exports.success = success;

var warning = function warning() {
  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  return showMessage.apply(void 0, ['warning'].concat(args));
};

exports.warning = warning;

var error = function error() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  return showMessage.apply(void 0, ['error'].concat(args));
};

exports.error = error;

var loading = function loading() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  return showMessage.apply(void 0, ['loading'].concat(args));
};

exports.loading = loading;

var popup = function popup() {
  return popupMessage.apply(void 0, arguments);
};

exports.popup = popup;

var changeConfig = function changeConfig() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if ('duration' in options) {
    config.duration = options.duration;
  }

  if ('top' in options) {
    config.top = options.top;
    containerRef && containerRef.setTop(options.top);
  }
};

exports.config = changeConfig;