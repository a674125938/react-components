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

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _style = require("./style");

var _excluded = ["type", "mode"];

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HeaderButton = function HeaderButton(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var type = _ref.type,
      mode = _ref.mode,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var display = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this2);

    switch (type) {
      case 'prevMonth':
        return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
          type: "arrow-left",
          className: _style.iconCls
        });

      case 'nextMonth':
        return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
          type: "arrow-right",
          className: _style.iconCls
        });

      case 'prevYear':
      case 'prevDecade':
      case 'prevCentury':
        return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
          type: "double-arrow-left",
          className: _style.iconCls
        });

      case 'nextYear':
      case 'nextDecade':
      case 'nextCentury':
        return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
          type: "double-arrow-right",
          className: _style.iconCls
        });
    }
  }.bind(this), [type]);
  return /*#__PURE__*/_react.default.createElement("div", rest, display);
}.bind(void 0);

var _default = /*#__PURE__*/(0, _react.memo)(HeaderButton);

exports.default = _default;