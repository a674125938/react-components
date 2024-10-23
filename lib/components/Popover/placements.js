"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getPlacements = void 0;
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];

var getPlacements = function getPlacements() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var adjust = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return {
    topLeft: {
      points: ['bl', 'tl'],
      overflow: adjust ? autoAdjustOverflow : {},
      offset: [0, -offset],
      targetOffset: targetOffset
    },
    top: {
      points: ['bc', 'tc'],
      overflow: adjust ? autoAdjustOverflow : {},
      offset: [0, -offset],
      targetOffset: targetOffset
    },
    topRight: {
      points: ['br', 'tr'],
      overflow: adjust ? autoAdjustOverflow : {},
      offset: [0, -offset],
      targetOffset: targetOffset
    },
    bottomLeft: {
      points: ['tl', 'bl'],
      overflow: adjust ? autoAdjustOverflow : {},
      offset: [0, offset],
      targetOffset: targetOffset
    },
    bottom: {
      points: ['tc', 'bc'],
      overflow: adjust ? autoAdjustOverflow : {},
      offset: [0, offset],
      targetOffset: targetOffset
    },
    bottomRight: {
      points: ['tr', 'br'],
      overflow: adjust ? autoAdjustOverflow : {},
      offset: [0, offset],
      targetOffset: targetOffset
    },
    leftTop: {
      points: ['tr', 'tl'],
      overflow: adjust ? autoAdjustOverflow : {},
      offset: [-offset, 0],
      targetOffset: targetOffset
    },
    left: {
      points: ['cr', 'cl'],
      overflow: adjust ? autoAdjustOverflow : {},
      offset: [-offset, 0],
      targetOffset: targetOffset
    },
    leftBottom: {
      points: ['br', 'bl'],
      overflow: adjust ? autoAdjustOverflow : {},
      offset: [-offset, 0],
      targetOffset: targetOffset
    },
    rightTop: {
      points: ['tl', 'tr'],
      overflow: adjust ? autoAdjustOverflow : {},
      offset: [offset, 0],
      targetOffset: targetOffset
    },
    right: {
      points: ['cl', 'cr'],
      overflow: adjust ? autoAdjustOverflow : {},
      offset: [offset, 0],
      targetOffset: targetOffset
    },
    rightBottom: {
      points: ['bl', 'br'],
      overflow: adjust ? autoAdjustOverflow : {},
      offset: [offset, 0],
      targetOffset: targetOffset
    }
  };
};

exports.getPlacements = getPlacements;

var _default = getPlacements();

exports.default = _default;