#!/usr/bin/env node

process.on('exit', function(code){console.log('EXIT <%s>',code)})
process.on('uncaughtException', function(err){console.log('EXIT uncaughtException <%s>',err); process.exit(1)})

console.log("===Start")

speakeasy=require('speakeasy')
assert = require('assert')
util = require('util')

console.dir(speakeasy.totp)
console.log(util.inspect(speakeasy, { showHidden: true, depth: 0 }))
console.log(util.inspect(speakeasy.totp, { showHidden: true, depth: null }))
console.dir(assert.equal)
console.log(util.inspect(assert, { showHidden: true, depth: 0 }))
console.log(util.inspect(assert.equal, { showHidden: true, depth: null }))

a1=speakeasy.totp({key: 'secret'});
a2=speakeasy.totp({key: 'secret'});
console.log("a1 <%s>, a2 <%s>",a1, a2)
assert.equal(a1,a2)

b1=speakeasy.totp({key: 'secret', step: 60});
b2=speakeasy.totp({key: 'secret', step: 60});
console.log("b1 <%s>, b2 <%s>",b1, b2)
assert.equal(b1,b2)


console.log("===Completed successfully!")
