"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _style = require("./style");

var _utils = require("./utils");

var _Archive = _interopRequireDefault(require("./icons/Archive"));

var _Docs = _interopRequireDefault(require("./icons/Docs"));

var _Image = _interopRequireDefault(require("./icons/Image"));

var _Unknown = _interopRequireDefault(require("./icons/Unknown"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var IconMap = {
  archive: _Archive.default,
  docs: _Docs.default,
  image: _Image.default,
  unknown: _Unknown.default
};
var iconClassNameMap = {
  archive: _style.archiveIconCls,
  docs: _style.docsIconCls,
  image: _style.imageIconCls,
  unknown: _style.unknownIconCls
};

var getFileIcon = function getFileIcon() {
  var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var type = (0, _utils.getFileType)(file);
  var Icon = IconMap[type];
  var className = iconClassNameMap[type];
  return /*#__PURE__*/_react.default.createElement(Icon, {
    size: "20px",
    className: (0, _classnames.default)(_style.iconCls, className)
  });
};

function Thumbnail(_ref) {
  var _this = this;

  var file = _ref.file,
      className = _ref.className;

  var _useState = (0, _react.useState)(file.thumbnailUrl),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      thumbnailUrl = _useState2[0],
      setThumbnailUrl = _useState2[1];

  (0, _react.useEffect)(function () {
    var _this2 = this;

    (0, _newArrowCheck2.default)(this, _this);

    if (file.thumbnailUrl) {
      setThumbnailUrl(file.thumbnailUrl);
    } else if (file instanceof File && (0, _utils.getFileType)(file) === 'image') {
      (0, _utils.readFile)(file).then(function (dataUrl) {
        (0, _newArrowCheck2.default)(this, _this2);
        return setThumbnailUrl(dataUrl);
      }.bind(this));
    } else {
      setThumbnailUrl(null);
    }

    return function () {
      (0, _newArrowCheck2.default)(this, _this2);
    }.bind(this);
  }.bind(this), [file]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_style.thumbnailCls, className)
  }, thumbnailUrl ? /*#__PURE__*/_react.default.createElement("div", {
    className: _style.imageCls,
    style: {
      backgroundImage: "url(".concat(thumbnailUrl, ")")
    }
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: _style.iconWrapCls
  }, getFileIcon(file)));
}

Thumbnail.propTypes = {
  file: _propTypes.default.object,
  className: _propTypes.default.string
};
var _default = Thumbnail;
exports.default = _default;