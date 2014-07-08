#!/usr/bin/env node

process.on('exit', function(f_code){console.log('EXIT <%s>',f_code)});
process.on('uncaughtException', function(f_err){console.log('EXIT uncaughtException <%s>',f_err);process.exit(1)});

console.log("==Begin")

net=require('net')
repl=require('repl')

remote_repl_port = 5001

mood = function(){
  m = ["^__^", "-__-", ">.<", "<_>"]
  r = Math.random() * m.length
  i = Math.floor(r)
  //console.log("r <%s> i <%s>",r,i)
  return m[i]
}



net.createServer(function (socket){
  remote = repl.start("node::remote> ",socket)
  remote.context.mood = mood
  remote.context.bonus = "UNLOCKED"
}).listen(remote_repl_port)
console.log("Remote REPL started om port <%s>", remote_repl_port)



local = repl.start("node::local> ")
//console.dir(local.context)
local.context.mood = mood // Ctl-D to stop

//throw('San Jose')
//console.log("==Completed Successfully")

/** sample runtime

1) local customized repl

$./02_cust_repl.js 

==Begin
Remote REPL started om port <5001>
node::local> 2+2
4
node::local> mood() <--------------------------------------
'^__^'


2) remote customized repl

$telnet localhost 5001

Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
node::remote> mood() <-------------------------------
'-__-'
node::remote> mood()
'<_>'
node::remote> 5+5
10
node::remote> 


**/

/** ref
node api
- net module,
- repl module, http://nodejs.org/api/repl.html

nodejitsu
- http://docs.nodejitsu.com/articles/REPL/how-to-create-a-custom-repl
**/
