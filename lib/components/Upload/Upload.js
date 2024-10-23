"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _isArray2 = _interopRequireDefault(require("lodash/isArray"));

var _uniqueId2 = _interopRequireDefault(require("lodash/uniqueId"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _generateError = _interopRequireDefault(require("../../utils/generateError"));

var _localeConsumerDecorator = _interopRequireDefault(require("../../components/LocaleProvider/localeConsumerDecorator"));

var _Modal = _interopRequireDefault(require("../../components/Modal"));

var _deprecatedLog = _interopRequireDefault(require("../../utils/deprecatedLog"));

var _Selector = _interopRequireDefault(require("./Selector"));

var _List = _interopRequireDefault(require("./List"));

var _Dropzone = _interopRequireDefault(require("./Dropzone"));

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _utils = require("./utils");

var _style = require("./style");

var _excluded = ["disabled", "multiple", "accept", "maxSize", "selector", "locale"];

var _dec,
    _class,
    _class2,
    _temp,
    _this10 = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var fileShape = _propTypes.default.shape({
  name: _propTypes.default.string.isRequired,
  uid: _propTypes.default.string.isRequired,
  size: _propTypes.default.number,
  type: _propTypes.default.string,
  status: _propTypes.default.string,
  previewUrl: _propTypes.default.string,
  thumbnailUrl: _propTypes.default.string
});

var deprecatedLogForListTypeText = (0, _deprecatedLog.default)('listType text', 'list');
/**
 * 文件上传控件
 */

var Upload = (_dec = (0, _localeConsumerDecorator.default)({
  defaultLocale: _zh_CN.default,
  localeName: 'Upload'
}), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Upload, _PureComponent);

  var _super = _createSuper(Upload);

  function Upload(props) {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, Upload);
    _this = _super.call(this, props);
    /** 判定组件是否为controlled */

    _this.componentDidUpdate = function () {
      (0, _newArrowCheck2.default)(this, _this2);

      /** 检查props是否更改了controlled类型 */

      /* eslint-disable no-console */
      if (!_this.IS_CONTROLLED && _this.props.fileList !== undefined) {
        console.error('You are changing a uncontrolled Upload to be controlled, which may cause a lot of problem');
      } else if (_this.IS_CONTROLLED && _this.props.fileList === undefined) {
        console.error('You are changing a controlled Upload to be uncontrolled, which may cause a lot of problem');
      }
      /* eslint-enable no-console */

    }.bind(this);

    _this.onSingleSelect = function (files) {
      var _this3 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props = _this.props,
          onAdd = _this$props.onAdd,
          onRemove = _this$props.onRemove;
      if (!files.length) return;

      var fileList = _this.getFileList();

      if (fileList.length) {
        var file = fileList[0];

        if (onRemove(file, 0) === false) {
          return;
        }
      }

      fileList = [files[0]];

      if (onAdd(fileList) === false) {
        return;
      }

      _this.onChange(fileList, function () {
        (0, _newArrowCheck2.default)(this, _this3);
        return _this.handleFilesUpload(fileList);
      }.bind(this));
    }.bind(this);

    _this.onAdd = function (files) {
      var _this4 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props2 = _this.props,
          maxCount = _this$props2.maxCount,
          onAdd = _this$props2.onAdd;

      if (onAdd(files) === false) {
        return;
      }

      var fileList = _this.getFileList();

      if (fileList.length + files.length > maxCount) {
        _this.onMaxCountError();
      }

      fileList = fileList.concat(files);
      if (maxCount > 0) fileList = fileList.slice(0, maxCount);

      _this.onChange(fileList, function () {
        (0, _newArrowCheck2.default)(this, _this4);
        return _this.handleFilesUpload(files);
      }.bind(this));
    }.bind(this);

    _this.handleFilesUpload = function (files) {
      var _this5 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      var handleUpload = _this.props.handleUpload;
      if (!handleUpload) return;
      files.forEach(function (file) {
        var _this6 = this;

        (0, _newArrowCheck2.default)(this, _this5);
        file.status = 'uploading';
        handleUpload(file, function (progress) {
          (0, _newArrowCheck2.default)(this, _this6);
          file.progress = progress;

          _this.onChange(_this.getFileList());
        }.bind(this)).then(function () {
          (0, _newArrowCheck2.default)(this, _this6);
          file.status = 'success';
        }.bind(this)).catch(function (e) {
          (0, _newArrowCheck2.default)(this, _this6);
          file.status = 'error';
          file.error = e;
        }.bind(this)).then(function () {
          (0, _newArrowCheck2.default)(this, _this6);

          _this.onChange(_this.getFileList());
        }.bind(this));
      }.bind(this));

      _this.onChange(_this.getFileList());
    }.bind(this);

    _this.onRemove = function (file, index) {
      (0, _newArrowCheck2.default)(this, _this2);
      var onRemove = _this.props.onRemove;

      if (onRemove(file, index) === false) {
        return;
      }

      var fileList = _this.getFileList();

      fileList.splice(index, 1);

      _this.onChange(fileList);
    }.bind(this);

    _this.onChange = function (fileList, cb) {
      (0, _newArrowCheck2.default)(this, _this2);

      if (!_this.IS_CONTROLLED) {
        _this.onUncontrolledChange(fileList, cb);
      } else {
        _this.onControlledChange(fileList, cb);
      }
    }.bind(this);

    _this.onUncontrolledChange = function (fileList, cb) {
      var _this7 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      var onChange = _this.props.onChange;

      _this.setState({
        fileList: fileList
      }, function () {
        (0, _newArrowCheck2.default)(this, _this7);
        onChange(fileList);
        cb && cb();
      }.bind(this));
    }.bind(this);

    _this.onControlledChange = function (fileList) {
      (0, _newArrowCheck2.default)(this, _this2);
      var onChange = _this.props.onChange;
      onChange(fileList);
    }.bind(this);

    _this.onError = function (error) {
      (0, _newArrowCheck2.default)(this, _this2);
      var onError = _this.props.onError;

      if (onError) {
        onError(error);
      } else {
        _this.onDefaultError(error);
      }
    }.bind(this);

    _this.onDefaultError = function (Error) {
      (0, _newArrowCheck2.default)(this, _this2);
      var locale = _this.props.locale;

      _Modal.default.alert({
        title: locale.defaultErrorTipTitle
      }, /*#__PURE__*/_react.default.createElement(_style.ErrorTipWrap, null, Error === null || Error === void 0 ? void 0 : Error.message));
    }.bind(this);

    _this.onMaxCountError = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props3 = _this.props,
          maxCount = _this$props3.maxCount,
          locale = _this$props3.locale;

      _this.onError((0, _generateError.default)(locale.maxCountErrorTip.replace('{maxCount}', maxCount), 'FileMaxCountError'));
    }.bind(this);

    _this.onFileError = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.onError(e);
    }.bind(this);

    _this.onFileSelect = function (files) {
      (0, _newArrowCheck2.default)(this, _this2);
      if (!files || !files.length) return;
      var _this$props4 = _this.props,
          accept = _this$props4.accept,
          maxSize = _this$props4.maxSize,
          multiple = _this$props4.multiple,
          locale = _this$props4.locale;
      files = [].slice.call(files);

      for (var index in files) {
        var file = files[index];
        var checkResult = (0, _utils.checkFile)(file, accept, maxSize, locale);

        if (checkResult !== true) {
          _this.onFileError(checkResult);

          return;
        }

        file.uid = (0, _uniqueId2.default)('__file_uid_for_upload_components__');
      }

      if (multiple) {
        _this.onAdd(files);
      } else {
        _this.onSingleSelect(files);
      }
    }.bind(this);

    _this.getFileList = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      return (_this.props.fileList || _this.state.fileList).slice();
    }.bind(this);

    _this.renderList = function () {
      var _this8 = this;

      (0, _newArrowCheck2.default)(this, _this2);
      var _this$props5 = _this.props,
          disabled = _this$props5.disabled,
          onPreview = _this$props5.onPreview,
          getPreviewableOfItem = _this$props5.getPreviewableOfItem,
          locale = _this$props5.locale;
      var listType = _this.props.listType;

      var fileList = _this.getFileList();

      var listProps = {
        fileList: fileList,
        onRemove: _this.onRemove,
        onPreview: onPreview,
        getPreviewableOfItem: getPreviewableOfItem,
        handleReupload: function handleReupload(file) {
          (0, _newArrowCheck2.default)(this, _this8);
          return _this.handleFilesUpload([file]);
        }.bind(this),
        disabled: disabled,
        locale: locale
      };

      if (!(0, _isArray2.default)(listType)) {
        listType = [listType];
      }

      var _listType = listType,
          _listType2 = (0, _slicedToArray2.default)(_listType, 2),
          type = _listType2[0],
          option = _listType2[1];

      switch (type) {
        case 'list':
          return /*#__PURE__*/_react.default.createElement(_List.default, (0, _extends2.default)({}, listProps, {
            card: option === 'card',
            thumbnail: option === 'thumbnail'
          }));

        case 'dropzone':
          return /*#__PURE__*/_react.default.createElement(_Dropzone.default, (0, _extends2.default)({}, listProps, {
            card: option === 'card',
            thumbnail: option === 'thumbnail',
            onSelect: _this.onFileSelect
          }));

        case 'none':
          return null;

        case 'text':
        default:
          return /*#__PURE__*/_react.default.createElement(_List.default, listProps);
      }
    }.bind(this);

    if (props.fileList !== undefined) {
      if (props.defaultFileList !== undefined) {
        // eslint-disable-next-line no-console
        console.error('You can only use one of fileList and defaultFileList');
      }

      _this.IS_CONTROLLED = true;
    }

    if (props.listType === 'text') {
      deprecatedLogForListTypeText();
    }

    _this.state = {
      fileList: props.fileList || props.defaultFileList || []
    };
    return _this;
  }

  (0, _createClass2.default)(Upload, [{
    key: "render",
    value: function render() {
      var _this9 = this;

      var _this$props6 = this.props,
          disabled = _this$props6.disabled,
          multiple = _this$props6.multiple,
          accept = _this$props6.accept,
          maxSize = _this$props6.maxSize,
          selector = _this$props6.selector,
          locale = _this$props6.locale,
          rest = (0, _objectWithoutProperties2.default)(_this$props6, _excluded);
      /** clean unused rest props for div */

      ['maxCount', 'onChange', 'onAdd', 'onRemove', 'handleUpload', 'onError', 'defaultFileList', 'fileList', 'listType', 'onPreview'].forEach(function (key) {
        (0, _newArrowCheck2.default)(this, _this9);
        delete rest[key];
      }.bind(this));
      return /*#__PURE__*/_react.default.createElement(_style.UploadWrap, rest, /*#__PURE__*/_react.default.createElement(_Selector.default, {
        onSelect: this.onFileSelect,
        disabled: disabled,
        multiple: multiple,
        accept: accept,
        maxSize: maxSize,
        selector: selector,
        locale: locale
      }), this.renderList());
    }
  }]);
  return Upload;
}(_react.PureComponent), _class2.propTypes = {
  /**
   * 文件列表变化时的回调，如新增、删除、上传、上传完成、进度更新等操作
   * @param {Object[]} fileList - 文件列表
   * @param {string} fileList[].name - 文件名称
   * @param {string} fileList[].uid - 文件 uid
   * @param {number} fileList[].size - 文件的大小
   * @param {string} fileList[].type - 文件的类型，MIME
   * @param {string} fileList[].status - 文件的上传状态，只有传入 handleUpload 时才有的属性 [uploading,success,error]
   * @param {number} fileList[].progress - 文件的上传进度，只有 handleUpload 中上报了 progress 才会有
   */
  onChange: _propTypes.default.func,

  /**
   * 正在添加文件时的回调，可通过返回值控制添加行为
   * @param {Object[]} fileList - 文件列表
   * @returns 是否应用添加操作，返回 false 时不触发添加
   */
  onAdd: _propTypes.default.func,

  /**
   * 正在删除文件时的回调，可通过返回值控制添加行为
   * @param {Object} file - 删除的文件
   * @param {number} index - 删除文件的索引
   * @returns 是否应用删除操作，返回 false 时不触发删除
   */
  onRemove: _propTypes.default.func,

  /** 自定义文件是否可删除，默认为 loading 时不可删除，如果需要都可删除可直接传入 () => true */
  getRemovableOfItem: _propTypes.default.func,

  /**
   * 选中或读取文件错误回调，自定义错误处理，不传时默认行为会在报错时拦截文件进入列表并弹窗提示用户
   * @param {Object} error - 错误信息
   * @param {string} error.message - 错误的具体信息
   * @param {string} error.name - 错误的类型，包括 FileTypeError - 文件类型错误、FileSizeError - 文件大小错误、FileMaxCountError - 文件数量错误，以及其他可能出现的原生错误
   */
  onError: _propTypes.default.func,

  /**
   * 预览操作，自定义预览操作，不传时默认为对图片可进行预览，点击会在新窗口打开图片，需要关闭默认行为可使用 null
   * @param {Object} file - 预览的文件
   * @param {number} index - 预览文件的索引
   */
  onPreview: _propTypes.default.func,

  /**
   * 自定义预览操作时每个文件都会调用预览，可以使用这个函数来过滤不想出现预览的文件
   * @param {Object} file - 检测的文件
   */
  getPreviewableOfItem: _propTypes.default.func,

  /**
   * 定义上传操作，受控组件中不起作用请自行处理
   * 应交互需求，上传中某些样式下会有进度条，需要调用 handleProgress 来更新进度，如果不调用，将会出现一个假的进度条，😂
   * @param {Object} file - 上传的文件
   * @param {function} handleProgress - 上报上传的进度，(progress) => void，在上传过程中调用 handleProgress(progress) 来更新文件进度
   */
  handleUpload: _propTypes.default.func,

  /** 是否禁用 */
  disabled: _propTypes.default.bool,

  /** 是否可以多选 */
  multiple: _propTypes.default.bool,

  /**
   * 可接受的文件类型, MIME
   * [input accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
   */
  accept: _propTypes.default.string,

  /** 文件大小限制 */
  maxSize: _propTypes.default.number,

  /** 文件数量限制 */
  maxCount: _propTypes.default.number,

  /** 自定义选择控件，为 null 时隐藏*/
  selector: _propTypes.default.node,

  /**
   * 文件列表展示类型，格式为 'list' | ['list', 'card'] | ['dropzone', 'thumbnail']
   * none - 隐藏文件列表
   * text - 展示文件名称列表
   * list - 普通列表形式，可通过第二个参数设置 thumbnail 和 card
   * dropzone - 拖拽上传区域，可通过第二个参数设置 thumbnail 和 card
   */
  listType: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),

  /** 默认文件列表，非受控组件使用，初始化时才有效 */
  defaultFileList: _propTypes.default.arrayOf(fileShape),

  /** 文件列表，传入后变为受控组件 */
  fileList: _propTypes.default.arrayOf(fileShape),

  /** 自定义样式 */
  customStyle: _propTypes.default.shape({
    /** 列表的最大高度 */
    listMaxHeight: _propTypes.default.string
  }),

  /** @ignore */
  className: _propTypes.default.string,

  /** @ignore */
  locale: _propTypes.default.object
}, _class2.defaultProps = {
  onChange: function onChange() {
    (0, _newArrowCheck2.default)(this, _this10);
  }.bind(void 0),
  onAdd: function onAdd() {
    (0, _newArrowCheck2.default)(this, _this10);
  }.bind(void 0),
  onRemove: function onRemove() {
    (0, _newArrowCheck2.default)(this, _this10);
  }.bind(void 0),
  listType: 'list'
}, _temp)) || _class);
var _default = Upload;
exports.default = _default;