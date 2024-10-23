"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Item = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _Button = _interopRequireDefault(require("../../components/Button"));

var _style = require("./style");

var _Thumbnail = _interopRequireDefault(require("./Thumbnail"));

var _Progress = _interopRequireDefault(require("./Progress"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Item = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Item, _Component);

  var _super = _createSuper(Item);

  function Item() {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, Item);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.onPreview = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props = _this.props,
          file = _this$props.file,
          index = _this$props.index,
          onPreview = _this$props.onPreview;
      onPreview === null || onPreview === void 0 ? void 0 : onPreview(file, index);
    }.bind(this);

    _this.onReupload = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props2 = _this.props,
          file = _this$props2.file,
          onReupload = _this$props2.onReupload;
      onReupload(file);
    }.bind(this);

    _this.onRemove = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props3 = _this.props,
          file = _this$props3.file,
          index = _this$props3.index,
          onRemove = _this$props3.onRemove;
      onRemove(file, index);
    }.bind(this);

    _this.renderThumbnail = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props4 = _this.props,
          file = _this$props4.file,
          thumbnail = _this$props4.thumbnail;
      return thumbnail ? /*#__PURE__*/_react.default.createElement(_Thumbnail.default, {
        file: file
      }) : null;
    }.bind(this);

    _this.renderName = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var file = _this.props.file;
      return /*#__PURE__*/_react.default.createElement("span", {
        className: _style.nameCls,
        title: file.name
      }, file.name);
    }.bind(this);

    return _this;
  }

  (0, _createClass2.default)(Item, [{
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          onRemove = _this$props5.onRemove,
          onPreview = _this$props5.onPreview,
          locale = _this$props5.locale,
          thumbnail = _this$props5.thumbnail,
          disabled = _this$props5.disabled,
          file = _this$props5.file;
      var status = file.status;
      var removeBtn = !disabled && onRemove ? /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
        size: "14px",
        className: _style.removeCls,
        type: "cross",
        onClick: this.onRemove
      }) : null;
      var retryBtn = !disabled ? /*#__PURE__*/_react.default.createElement(_Button.default, {
        key: "reload",
        size: "sm",
        onClick: this.onReupload
      }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
        type: "refresh"
      }), " ", locale.retry) : null;

      switch (status) {
        case 'uploading':
          {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: _style.itemCls
            }, this.renderThumbnail(), /*#__PURE__*/_react.default.createElement("div", {
              className: _style.detailCls
            }, thumbnail ? /*#__PURE__*/_react.default.createElement("div", null, this.renderName(), /*#__PURE__*/_react.default.createElement(_Progress.default, 'progress' in file ? {
              percent: file.progress
            } : {})) : /*#__PURE__*/_react.default.createElement("div", {
              className: _style.uploadingTipCLs
            }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
              className: _style.uploadingIconCLs,
              type: "ring-loading",
              spin: true
            }), locale.uploading)), /*#__PURE__*/_react.default.createElement("div", {
              className: _style.actionCls
            }, removeBtn));
          }

        case 'error':
          {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: (0, _classnames.default)(_style.itemCls, _style.itemErrorCls)
            }, this.renderThumbnail(), /*#__PURE__*/_react.default.createElement("div", {
              className: _style.detailCls
            }, this.renderName(), /*#__PURE__*/_react.default.createElement("div", {
              className: _style.errorCls,
              title: file.error + '' || locale.defaultUploadErrorTip
            }, /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
              className: _style.errorIconCls,
              size: "12px",
              type: "exclamation-circle-filled"
            }), file.error + '' || locale.defaultUploadErrorTip)), /*#__PURE__*/_react.default.createElement("div", {
              className: _style.actionCls
            }, retryBtn, removeBtn));
          }

        default:
          {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: (0, _classnames.default)(_style.itemCls, onPreview && _style.previewAbleCls)
            }, this.renderThumbnail(), /*#__PURE__*/_react.default.createElement("div", {
              className: _style.detailCls,
              onClick: this.onPreview
            }, this.renderName()), /*#__PURE__*/_react.default.createElement("div", {
              className: _style.actionCls
            }, removeBtn));
          }
      }
    }
  }]);
  return Item;
}(_react.Component);

exports.Item = Item;
Item.propTypes = {
  onRemove: _propTypes.default.func,
  onPreview: _propTypes.default.func,
  onReupload: _propTypes.default.func,
  locale: _propTypes.default.object.isRequired,
  thumbnail: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  file: _propTypes.default.object,
  index: _propTypes.default.number
};
Item.defaultProps = {
  removable: true
};
var _default = Item;
exports.default = _default;