"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(babel) {
  var t = babel.types;
  return {
    name: "babel-plugin-no-console-logs",
    // not required
    visitor: {
      CallExpression: function CallExpression(path) {
        if (compare(path)) {
          return path.remove();
        }
      }
    }
  };
}

function compare(path) {
  var callee = path.get('callee');

  if (callee.node.type === 'MemberExpression' && callee.node.object.name === 'console') {
    return true;
  }

  return false;
}