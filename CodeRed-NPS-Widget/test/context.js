
var path = require('path')
var fs = require('fs')
var assert = require('assert')
var argv = require('optimist').demand('config').argv
var configFilePath = argv.config
assert.ok(fs.existsSync(configFilePath), 'config file not found at path: ' + configFilePath)
var config = require('nconf').env().argv().file({ file: configFilePath })
var context = config.get('context')
var testEnv = context.env

import * as dev from '../lib/dev/codered_nps_widget.js';
import * as prod from '../lib/prod/codered_nps_widget.min.js';

let testObjects = testEnv === "prod" ? prod : dev;

export default testObjects;
