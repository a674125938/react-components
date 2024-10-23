"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _react = _interopRequireWildcard(require("react"));

var _Loading = _interopRequireDefault(require("../../components/Loading"));

var _useLocale = _interopRequireDefault(require("../../components/LocaleProvider/useLocale"));

var _style = require("./style");

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _SearchInput = _interopRequireDefault(require("./SearchInput"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Search = function Search(_ref) {
  var _this = this;

  var count = _ref.count,
      empty = _ref.empty,
      loading = _ref.loading,
      onSearch = _ref.onSearch,
      children = _ref.children,
      _ref$wait = _ref.wait,
      wait = _ref$wait === void 0 ? 200 : _ref$wait;
  var handleSearch = (0, _react.useMemo)(function () {
    var _this2 = this;

    (0, _newArrowCheck2.default)(this, _this);
    return (0, _debounce2.default)(function (v) {
      (0, _newArrowCheck2.default)(this, _this2);
      return onSearch(v);
    }.bind(this), wait);
  }.bind(this), [onSearch, wait]);
  var handleChange = (0, _react.useCallback)(function (e) {
    (0, _newArrowCheck2.default)(this, _this);
    handleSearch(e.target.value);
  }.bind(this), [handleSearch]);
  var locale = (0, _useLocale.default)(_zh_CN.default, 'SharedSearch');
  return /*#__PURE__*/_react.default.createElement(_style.SWrap, null, /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    onChange: handleChange,
    count: count,
    status: "default"
  }), loading ? /*#__PURE__*/_react.default.createElement(_Loading.default, {
    loading: loading,
    className: _style.loadingCls
  }) : null, empty ? /*#__PURE__*/_react.default.createElement("div", {
    className: _style.emptyTipCls
  }, locale.empty) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: empty ? _style.emptyContentCls : ''
  }, children));
};

var _default = /*#__PURE__*/(0, _react.memo)(Search);

exports.default = _default;