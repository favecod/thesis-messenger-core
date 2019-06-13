require('app-module-path').addPath(__dirname)
require('dotenv').config()

const App = require('./app')
global.config = require('./config')

new App()