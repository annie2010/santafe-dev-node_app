#!/usr/bin/env node

process.on('exit', function(f_code){console.log('EXIT <%s>',f_code)});
process.on('uncaughtException', function(f_err){console.log('EXIT uncaughtException <%s>',f_err);process.exit(1)});

console.log("===Begin")

path=require('path')
console.log("\n==1. path ")
console.dir(path)

console.log("\n==2. __dirname")
console.log("dirname",__dirname)

console.log("\n==3. __filename")
fname = __filename
console.log("filename <%s>",fname)
console.log("dirname <%s>",path.dirname(fname))
console.log("basnename <%s>",path.basename(fname))
console.log("extname <%s>",path.extname(fname))

//throw('SanJose')
console.log("\n===Compleeted Successfully")

/** runtime

===Begin

==1. path 
{ resolve: [Function],
  normalize: [Function],
  isAbsolute: [Function],
  join: [Function],
  relative: [Function],
  sep: '/',
  delimiter: ':',
  dirname: [Function],
  basename: [Function],
  extname: [Function],
  exists: [Function: deprecated],
  existsSync: [Function: deprecated],
  _makeLong: [Function] }

==2. __dirname
dirname /home/ubuntu/node_app/nodejitsu/01_repl

==3. __filename
filename </home/ubuntu/node_app/nodejitsu/01_repl/01_read_eval_print_loop.js>
dirname </home/ubuntu/node_app/nodejitsu/01_repl>
basnename <01_read_eval_print_loop.js>
extname <.js>

===Compleeted Successfully
**/

/** ref

node api
- global module, http://nodejs.org/docs/latest/api/globals.html
- path module, http://nodejs.org/api/path.html

nodejitsu
- http://docs.nodejitsu.com/articles/REPL/how-to-use-nodejs-repl

**/
