"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePanel = exports.useCollapse = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _group = require("../../hooks/group");

var _useUncontrolled5 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _CollapseContext = _interopRequireDefault(require("./CollapseContext"));

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useCollapse = function useCollapse(_ref) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _openKeys = _ref.openKeys,
      _ref$defaultOpenKeys = _ref.defaultOpenKeys,
      defaultOpenKeys = _ref$defaultOpenKeys === void 0 ? [] : _ref$defaultOpenKeys,
      _onChange = _ref.onChange,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? true : _ref$multiple;

  var _useUncontrolled = (0, _useUncontrolled5.default)(_openKeys, defaultOpenKeys, _onChange),
      _useUncontrolled2 = (0, _slicedToArray2.default)(_useUncontrolled, 2),
      openKeys = _useUncontrolled2[0],
      onChangeS = _useUncontrolled2[1];

  var onChange = (0, _react.useCallback)(function (keys) {
    (0, _newArrowCheck2.default)(this, _this2);
    onChangeS(keys);
  }.bind(this), [onChangeS]);

  var _useGroup = (0, _group.useGroup)(openKeys, onChange, multiple),
      _useGroup2 = (0, _slicedToArray2.default)(_useGroup, 1),
      collapseContext = _useGroup2[0];

  return [collapseContext];
}.bind(void 0);

exports.useCollapse = useCollapse;

var usePanel = function usePanel(_ref2) {
  var _this3 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _open = _ref2.open,
      defaultOpen = _ref2.defaultOpen,
      _onChange = _ref2.onChange,
      disabled = _ref2.disabled,
      _ref2$panelKey = _ref2.panelKey,
      panelKey = _ref2$panelKey === void 0 ? '' : _ref2$panelKey,
      forceRender = _ref2.forceRender,
      ignoreUpdateWhenClose = _ref2.ignoreUpdateWhenClose;

  var _useUncontrolled3 = (0, _useUncontrolled5.default)(_open, defaultOpen, _onChange),
      _useUncontrolled4 = (0, _slicedToArray2.default)(_useUncontrolled3, 2),
      openS = _useUncontrolled4[0],
      onChange = _useUncontrolled4[1];

  var collapseContext = (0, _react.useContext)(_CollapseContext.default);

  var _useItem = (0, _group.useItem)(panelKey, collapseContext, openS),
      _useItem2 = (0, _slicedToArray2.default)(_useItem, 2),
      open = _useItem2[0],
      toggle = _useItem2[1];

  var handleToggle = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this3);

    if (!disabled) {
      onChange(!open);
      toggle(!open);
    }
  }.bind(this), [disabled, onChange, open, toggle]);
  var renderedRef = (0, _react.useRef)(false);
  var shouldRender = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    var shouldRender = forceRender || open || ignoreUpdateWhenClose && renderedRef.current || false;
    if (renderedRef.current || shouldRender) renderedRef.current = shouldRender;
    return shouldRender;
  }.bind(this), [forceRender, ignoreUpdateWhenClose, open]);
  return [shouldRender, open, handleToggle];
}.bind(void 0);

exports.usePanel = usePanel;