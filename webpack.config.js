const path = require('path');

module.exports = (env) => {
  console.log('环境变量 goal:', env.goal)
  console.log('环境变量 production:', env.production)

  return {
    entry: {
      index: './src/index.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
  }
  
};