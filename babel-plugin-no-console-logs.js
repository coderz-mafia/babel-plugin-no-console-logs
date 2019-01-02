module.exports = function ({ types: t }) {
  return {
    name: "babel-plugin-no-console-logs",
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