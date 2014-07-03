#!/usr/bin/env node

process.on('exit', function(code){console.log('EXIT <%s>',code)})
process.on('uncaughtException', function(err){console.log('EXIT uncaughtException <%s>',err); process.exit(1)})

console.log("===Start")

speakeasy=require('speakeasy')
assert = require('assert')
util = require('util')

c1=speakeasy.totp({key: 'python', step: 30});
c2=speakeasy.totp({key: 'python', step: 30});
console.log("c1 <%s>, c2 <%s>",c1, c2)
assert.equal(c1,c2)

console.log("===Completed successfully!")

/**
ref
1) node, 
https://github.com/markbao/speakeasy/blob/master/test/test_totp.js

2) python
https://pypi.python.org/pypi/onetimepass/0.1.2
**/
