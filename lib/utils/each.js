"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(arr, func) {
  var l = arr.length;

  for (var i = 0; i < l; i++) {
    var _item = arr[i];
    func(_item);
  }
}