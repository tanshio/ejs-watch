var chokidar = require('chokidar');

// One-liner for current directory, ignores .dotfies
chokidar.watch('.', {ignored: /(^|[\/\\])\..|node_modules/}).on('all', (event, path) => {
  console.log(event, path);
});
