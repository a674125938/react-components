"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hoistStatics;

function hoistStatics(targetComponent, sourceComponent) {
  if ('defaultProps' in sourceComponent) {
    targetComponent.defaultProps = sourceComponent.defaultProps;
  }

  return targetComponent;
}