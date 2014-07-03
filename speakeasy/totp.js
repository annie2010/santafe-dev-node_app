#!/usr/bin/env node

process.on('exit', function(code){console.log('EXIT <%s>',code)})
process.on('uncaughtException', function(err){console.log('EXIT uncaughtException <%s>',err); process.exit(1)})

console.log("===Start")

speakeasy=require('speakeasy')
assert = require('assert')
util = require('util')

/**
console.dir(speakeasy.totp)
console.log(util.inspect(speakeasy, { showHidden: true, depth: 0 }))
console.log(util.inspect(speakeasy.totp, { showHidden: true, depth: null }))
console.dir(assert.equal)
console.log(util.inspect(assert, { showHidden: true, depth: 0 }))
console.log(util.inspect(assert.equal, { showHidden: true, depth: null }))
**/

a1=speakeasy.totp({key: 'secret'});
a2=speakeasy.totp({key: 'secret'});
console.log("a1 <%s>, a2 <%s>",a1, a2)
assert.equal(a1,a2)

b1=speakeasy.totp({key: 'secret', step: 60});
b2=speakeasy.totp({key: 'secret', step: 60});
console.log("b1 <%s>, b2 <%s>",b1, b2)
assert.equal(b1,b2)

c1=speakeasy.totp({key: 'python', step: 30});
c2=speakeasy.totp({key: 'python', step: 30});
console.log("c1 <%s>, c2 <%s>",c1, c2)
assert.equal(c1,c2)

c1=speakeasy.totp({key: 'python', step: 60});
c2=speakeasy.totp({key: 'python', step: 60});
console.log("c1 <%s>, c2 <%s>",c1, c2)
assert.equal(c1,c2)


d='\n1. Test normal operation with key = \'12345678901234567890\' at time = 59'
console.log(d)
c=speakeasy.totp({key: '12345678901234567890', time: 59});
console.log("c <%s>",c)
assert.equal(c, '287082');

d='\n2. Test a different time normal operation with key = \'12345678901234567890\' at time = 1111111109'
console.log(d)
c=speakeasy.totp({key: '12345678901234567890', time: 1111111109});
console.log("c <%s>",c)
assert.equal(c, '081804');

d='\n3. Test length parameter with key = \'12345678901234567890\' at time = 1111111109 and length = 8'
console.log(d)
c=speakeasy.totp({key: '12345678901234567890', time: 1111111109, length: 8})
console.log("c <%s>",c)
assert.equal(c, '07081804');

d='\n4. Test hexadecimal encoding with key = \'3132333435363738393031323334353637383930\' as hexadecimal at time 1111111109'
console.log(d)
c=speakeasy.totp({key: '3132333435363738393031323334353637383930', encoding: 'hex', time: 1111111109});
console.log("c <%s>",c)
assert.equal(c, '081804');

d='\n5. Test base32 encoding with key = \'GEZDGNBVGY3TQOJQGEZDGNBVGY3TQOJQ\' as base32 at time 1111111109'
console.log(d)
c=speakeasy.totp({key: 'GEZDGNBVGY3TQOJQGEZDGNBVGY3TQOJQ', encoding: 'base32', time: 1111111109});
console.log("c <%s>",c)
assert.equal(c, '081804');

d='\n6. Test a custom step with key = \'12345678901234567890\' at time = 1111111109 with step = 60'
console.log(d)
c=speakeasy.totp({key: '12345678901234567890', time: 1111111109, step: 60});
console.log("c <%s>",c)
assert.equal(c, '360094');


d='\n7. Test initial time with key = \'12345678901234567890\' at time = 1111111109 and initial time = 1111111100'
console.log(d)
c=speakeasy.totp({key: '12345678901234567890', time: 1111111109, initial_time: 1111111100});
console.log("c <%s>",c)
assert.equal(c, '755224');

console.log("===Completed successfully!")

/**
ref
1) node, 
https://github.com/markbao/speakeasy/blob/master/test/test_totp.js

2) python
https://pypi.python.org/pypi/onetimepass/0.1.2
**/
