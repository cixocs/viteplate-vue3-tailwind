/* eslint-disable no-console */
// const env = process.env.BUILD_ENV || 'production';
// const path = require('path');
const del = require('del');

const patterns = ['dist/**/.DS_Store', 'dist/ssr-manifest.json'];

(async () => {
  await del(patterns);
  console.log('Prepared dist...!!!');
})();
