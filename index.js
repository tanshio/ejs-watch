const chokidar = require('chokidar')
const ejs = require('ejs')
const fs = require('fs')
const yargs = require('yargs').argv;

const default = {
  obj: null,
  output: '',
  watch: false,
}
// One-liner for current directory, ignores .dotfies
chokidar.watch('./test/test.ejs', {ignored: /(^|[\/\\])\..|node_modules/}).on('all', (event, path) => {
  console.log(event, path)

  const data = {}
  let options = {}
  ejs.renderFile(path, data, options, (err, str) => {
    if (err) throw err
    fs.writeFile('./test/test.html', str, (err) => {
      if (err) throw err
      console.log('It\'s saved!')
    })
  })

})
