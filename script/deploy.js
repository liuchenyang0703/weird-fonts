const ghPages = require('gh-pages');

ghPages.publish('exampleDist', function (err) {
  console.log(err)
});