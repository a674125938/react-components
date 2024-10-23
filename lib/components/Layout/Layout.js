"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LayoutContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _style = require("./style");

var _excluded = ["hasSider"];

var _this = void 0;

var LayoutContext = /*#__PURE__*/_react.default.createContext({
  siderHook: {
    addSider: function addSider() {
      (0, _newArrowCheck2.default)(this, _this);
      return null;
    }.bind(void 0),
    removeSider: function removeSider() {
      (0, _newArrowCheck2.default)(this, _this);
      return null;
    }.bind(void 0)
  }
});

exports.LayoutContext = LayoutContext;

var Layout = function Layout(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var hasSider = _ref.hasSider,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _React$useState = _react.default.useState([]),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      siders = _React$useState2[0],
      setSiders = _React$useState2[1];

  var contextValue = _react.default.useMemo(function () {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);
    return {
      siderHook: {
        addSider: function addSider(id) {
          var _this4 = this;

          (0, _newArrowCheck2.default)(this, _this3);
          setSiders(function (prev) {
            (0, _newArrowCheck2.default)(this, _this4);
            return [].concat((0, _toConsumableArray2.default)(prev), [id]);
          }.bind(this));
        }.bind(this),
        removeSider: function removeSider(id) {
          var _this5 = this;

          (0, _newArrowCheck2.default)(this, _this3);
          setSiders(function (prev) {
            var _this6 = this;

            (0, _newArrowCheck2.default)(this, _this5);
            return prev.filter(function (currentId) {
              (0, _newArrowCheck2.default)(this, _this6);
              return currentId !== id;
            }.bind(this));
          }.bind(this));
        }.bind(this)
      }
    };
  }.bind(this), []);

  return /*#__PURE__*/_react.default.createElement(LayoutContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement(_style.LayoutWrap, (0, _extends2.default)({}, rest, {
    className: (0, _classnames.default)(_style.prefixCls, rest.className, (hasSider || !!siders.length) && _style.prefixClsHasSider)
  })));
}.bind(void 0);

Layout.propTypes = {
  hasSider: _propTypes.default.bool
};

var MemoLayout = /*#__PURE__*/_react.default.memo(Layout);

var _default = MemoLayout;
exports.default = _default;