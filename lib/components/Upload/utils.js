"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkFile = exports.openLink = exports.getFileType = exports.readFile = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _fileBytesFormatter = _interopRequireDefault(require("file-bytes-formatter"));

var _generateError = _interopRequireDefault(require("../../utils/generateError"));

var _this = void 0;

var readFile = function readFile(file) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);

  var _reader = new FileReader();

  return new Promise(function (resolve, reject) {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);

    _reader.onload = function (e) {
      (0, _newArrowCheck2.default)(this, _this3);
      resolve(e.target.result);
    }.bind(this);

    _reader.onerror = function (e) {
      (0, _newArrowCheck2.default)(this, _this3);
      reject(e);
    }.bind(this);

    _reader.readAsDataURL(file);
  }.bind(this));
}.bind(void 0);

exports.readFile = readFile;

var getApplicationIcon = function getApplicationIcon(t2) {
  (0, _newArrowCheck2.default)(this, _this);

  switch (t2) {
    case 'pdf':
    case 'msword':
    case 'vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 'docs';

    case 'zip':
    case 'x-rar':
    case 'x-bzip':
    case 'x-bzip2':
    case 'gzip':
      return 'archive';

    default:
      return 'unknown';
  }
}.bind(void 0);

var getFileType = function getFileType(file) {
  (0, _newArrowCheck2.default)(this, _this);
  var type = file.type;

  var _ref = (type === null || type === void 0 ? void 0 : type.split('/')) || [],
      _ref2 = (0, _slicedToArray2.default)(_ref, 2),
      t1 = _ref2[0],
      t2 = _ref2[1];

  switch (t1) {
    case 'image':
      return 'image';

    case 'text':
      return 'docs';

    case 'application':
      return getApplicationIcon(t2);

    default:
      return 'unknown';
  }
}.bind(void 0);

exports.getFileType = getFileType;

var openLink = function openLink(link) {
  (0, _newArrowCheck2.default)(this, _this);
  return window.open(link, '_blank');
}.bind(void 0);
/** 检查文件类型和大小 */


exports.openLink = openLink;

var checkFile = function checkFile(file) {
  var accept = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
  var maxSize = arguments.length > 2 ? arguments[2] : undefined;
  var locale = arguments.length > 3 ? arguments[3] : undefined;
  var types = accept.split(/\s*,\s*/);
  var typeCheckPass = false;

  for (var index in types) {
    var type = types[index];
    var regexp = void 0,
        pass = void 0;

    if (/^\./.test(type)) {
      regexp = new RegExp(type.replace('.', '\\.') + '$');
      pass = regexp.test(file.name);
    } else {
      regexp = new RegExp(type.replace('*', '.*').replace('.', '\\.'));
      pass = regexp.test(file.type);
    }

    if (pass) {
      typeCheckPass = true;
      break;
    }
  }

  var sizeCheckPass = maxSize === undefined || file.size <= maxSize;

  if (!typeCheckPass) {
    return (0, _generateError.default)(locale.typeErrorTip.replace('{accept}', accept), 'FileTypeError');
  }

  if (!sizeCheckPass) {
    return (0, _generateError.default)(locale.maxSizeErrorTip.replace('{size}', (0, _fileBytesFormatter.default)(maxSize)), 'FileSizeError');
  }

  return true;
};

exports.checkFile = checkFile;