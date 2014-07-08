#!/usr/bin/env node

var net = require("net"),
    repl = require("repl");

connections = 0;

repl.start({
  prompt: "node via stdin> ",
  input: process.stdin,
  output: process.stdout
});

net.createServer(function (socket) {
  connections += 1;
  repl.start({
    prompt: "node via Unix socket> ",
    input: socket,
    output: socket
  }).on('exit', function() {
    socket.end();
  })
}).listen("/tmp/node-repl-sock"); // Unix socket

net.createServer(function (socket) {
  connections += 1;
  repl.start({
    prompt: "node via TCP socket> ",
    input: socket,
    output: socket
  }).on('exit', function() {
    socket.end();
  });
}).listen(5001); // TCP socket


/** ref
node api
- repl module, http://nodejs.org/api/repl.html

socat
- http://stuff.mit.edu/afs/sipb/machine/penguin-lust/src/socat-1.7.1.2/EXAMPLES

nodejitsu
- http://docs.nodejitsu.com/articles/REPL/how-to-create-a-custom-repl
**/
/** recap

1) local repl
=============

$./03_repl.js 

node via stdin> 2+2
4
node via stdin> 

2) unix-socket repl connecting via "socat"
=========================================

$socat UNIX:/tmp/node-repl-sock -

node via Unix socket> 5 + 5
10
node via Unix socket> 

3.a) tcp-socket repl connecting via "telnet"
===========================================

$telnet localhost 5001

Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
node via TCP socket> 2+2
4
node via TCP socket> 

3.b) tcp-socket repl connecting via "socat"
===========================================

$socat - TCP:localhost:5001

node via TCP socket> 7+7
14
node via TCP socket> 


**/
/** more on socat

// from another terminal, connect to this socket

$socat UNIX:/tmp/node-repl-sock -
node via Unix socket> 5 + 5
10
node via Unix socket> 


http://stuff.mit.edu/afs/sipb/machine/penguin-lust/src/socat-1.7.1.2/EXAMPLES

///////////////////////////////////////////////////////////////////////////////
// unix socket handling

// create a listening unix socket
$ rm -f /tmp/mysocket; socat UNIX-LISTEN:/tmp/mysocket -
// from another terminal, connect to this socket
$ socat UNIX:/tmp/mysocket -
// then transfer data bidirectionally
**/

/** more on socat

1) local repl

$./03_repl.js 

node via stdin> 2+2
4

node via stdin> 

2.A) socat similar to telnet or netcat 

$ socat - TCP:localhost:5001

node via TCP socket> 7+7
14
node via TCP socket> 

ref:http://stuff.mit.edu/afs/sipb/machine/penguin-lust/src/socat-1.7.1.2/EXAMPLES 

2.B) socat which acts as a proxy on port=4444

$socat -v TCP-LISTEN:4444 TCP:localhost:5001

2.a) 
< 2014/07/07 23:14:13.074221  length=21 from=0 to=20
node via TCP socket> 

2.b) 3+3
> 2014/07/07 23:15:05.256956  length=5 from=0 to=4
3+3\r
< 2014/07/07 23:15:05.258906  length=2 from=21 to=22
6
< 2014/07/07 23:15:05.259765  length=21 from=23 to=43
node via TCP socket>

2.c) 2+2
> 2014/07/07 23:16:10.071897  length=5 from=5 to=9
2+2\r
< 2014/07/07 23:16:10.073086  length=23 from=44 to=66
4
node via TCP socket> 


3) telnet to access tcp-5001 service via proxy-4444

$telnet localhost 4444

Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.

node via TCP socket> 3+3
6

node via TCP socket> 2+2
4
node via TCP socket

**/

/** setup
$ sudo apt-get install socat

socat
- Socat is a relay for bidirectional data transfer between two independent data channels.
- http://freecode.com/projects/socat

$ socat -v TCP-LISTEN:4444 TCP:localhost:5001

$ telnet localhost 4444
node via TCP socket> 5+5 
10

http://superuser.com/questions/23180/whats-the-easiest-way-to-sniff-tcp-traffic-data-on-linux
$ socat -v TCP-LISTEN:4444 TCP:localhost:1234
hello
**/

/** sample runtime
Running this program from the command line will 
- start a REPL on stdin. 
- Other REPL clients may connect through the Unix socket or TCP socket. 
- telnet is useful for connecting to TCP sockets, and socat can be used to connect to both Unix and TCP sockets.

1) local repl
=============
$./03_repl.js 
node via stdin> 1+1
2
node via stdin>

2) remote repl via telnet
=========================
$telnet localhost 5001

Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
node via TCP socket> 2+2
4
node via TCP socket> 

**/

