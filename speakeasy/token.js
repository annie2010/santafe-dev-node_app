#!/usr/bin/env node

speakeasy=require('speakeasy')

secrets=['49ff3cdf-1a08-4541-9fb4-8c82f4e343c5',
'a21659c9-4f4c-49b7-a473-c7f5eb1ddab2',
'db46e960-3f4c-4ad4-9f94-2814d2182dba',
'5d86cc5c-6d4b-4bf8-f8bd-a6963b279fb1',
'388fd04f-6356-41e7-92a3-b76e55449ddf',
'7369e0fb-ce56-4362-f7f3-76b6eb6cbaf5'
] 


secrets.forEach(function(k){
  t=speakeasy.hotp({key:k,counter:582})
  console.log(t)
})
