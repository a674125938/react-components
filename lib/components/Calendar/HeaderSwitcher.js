"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _excluded = ["type", "value", "locale"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HeaderSwitcherWithoutMemo = function HeaderSwitcherWithoutMemo(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var type = _ref.type,
      value = _ref.value,
      locale = _ref.locale,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var display = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);

    switch (type) {
      case 'date-month':
        return value.getMonth() + 1 + locale.month;

      case 'date-year':
      case 'month':
        return value.getFullYear() + locale.year;

      case 'year':
        {
          var baseYear = (value.getFullYear() / 10 | 0) * 10;
          return "".concat(baseYear).concat(locale.year, " - ").concat(baseYear + 9).concat(locale.year);
        }

      case 'decade':
        {
          var _baseYear = (value.getFullYear() / 100 | 0) * 100;

          return "".concat(_baseYear).concat(locale.year, " - ").concat(_baseYear + 99).concat(locale.year);
        }
    }
  }.bind(this), [type, value, locale.month, locale.year]);
  return /*#__PURE__*/_react.default.createElement("span", rest, display);
}.bind(void 0);

var _default = /*#__PURE__*/(0, _react.memo)(HeaderSwitcherWithoutMemo);

exports.default = _default;