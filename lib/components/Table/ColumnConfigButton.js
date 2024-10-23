"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _indexOf2 = _interopRequireDefault(require("lodash/indexOf"));

var _each2 = _interopRequireDefault(require("lodash/each"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Modal = _interopRequireDefault(require("../../components/Modal"));

var _Grid = _interopRequireDefault(require("../../components/Grid"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _style = require("./style");

var _Table = require("./Table");

var _excluded = ["modalProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ConfigModal = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(ConfigModal, _PureComponent);

  var _super = _createSuper(ConfigModal);

  function ConfigModal(props) {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, ConfigModal);
    _this = _super.call(this, props);

    _this.convertValueToConfig = function (value, columns) {
      var _this3 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      var config = _this.state.config;
      var newConfig = {};
      (0, _each2.default)(columns, function (column) {
        (0, _newArrowCheck2.default)(this, _this3);
        var key = column.key;
        var info = config[key] || {};
        newConfig[key] = {
          hidden: !((0, _indexOf2.default)(value, key) >= 0),
          disabled: info.disabled
        };
      }.bind(this));
      return newConfig;
    }.bind(this);

    _this.convertConfigToValue = function (config, columns) {
      var _this4 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      return (0, _map2.default)(columns, function (column) {
        (0, _newArrowCheck2.default)(this, _this4);
        var key = column.key;
        var info = config[key] || {};
        return {
          key: key,
          hidden: info.hidden,
          disabled: info.disabled
        };
      }.bind(this)).filter(function (info) {
        (0, _newArrowCheck2.default)(this, _this4);
        return !info.hidden;
      }.bind(this)).map(function (info) {
        (0, _newArrowCheck2.default)(this, _this4);
        return info.key;
      }.bind(this));
    }.bind(this);

    var _this$props = _this.props,
        columnConfig = _this$props.columnConfig,
        _columns = _this$props.columns;

    var _value = _this.convertConfigToValue(columnConfig, _columns);

    _this.state = {
      value: _value,
      config: columnConfig
    };
    return _this;
  }

  (0, _createClass2.default)(ConfigModal, [{
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props2 = this.props,
          columns = _this$props2.columns,
          locale = _this$props2.locale,
          onColumnConfigChange = _this$props2.onColumnConfigChange,
          closeModal = _this$props2.closeModal,
          modalProps = _this$props2.modalProps;
      var _this$state = this.state,
          value = _this$state.value,
          config = _this$state.config;
      return /*#__PURE__*/_react.default.createElement(_Modal.default, (0, _extends2.default)({}, modalProps, {
        title: locale.columnConfigHeader,
        visible: true,
        onClose: closeModal,
        onOk: function () {
          (0, _newArrowCheck2.default)(this, _this5);
          onColumnConfigChange(config);
          closeModal();
        }.bind(this),
        destroyOnClose: true
      }), /*#__PURE__*/_react.default.createElement(_style.ColumnConfigModalNotice, {
        closable: false,
        icon: null
      }, locale.columnConfigSelected, locale.colon, value.length, "/", columns.length, locale.period, locale.columnConfigTip), /*#__PURE__*/_react.default.createElement(_style.ColumnConfigModalCheckboxGroup, {
        value: value,
        onChange: function (value) {
          (0, _newArrowCheck2.default)(this, _this5);
          this.setState({
            value: value,
            config: this.convertValueToConfig(value, columns)
          });
        }.bind(this)
      }, /*#__PURE__*/_react.default.createElement(_Grid.default.Row, null, columns.map(function (column) {
        (0, _newArrowCheck2.default)(this, _this5);
        var key = column.key,
            title = column.title;
        var dom = [/*#__PURE__*/_react.default.createElement(_Grid.default.Col, {
          key: key,
          span: 3
        }, /*#__PURE__*/_react.default.createElement(_style.ColumnConfigModalCheckbox, {
          size: "lg",
          value: key,
          disabled: config[key] && config[key].disabled
        }, title))];
        return dom;
      }.bind(this)))));
    }
  }]);
  return ConfigModal;
}(_react.PureComponent);

ConfigModal.propTypes = {
  columnConfig: _propTypes.default.object.isRequired,
  columns: _propTypes.default.array.isRequired,
  locale: _propTypes.default.object.isRequired,
  onColumnConfigChange: _propTypes.default.func.isRequired,
  closeModal: _propTypes.default.func.isRequired,
  modalProps: _propTypes.default.object
};

var ColumnConfigButton = /*#__PURE__*/function (_PureComponent2) {
  (0, _inherits2.default)(ColumnConfigButton, _PureComponent2);

  var _super2 = _createSuper(ColumnConfigButton);

  function ColumnConfigButton() {
    var _this7 = this;

    var _this6;

    (0, _classCallCheck2.default)(this, ColumnConfigButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this6 = _super2.call.apply(_super2, [this].concat(args));
    _this6.state = {
      modalVisible: false
    };

    _this6.showModal = function () {
      (0, _newArrowCheck2.default)(this, _this7);

      _this6.setState({
        modalVisible: true
      });
    }.bind(this);

    _this6.closeModal = function () {
      (0, _newArrowCheck2.default)(this, _this7);

      _this6.setState({
        modalVisible: false
      });
    }.bind(this);

    return _this6;
  }

  (0, _createClass2.default)(ColumnConfigButton, [{
    key: "render",
    value: function render() {
      var _this8 = this;

      var modalVisible = this.state.modalVisible;
      var _this$props3 = this.props,
          modalProps = _this$props3.modalProps,
          rest = (0, _objectWithoutProperties2.default)(_this$props3, _excluded);
      return /*#__PURE__*/_react.default.createElement(_style.ColumnConfigWrap, rest, /*#__PURE__*/_react.default.createElement(_style.ColumnConfigButtonWrap, {
        shape: "square",
        icon: /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
          type: "cog",
          size: "14px"
        }),
        onClick: this.showModal
      }), modalVisible && /*#__PURE__*/_react.default.createElement(_Table.TableContext.Consumer, null, function (_ref) {
        (0, _newArrowCheck2.default)(this, _this8);
        var columns = _ref.columns,
            columnConfig = _ref.columnConfig,
            onColumnConfigChange = _ref.onColumnConfigChange,
            locale = _ref.locale;
        return /*#__PURE__*/_react.default.createElement(ConfigModal, {
          modalProps: modalProps,
          columns: columns,
          columnConfig: columnConfig,
          onColumnConfigChange: onColumnConfigChange,
          locale: locale,
          closeModal: this.closeModal
        });
      }.bind(this)));
    }
  }]);
  return ColumnConfigButton;
}(_react.PureComponent);

exports.default = ColumnConfigButton;
ColumnConfigButton.propTypes = {
  /** 弹窗的props */
  modalProps: _propTypes.default.object
};