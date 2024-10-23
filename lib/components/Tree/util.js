"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedStatus = void 0;

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _this = void 0;

var getSelectedStatus = function getSelectedStatus(keys, selectedMap, disabledKeys) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  if (!(keys !== null && keys !== void 0 && keys.length) && !(disabledKeys !== null && disabledKeys !== void 0 && disabledKeys.length) || !Object.keys(selectedMap).length) return 'NONE';
  var total = keys.length;
  var count = 0;
  keys.forEach(function (v) {
    (0, _newArrowCheck2.default)(this, _this2);

    if (selectedMap[v]) {
      count++;
    }
  }.bind(this));

  if (count === 0 && disabledKeys !== null && disabledKeys !== void 0 && disabledKeys.length) {
    var disabledSelectedCount = 0;
    disabledKeys.forEach(function (v) {
      (0, _newArrowCheck2.default)(this, _this2);

      if (selectedMap[v]) {
        disabledSelectedCount++;
      }
    }.bind(this));
    if (disabledSelectedCount > 0) return 'SOME';
  }

  return count === 0 ? 'NONE' : total === count ? 'ALL' : 'SOME';
}.bind(void 0);

exports.getSelectedStatus = getSelectedStatus;