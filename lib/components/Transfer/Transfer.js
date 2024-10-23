"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _groupBy2 = _interopRequireDefault(require("lodash/groupBy"));

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _filter2 = _interopRequireDefault(require("lodash/filter"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("../../components/Button"));

var _Notice = _interopRequireDefault(require("../../components/Notice"));

var _Input = _interopRequireDefault(require("../../components/Input"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _uncontrolled = _interopRequireDefault(require("../../decorators/uncontrolled"));

var _localeConsumerDecorator = _interopRequireDefault(require("../../components/LocaleProvider/localeConsumerDecorator"));

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _style = require("./style");

var _excluded = ["className", "dataSource", "source", "target", "onChange", "selectedKeys", "search", "disabled"];

var _this = void 0,
    _dec,
    _dec2,
    _class,
    _class2,
    _temp;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var noop = function noop() {
  (0, _newArrowCheck2.default)(this, _this);
}.bind(void 0);

var Shape = {
  /**
   * 自定义顶栏文字，null 时隐藏
   */
  title: _propTypes.default.node,

  /**
   * 自定义底栏
   */
  footer: _propTypes.default.node,

  /**
   * 是否展示搜索框，可以为 boolean 或者 Object
   * 为 Object 时可传入 handleSearch 对搜索筛选进行自定义
   */
  search: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    /**
     * @argument searchValue - 搜索的值
     * @argument item - 当前匹配的项
     * @return 匹配结果
     */
    handleSearch: _propTypes.default.func
  })]),

  /**
   * 禁用
   */
  disabled: _propTypes.default.bool
};

var defaultSearchHandle = function defaultSearchHandle(searchValue, item) {
  (0, _newArrowCheck2.default)(this, _this);
  return (0, _map2.default)(item).join('').indexOf(searchValue) >= 0;
}.bind(void 0);

var Transfer = (_dec = (0, _uncontrolled.default)({
  valueName: 'selectedKeys'
}), _dec2 = (0, _localeConsumerDecorator.default)({
  defaultLocale: _zh_CN.default,
  localeName: 'Transfer'
}), _dec(_class = _dec2(_class = (_temp = _class2 = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Transfer, _PureComponent);

  var _super = _createSuper(Transfer);

  function Transfer(_props) {
    var _this3 = this;

    var _this2;

    (0, _classCallCheck2.default)(this, Transfer);
    _this2 = _super.call(this, _props);
    _this2.state = {
      sourceSelectedKeys: [],
      targetSelectedKeys: [],
      dataSourceGroup: {}
    };

    _this2.onSelectedChange = function (type, keys) {
      (0, _newArrowCheck2.default)(this, _this3);

      _this2.setState((0, _defineProperty2.default)({}, "".concat(type, "SelectedKeys"), keys));
    }.bind(this);

    _this2.onSourceSelectedChange = function (keys) {
      (0, _newArrowCheck2.default)(this, _this3);

      _this2.onSelectedChange('source', keys);
    }.bind(this);

    _this2.onTargetSelectedChange = function (keys) {
      (0, _newArrowCheck2.default)(this, _this3);

      _this2.onSelectedChange('target', keys);
    }.bind(this);

    _this2.transfer = function (type) {
      var _this4 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var _this2$state = _this2.state,
          sourceSelectedKeys = _this2$state.sourceSelectedKeys,
          targetSelectedKeys = _this2$state.targetSelectedKeys;
      var _this2$props = _this2.props,
          selectedKeys = _this2$props.selectedKeys,
          onChange = _this2$props.onChange;

      if (type === 'source') {
        _this2.setState({
          sourceSelectedKeys: []
        });

        onChange([].concat((0, _toConsumableArray2.default)(selectedKeys), (0, _toConsumableArray2.default)(sourceSelectedKeys)));
      } else {
        _this2.setState({
          targetSelectedKeys: []
        });

        onChange((0, _filter2.default)(selectedKeys, function (key) {
          var _this5 = this;

          (0, _newArrowCheck2.default)(this, _this4);
          return targetSelectedKeys.find(function (_key) {
            (0, _newArrowCheck2.default)(this, _this5);
            return key === _key;
          }.bind(this)) === undefined;
        }.bind(this)));
      }
    }.bind(this);

    _this2.handleSearch = function (type, item) {
      (0, _newArrowCheck2.default)(this, _this3);
      var _this2$props2 = _this2.props,
          source = _this2$props2.source,
          target = _this2$props2.target,
          sharedSearch = _this2$props2.search;
      var _this2$state2 = _this2.state,
          sourceSearchValue = _this2$state2.sourceSearchValue,
          targetSearchValue = _this2$state2.targetSearchValue;
      var searchValue = type === 'source' ? sourceSearchValue : targetSearchValue;
      if (!searchValue) return true;

      var props = _objectSpread(_objectSpread({}, {
        search: sharedSearch
      }), type === 'source' ? source : target);

      var search = props.search;
      if (!search) return true;
      var handleSearch = search.handleSearch;
      return handleSearch ? handleSearch(searchValue, item) : defaultSearchHandle(searchValue, item);
    }.bind(this);

    _this2.handleSourceSearch = function (item) {
      (0, _newArrowCheck2.default)(this, _this3);
      return _this2.handleSearch('source', item);
    }.bind(this);

    _this2.handleTargetSearch = function (item) {
      (0, _newArrowCheck2.default)(this, _this3);
      return _this2.handleSearch('target', item);
    }.bind(this);

    _this2.setSourceSearchValue = (0, _debounce2.default)(function (v) {
      (0, _newArrowCheck2.default)(this, _this3);

      _this2.setState({
        sourceSearchValue: v
      });
    }.bind(this), 200);
    _this2.setTargetSearchValue = (0, _debounce2.default)(function (v) {
      (0, _newArrowCheck2.default)(this, _this3);

      _this2.setState({
        targetSearchValue: v
      });
    }.bind(this), 200);

    _this2.onSourceSearch = function (e) {
      (0, _newArrowCheck2.default)(this, _this3);
      var v;

      if (typeof e === 'string') {
        v = e;
      } else if (!e || !e.target) {
        return;
      } else {
        v = e.target.value;
      }

      _this2.setSourceSearchValue(v);
    }.bind(this);

    _this2.onTargetSearch = function (e) {
      (0, _newArrowCheck2.default)(this, _this3);
      var v;

      if (typeof e === 'string') {
        v = e;
      } else if (!e || !e.target) {
        return;
      } else {
        v = e.target.value;
      }

      _this2.setTargetSearchValue(v);
    }.bind(this);

    _this2.clearSourceSearch = function () {
      (0, _newArrowCheck2.default)(this, _this3);

      _this2.setState({
        sourceSearchValue: ''
      });
    }.bind(this);

    _this2.clearTargetSearch = function () {
      (0, _newArrowCheck2.default)(this, _this3);

      _this2.setState({
        targetSearchValue: ''
      });
    }.bind(this);

    _this2.renderPart = function (part) {
      (0, _newArrowCheck2.default)(this, _this3);
      var _this2$state3 = _this2.state,
          dataSourceGroup = _this2$state3.dataSourceGroup,
          sourceSelectedKeys = _this2$state3.sourceSelectedKeys,
          targetSelectedKeys = _this2$state3.targetSelectedKeys;
      var _this2$props3 = _this2.props,
          source = _this2$props3.source,
          target = _this2$props3.target,
          sharedSearch = _this2$props3.search,
          sharedDisabled = _this2$props3.disabled,
          locale = _this2$props3.locale;
      var partDataSource = dataSourceGroup[part] || [];

      var partProps = _objectSpread({
        search: sharedSearch,
        disabled: sharedDisabled
      }, part === 'source' ? source : target);

      var footer = partProps.footer,
          title = partProps.title,
          search = partProps.search,
          disabled = partProps.disabled;
      var selectedKeys = part === 'source' ? sourceSelectedKeys : targetSelectedKeys;
      var handleSearch = part === 'source' ? _this2.handleSourceSearch : _this2.handleTargetSearch;
      var onSelectedChange = part === 'source' ? _this2.onSourceSelectedChange : _this2.onTargetSelectedChange;
      var onSearch = part === 'source' ? _this2.onSourceSearch : _this2.onTargetSearch;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)(_style.partWrapCls, disabled && _style.disabledCls)
      }, title === null ? null : /*#__PURE__*/_react.default.createElement("h3", {
        className: _style.titleCls
      }, title ? title : {
        source: locale.sourceTitle,
        target: locale.targetTitle
      }[part]), /*#__PURE__*/_react.default.createElement("div", {
        className: _style.partContentCls
      }, search && /*#__PURE__*/_react.default.createElement("div", {
        className: _style.searchCls
      }, /*#__PURE__*/_react.default.createElement(_Input.default.Search, {
        block: true,
        onSearch: onSearch,
        onChange: onSearch,
        disabled: disabled,
        status: "default"
      })), _this2.renderContent({
        part: part,
        dataSource: partDataSource,
        selectedKeys: selectedKeys,
        onChange: onSelectedChange,
        handleSearch: handleSearch,
        disabled: disabled
      }), footer && /*#__PURE__*/_react.default.createElement("div", {
        className: _style.footerCls
      }, footer)));
    }.bind(this);

    _this2.renderEmptySourceTip = function (disabled) {
      (0, _newArrowCheck2.default)(this, _this3);
      var locale = _this2.props.locale;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _style.tipWrapCls
      }, /*#__PURE__*/_react.default.createElement(_Notice.default, {
        closable: false,
        styleType: disabled ? 'disabled' : 'default',
        icon: null
      }, locale.emptySourceTip));
    }.bind(this);

    _this2.renderEmptyTargetTip = function (disabled) {
      (0, _newArrowCheck2.default)(this, _this3);
      var locale = _this2.props.locale;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _style.tipWrapCls
      }, /*#__PURE__*/_react.default.createElement(_Notice.default, {
        closable: false,
        styleType: disabled ? 'disabled' : 'default'
      }, locale.emptyTargetTip));
    }.bind(this);

    _this2.renderEmptySearchTip = function (part) {
      (0, _newArrowCheck2.default)(this, _this3);
      var locale = _this2.props.locale;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _style.tipWrapCls
      }, /*#__PURE__*/_react.default.createElement(_Notice.default, {
        closable: false,
        styleType: "warning"
      }, /*#__PURE__*/_react.default.createElement("span", null, locale.emptySearchTip), /*#__PURE__*/_react.default.createElement("span", {
        className: _style.searchClearBtnCls,
        onClick: part === 'source' ? _this2.clearSourceSearch : _this2.clearTargetSearch
      }, locale.resetSearch)));
    }.bind(this);

    _this2.renderContent = function (_ref) {
      var _this6 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var part = _ref.part,
          dataSource = _ref.dataSource,
          selectedKeys = _ref.selectedKeys,
          onChange = _ref.onChange,
          handleSearch = _ref.handleSearch,
          disabled = _ref.disabled;

      if (!dataSource.length) {
        return part === 'source' ? _this2.renderEmptySourceTip(disabled) : _this2.renderEmptyTargetTip(disabled);
      }

      var finalDataSource = dataSource.filter(function (item) {
        (0, _newArrowCheck2.default)(this, _this6);
        return handleSearch(item);
      }.bind(this));

      if (!finalDataSource.length) {
        return _this2.renderEmptySearchTip(part);
      }

      var renderList = _this2.props.renderList;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _style.listWrapCls
      }, renderList({
        dataSource: finalDataSource,
        selectedKeys: selectedKeys,
        disabled: disabled,
        onChange: onChange
      }));
    }.bind(this);

    _this2.renderAction = function () {
      var _this7 = this;

      (0, _newArrowCheck2.default)(this, _this3);
      var disabled = _this2.props.disabled;
      var _this2$state4 = _this2.state,
          sourceSelectedKeys = _this2$state4.sourceSelectedKeys,
          targetSelectedKeys = _this2$state4.targetSelectedKeys;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _style.actionWrapCls
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _style.actionCls
      }, /*#__PURE__*/_react.default.createElement(_Button.default, {
        styleType: "primary",
        shape: "square",
        disabled: disabled || !sourceSelectedKeys.length,
        onClick: function () {
          (0, _newArrowCheck2.default)(this, _this7);
          return _this2.transfer('source');
        }.bind(this)
      }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
        type: "arrow-right"
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: _style.actionCls
      }, /*#__PURE__*/_react.default.createElement(_Button.default, {
        styleType: "primary",
        shape: "square",
        disabled: disabled || !targetSelectedKeys.length,
        onClick: function () {
          (0, _newArrowCheck2.default)(this, _this7);
          return _this2.transfer('target');
        }.bind(this)
      }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
        type: "arrow-left"
      }))));
    }.bind(this);

    _this2.groupDataSource = function () {
      var _this8 = this;

      var dataSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var selectedKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return (0, _groupBy2.default)(dataSource, function (item) {
        var _this9 = this;

        (0, _newArrowCheck2.default)(this, _this8);
        var key = item.key;
        return selectedKeys.find(function (selectedKey) {
          (0, _newArrowCheck2.default)(this, _this9);
          return selectedKey === key;
        }.bind(this)) !== undefined ? 'target' : 'source';
      }.bind(this));
    };

    var _dataSource = _props.dataSource,
        _selectedKeys = _props.selectedKeys;
    _this2.state.dataSourceGroup = _this2.groupDataSource(_dataSource, _selectedKeys);
    return _this2;
  }

  (0, _createClass2.default)(Transfer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.dataSource !== this.props.dataSource || nextProps.selectedKeys !== this.props.selectedKeys) {
        this.setState({
          dataSourceGroup: this.groupDataSource(nextProps.dataSource, nextProps.selectedKeys)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      /* eslint-disable no-unused-vars */
      var _this$props = this.props,
          className = _this$props.className,
          dataSource = _this$props.dataSource,
          source = _this$props.source,
          target = _this$props.target,
          onChange = _this$props.onChange,
          selectedKeys = _this$props.selectedKeys,
          search = _this$props.search,
          disabled = _this$props.disabled,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      /* eslint-enable no-unused-vars */

      return /*#__PURE__*/_react.default.createElement(_style.TransferWrap, (0, _extends2.default)({}, rest, {
        className: (0, _classnames.default)(_style.prefixCls, className)
      }), this.renderPart('source'), this.renderAction(), this.renderPart('target'));
    }
  }]);
  return Transfer;
}(_react.PureComponent), _class2.propTypes = {
  /**
   * 所有的数据源
   */
  dataSource: _propTypes.default.array.isRequired,

  /**
   * 自定义渲染列表
   */
  renderList: _propTypes.default.func.isRequired,

  /**
   * 已选中的数据 key，受控
   */
  selectedKeys: _propTypes.default.array,

  /**
   * 默认已选中的数据 key，非受控
   */
  defaultSelectedKeys: _propTypes.default.array,

  /**
   * 选中回调
   */
  onChange: _propTypes.default.func,

  /**
   * 是否禁用
   */
  disabled: _propTypes.default.bool,

  /**
   * 是否展示搜索框，可以为 boolean 或者 Object
   * 为 Object 时可传入 handleSearch 对搜索筛选进行自定义
   */
  search: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    /**
     * @argument searchValue - 搜索的值
     * @argument item - 当前匹配的项
     * @return 匹配结果
     */
    handleSearch: _propTypes.default.func
  })]),

  /**
   * 源数据区域的配置
   */
  source: _propTypes.default.shape(Shape),

  /**
   * 已选数据区域的配置
   */
  target: _propTypes.default.shape(Shape),

  /** @ignore */
  locale: _propTypes.default.object,

  /**
   * @ignore
   */
  className: _propTypes.default.string
}, _class2.defaultProps = {
  source: {},
  target: {},
  search: true,
  defaultSelectedKeys: [],
  onChange: noop
}, _temp)) || _class) || _class);
var _default = Transfer;
exports.default = _default;