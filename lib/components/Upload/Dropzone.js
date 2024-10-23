"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _List = _interopRequireDefault(require("./List"));

var _Dropzone = _interopRequireDefault(require("./icons/Dropzone"));

var _Upload = _interopRequireDefault(require("./icons/Upload"));

var _style = require("./style");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DropZone = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(DropZone, _PureComponent);

  var _super = _createSuper(DropZone);

  function DropZone() {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, DropZone);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      draging: false
    };

    _this.renderList = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_List.default, _this.props), /*#__PURE__*/_react.default.createElement("div", {
        className: _style.dropzoneMaskTipCls
      }, _this.renderTip()));
    }.bind(this);

    _this.renderTip = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var locale = _this.props.locale;
      var draging = _this.state.draging;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _style.dropzoneTipCls
      }, draging ? /*#__PURE__*/_react.default.createElement(_Upload.default, {
        size: "52px",
        className: _style.iconCls
      }) : /*#__PURE__*/_react.default.createElement(_Dropzone.default, {
        size: "52px",
        className: _style.iconCls
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: _style.dropzoneTipMainCls
      }, locale.dropzoneMainTip), /*#__PURE__*/_react.default.createElement("div", {
        className: _style.dropzoneTipSubCls
      }, locale.dropzoneSubTip));
    }.bind(this);

    _this.dragPath = [];

    _this.onDrop = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);
      e.preventDefault();
      e.stopPropagation();
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          disabled = _this$props.disabled;
      if (disabled) return;
      onSelect(e.dataTransfer.files);
      _this.dragPath = [];

      _this.setState({
        draging: false
      });
    }.bind(this);

    _this.onDragOver = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);
      e.preventDefault();
      e.stopPropagation();
    }.bind(this);

    _this.onDragEnter = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);
      e.preventDefault();
      e.stopPropagation();
      var disabled = _this.props.disabled;
      if (disabled) return;

      _this.dragPath.push(e.target);

      if (!_this.state.draging) {
        _this.setState({
          draging: true
        });
      }
    }.bind(this);

    _this.onDragLeave = function (e) {
      var _this3 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      e.preventDefault();
      e.stopPropagation();
      _this.dragPath = _this.dragPath.filter(function (p) {
        (0, _newArrowCheck2.default)(this, _this3);
        return p !== e.target;
      }.bind(this));

      if (_this.state.draging && !_this.dragPath.length) {
        _this.setState({
          draging: false
        });
      }
    }.bind(this);

    _this.onDragEnd = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      _this.dragPath = [];

      _this.setState({
        draging: false
      });
    }.bind(this);

    return _this;
  }

  (0, _createClass2.default)(DropZone, [{
    key: "render",
    value: function render() {
      var fileList = this.props.fileList;
      var draging = this.state.draging;
      return /*#__PURE__*/_react.default.createElement(_style.DropZoneWrap, {
        onDrop: this.onDrop,
        onDragOver: this.onDragOver,
        onDragEnter: this.onDragEnter,
        onDragLeave: this.onDragLeave,
        onDragEnd: this.onDragEnd,
        className: (0, _classnames.default)(draging && _style.dragingCls)
      }, fileList.length > 0 ? this.renderList() : this.renderTip());
    }
  }]);
  return DropZone;
}(_react.PureComponent);

exports.default = DropZone;
DropZone.propTypes = {
  fileList: _propTypes.default.array,
  locale: _propTypes.default.object,
  onSelect: _propTypes.default.func,
  disabled: _propTypes.default.bool
};