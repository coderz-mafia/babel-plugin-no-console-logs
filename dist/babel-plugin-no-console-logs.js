"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var types = _interopRequireWildcard(require("@babel/types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _default(_ref) {
  var t = _ref.types;
  return {
    name: "babel-plugin-no-console-logs",
    visitor: {
      CallExpression: function CallExpression(path) {
        if (types.isMemberExpression(path.get('callee').node) && path.get('callee').node.object.name === 'console') {
          return path.remove();
        }
      }
    }
  };
}