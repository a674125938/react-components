"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _KeyCode = _interopRequireDefault(require("../../utils/KeyCode"));

var _noop = _interopRequireDefault(require("../../utils/noop"));

var _Input = _interopRequireDefault(require("./Input"));

var _style = require("./style");

var _excluded = ["onSearch", "onKeyDown", "disabled"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-next-line react/display-name
var Search = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _onSearch = _ref.onSearch,
      onKeyDown = _ref.onKeyDown,
      disabled = _ref.disabled,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var inputRef = (0, _react.useRef)(null);
  var onSearch = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    !disabled && _onSearch && _onSearch(inputRef.current && inputRef.current.input && inputRef.current.input.value || '');
  }.bind(this), [_onSearch, disabled]);
  (0, _react.useImperativeHandle)(ref, function () {
    (0, _newArrowCheck2.default)(this, _this2);
    return inputRef.current || {
      focus: _noop.default,
      input: null
    };
  }.bind(this), []);
  return /*#__PURE__*/_react.default.createElement(_Input.default, (0, _extends2.default)({}, rest, {
    onKeyDown: function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      if (e.keyCode === _KeyCode.default['ENTER']) {
        onSearch();
        e.preventDefault();
      }

      if (onKeyDown) {
        onKeyDown(e);
      }
    }.bind(this),
    disabled: disabled,
    ref: inputRef,
    suffix: /*#__PURE__*/_react.default.createElement(_style.SearchIcon, {
      type: "search",
      disabled: disabled,
      onClick: onSearch
    })
  }));
}.bind(void 0));

var _default = /*#__PURE__*/_react.default.memo(Search);

exports.default = _default;