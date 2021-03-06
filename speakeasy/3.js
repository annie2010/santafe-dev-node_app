#!/usr/bin/env node

process.on('exit', function(code){console.log('EXIT <%s>',code)})
process.on('uncaughtException', function(err){console.log('EXIT uncaughtException <%s>',err); process.exit(1)})

console.log("===Start")

speakeasy=require('speakeasy')
assert = require('assert')
util = require('util')

secret = 'Q7897UMBNVAEY6KV31LJ651YCYHUC1S1J36XTM2D92EEDSXB9ZF3MTS17F7I9PB0'

c1=speakeasy.totp({key: secret, length:6, encoding:'ascii', step: 30});
c2=speakeasy.totp({key: secret});
console.log("totp with step=30, c1 <%s>, c2 <%s>",c1, c2)
assert.equal(c1,c2)

c1=speakeasy.totp({key: secret, encoding : 'base32'});
c2=speakeasy.totp({key: secret, encoding : 'base32'});
console.log("totp with default step=30 encoding in base32, c1 <%s>, c2 <%s>",c1, c2)
assert.equal(c1,c2)

console.log("===Completed successfully!")

/**
ref
1) node, 
https://github.com/markbao/speakeasy/blob/master/test/test_totp.js

2) python
https://pypi.python.org/pypi/onetimepass/0.1.2
**/

/**
seapkeasy api

https://github.com/markbao/speakeasy/blob/master/lib/speakeasy.js

// speakeasy.hotp(options)
//
// Calculates the one-time password given the key and a counter.
//
// options.key                  the key
//        .counter              moving factor
//        .length(=6)           length of the one-time password (default 6)
//        .encoding(='ascii')   key encoding (ascii, hex, or base32)
**/
