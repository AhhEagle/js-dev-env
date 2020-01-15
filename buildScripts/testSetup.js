//Register babel to transpile before our test runs 
require('babel-register')();

//Disable webpack feature that mocha doesn't understand
require.extensions['.css'] = function(){};