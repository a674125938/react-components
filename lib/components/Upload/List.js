"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

var _Item = _interopRequireDefault(require("./Item"));

var _CardItem = _interopRequireDefault(require("./CardItem"));

var _utils = require("./utils");

var _this5 = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * 文件列表控件
 */
var List = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(List, _PureComponent);

  var _super = _createSuper(List);

  function List() {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.onPreview = function (file, index) {
      var _this3 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      var onPreview = _this.props.onPreview;

      if (onPreview) {
        onPreview(file, index);
      } else if (file.url) {
        (0, _utils.openLink)(file.url);
      } else {
        var w = (0, _utils.openLink)('');
        (0, _utils.readFile)(file).then(function (url) {
          (0, _newArrowCheck2.default)(this, _this3);
          var doc = w.document;
          var img = doc.createElement('img');
          img.src = url;
          img.style.margin = 'auto';
          img.style.display = 'block';
          doc.write(img.outerHTML);
        }.bind(this));
      }
    }.bind(this);

    _this.renderFileItem = function () {
      var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var index = arguments.length > 1 ? arguments[1] : undefined;
      var _this$props = _this.props,
          getRemovableOfItem = _this$props.getRemovableOfItem,
          onRemove = _this$props.onRemove,
          onPreview = _this$props.onPreview,
          getPreviewableOfItem = _this$props.getPreviewableOfItem,
          handleReupload = _this$props.handleReupload,
          locale = _this$props.locale,
          thumbnail = _this$props.thumbnail,
          disabled = _this$props.disabled,
          card = _this$props.card;
      var removable = getRemovableOfItem === null || getRemovableOfItem === void 0 ? void 0 : getRemovableOfItem(file);
      var previewable = false;

      if (file.status === 'uploading' || file.status === 'error') {// empty
      } else if (onPreview) {
        if (getPreviewableOfItem) {
          previewable = getPreviewableOfItem(file);
        } else {
          previewable = true;
        }
      } else if (onPreview === null) {
        previewable = false;
      } else if (file.url || file instanceof File && (0, _utils.getFileType)(file) === 'image') {
        previewable = true;
      }

      var itemProps = {
        onRemove: removable ? onRemove : null,
        onPreview: previewable ? _this.onPreview : null,
        onReupload: handleReupload,
        locale: locale,
        disabled: disabled,
        file: file,
        index: index
      };
      if (!card) itemProps.thumbnail = thumbnail;
      var ItemComp = card ? _CardItem.default : _Item.default;
      return /*#__PURE__*/_react.default.createElement(ItemComp, (0, _extends2.default)({
        key: file.uid
      }, itemProps));
    };

    return _this;
  }

  (0, _createClass2.default)(List, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          fileList = _this$props2.fileList,
          card = _this$props2.card;
      return fileList.length ? /*#__PURE__*/_react.default.createElement(_style.ListWrap, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: card ? _style.cardListCls : _style.listCls
      }, fileList.map(function (file, index) {
        (0, _newArrowCheck2.default)(this, _this4);
        return this.renderFileItem(file, index);
      }.bind(this))))) : null;
    }
  }]);
  return List;
}(_react.PureComponent);

exports.default = List;
List.propTypes = {
  /** 文件列表 */
  fileList: _propTypes.default.array,

  /** 渲染文件列表项 */
  renderFileItem: _propTypes.default.func,

  /** 删除文件 */
  onRemove: _propTypes.default.func,

  /** 自定义预览文件 */
  onPreview: _propTypes.default.func,

  /** 自定义文件是否可以预览 */
  getPreviewableOfItem: _propTypes.default.func,

  /** 自定义文件是否可删除 */
  getRemovableOfItem: _propTypes.default.func,

  /** 重新上传文件 */
  handleReupload: _propTypes.default.func,

  /** 是否禁用 */
  disabled: _propTypes.default.bool,

  /** 是否展示缩略图 */
  thumbnail: _propTypes.default.bool,

  /** 卡片列表 */
  card: _propTypes.default.bool,

  /** @ignore */
  locale: _propTypes.default.object
};
List.defaultProps = {
  getRemovableOfItem: function getRemovableOfItem(file) {
    (0, _newArrowCheck2.default)(this, _this5);
    return (file === null || file === void 0 ? void 0 : file.status) !== 'uploading';
  }.bind(void 0)
};