"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _useLocale = _interopRequireDefault(require("../../components/LocaleProvider/useLocale"));

var _Loading = _interopRequireDefault(require("../../components/Loading"));

var _Notice = _interopRequireDefault(require("../../components/Notice"));

var _Item = _interopRequireDefault(require("./Item"));

var _cascade = require("./style/cascade");

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Items = function Items(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var items = _ref.items,
      selectedKey = _ref.selectedKey,
      expandedKey = _ref.expandedKey,
      disabled = _ref.disabled,
      parents = _ref.parents,
      loadData = _ref.loadData;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      initial = _useState2[0],
      setInitial = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var locale = (0, _useLocale.default)(_zh_CN.default, 'Cascader');
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    setInitial(false);
  }.bind(this), []);
  (0, _react.useEffect)(function () {
    var _this4 = this;

    (0, _newArrowCheck2.default)(this, _this2);
    var exited = false;
    (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this3 = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!items && loadData && parents)) {
                _context.next = 15;
                break;
              }

              setLoading(true);
              _context.prev = 2;
              _context.next = 5;
              return loadData((0, _toConsumableArray2.default)(parents === null || parents === void 0 ? void 0 : parents.map(function (item) {
                (0, _newArrowCheck2.default)(this, _this3);
                return item.key;
              }.bind(this))));

            case 5:
              _context.next = 12;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](2);

              if (!exited) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return");

            case 11:
              setError(_context.t0);

            case 12:
              if (!exited) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return");

            case 14:
              setLoading(false);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[2, 7]]);
    }))();
    return function () {
      (0, _newArrowCheck2.default)(this, _this4);
      exited = true;
    }.bind(this);
  }.bind(this), [items, loadData, parents]);
  return /*#__PURE__*/_react.default.createElement(_Loading.default, {
    loading: loading
  }, error ? /*#__PURE__*/_react.default.createElement("div", {
    className: _cascade.errorCls
  }, /*#__PURE__*/_react.default.createElement(_Notice.default, {
    styleType: "error",
    closable: false
  }, error.message)) : initial || loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: _cascade.itemsCls
  }) : !items || !items.length ? /*#__PURE__*/_react.default.createElement("div", {
    className: _cascade.emptyCls
  }, locale.emptyTip) : /*#__PURE__*/_react.default.createElement("div", {
    className: _cascade.itemsCls
  }, items.map(function (item) {
    (0, _newArrowCheck2.default)(this, _this2);
    var value = item.key,
        itemDisabled = item.disabled,
        title = item.title,
        children = item.children,
        isParent = item.isParent;
    var finalDisabled = disabled || itemDisabled;
    var selected = value === selectedKey;
    var expanded = value === expandedKey;
    return /*#__PURE__*/_react.default.createElement(_Item.default, {
      key: value,
      value: value,
      title: title,
      selected: selected,
      expanded: expanded,
      expandAble: isParent || !!children,
      disabled: finalDisabled,
      parents: parents
    });
  }.bind(this))));
}.bind(void 0);

var _default = /*#__PURE__*/_react.default.memo(Items);

exports.default = _default;