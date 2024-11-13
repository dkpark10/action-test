const ghPages = require('gh-pages');

ghPages.publish('dist', {
  repo: 'https://github.com/dkpark10/action-test.git',
}, function (err) {
  console.log(err);
  throw new Error('page deploy error', err);
});
