'use strict'

const path = require('path')
const fs = require('fs')
const PLUGIN_INDEX_FILE = 'scripts/tools/eslint-plugin-prettier-internal-rules/index.js'

let plugin
for (
  let currentDirectory = __dirname;
  path.dirname(currentDirectory) !== currentDirectory;
  currentDirectory = path.dirname(currentDirectory)
) {
  const file = path.join(currentDirectory, PLUGIN_INDEX_FILE)
  if (fs.existsSync(file)) {
    plugin = require(file)
    break
  }
}


module.exports = plugin
