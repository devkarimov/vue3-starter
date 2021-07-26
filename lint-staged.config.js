'use strict'
module.exports = {
  '*.{ts,js,json,yml,yaml,md,html}': 'prettier --write',
  '*.{ts,js,vue,html}': 'eslint --cache --fix',
}
