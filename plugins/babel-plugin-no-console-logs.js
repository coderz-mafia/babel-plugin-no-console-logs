import * as types from '@babel/types';

export default function ({ types: t }) {
  return {
    name: "babel-plugin-no-console-logs",
    visitor: {
      CallExpression: function CallExpression(path) {
        if (types.isMemberExpression(path.get('callee').node) &&
        path.get('callee').node.object.name === 'console') {
          return path.remove();
        }
      }
    }
  };
}