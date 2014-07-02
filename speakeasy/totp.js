#!/usr/bin/env node

process.on('exit', function(code){console.log('EXIT <%s>',code)})
process.on('uncaughtException', function(err){console.log('EXIT uncaughtException <%s>',err); process.exit(1)})

console.log("===Start")

speakeasy=require('speakeasy')
a=speakeasy.totp({key: 'secret'});
console.dir(a)

console.log("===Completed successfully!")
