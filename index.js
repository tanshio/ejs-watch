var chokidar = require('chokidar');
var ejs = require('ejs');

// One-liner for current directory, ignores .dotfies
chokidar.watch('.', {ignored: /(^|[\/\\])\..|node_modules/}).on('all', (event, path) => {

  console.log(event, path)

  const data = {}
  options = {}
  ejs.renderFile(path, data, options, function(err, str){
    // str => Rendered HTML string
    console.log(err);
    console.log(str);
  });

});
