'use strict'

const path = require('path')
const fs = require('fs')
const PLUGIN_INDEX_FILE = 'scripts/tools/eslint-plugin-prettier-internal-rules/index.js'

let currentDirectory = __dirname
while (
  path.dirname(currentDirectory) !== currentDirectory &&
  !fs.existsSync(path.join(currentDirectory, PLUGIN_INDEX_FILE))
) {
  currentDirectory = path.dirname(currentDirectory);
}

module.exports = fs.existsSync(path.join(currentDirectory, PLUGIN_INDEX_FILE)) ? require(currentDirectory) : {}
