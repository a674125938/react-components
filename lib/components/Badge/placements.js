"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bubblePlacement = exports.default = void 0;
var placements = {
  topRight: {
    points: ['cc', 'tr']
  },
  topLeft: {
    points: ['cc', 'tl']
  },
  bottomRight: {
    points: ['cc', 'br']
  },
  bottomLeft: {
    points: ['cc', 'bl']
  },
  top: {
    points: ['cc', 'tc']
  },
  bottom: {
    points: ['cc', 'bc']
  },
  left: {
    points: ['cc', 'cl']
  },
  right: {
    points: ['cc', 'cr']
  }
};
var _default = placements;
exports.default = _default;
var bubblePlacement = {
  points: ['bl', 'tr'],
  overflow: {
    adjustX: 1,
    adjustY: 1
  },
  offset: [0, -5]
};
exports.bubblePlacement = bubblePlacement;