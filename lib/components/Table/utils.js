"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setColumnConfigToLocalStorage = exports.getColumnConfigFromLocalStorage = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _mapValues2 = _interopRequireDefault(require("lodash/mapValues"));

var _merge2 = _interopRequireDefault(require("lodash/merge"));

var _this = void 0;

var getColumnConfigFromLocalStorage = function getColumnConfigFromLocalStorage(columnConfigKey, defaultConfig) {
  (0, _newArrowCheck2.default)(this, _this);

  if (typeof localStorage === 'undefined' || localStorage === null) {
    return defaultConfig;
  }

  var localConfig = JSON.parse(localStorage.getItem(columnConfigKey));

  if (localConfig) {
    return (0, _merge2.default)({}, defaultConfig, localConfig);
  } else {
    return defaultConfig;
  }
}.bind(void 0);

exports.getColumnConfigFromLocalStorage = getColumnConfigFromLocalStorage;

var setColumnConfigToLocalStorage = function setColumnConfigToLocalStorage(columnConfigKey, config) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);

  if (typeof localStorage === 'undefined' || localStorage === null) {
    return;
  }

  localStorage.setItem(columnConfigKey, JSON.stringify((0, _mapValues2.default)(config, function (v) {
    (0, _newArrowCheck2.default)(this, _this2);
    return {
      hidden: v.hidden
    };
  }.bind(this))));
}.bind(void 0);

exports.setColumnConfigToLocalStorage = setColumnConfigToLocalStorage;