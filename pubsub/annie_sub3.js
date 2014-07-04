#!/usr/bin/env node

process.on('exit', function(code){console.log('EXIT <%s>',code);})
process.on('uncaughtException', function(err){console.log('EXIT uncaughtException <%s>',err); process.exit(1)})
//
// nemo2 connect api 
// wscat --connect ws://54.215.201.239:8081/5d86cc5c-6d4b-4bf8-f8bd-a6963b279fb1/026283/event
//
host='54.215.201.239'
port=8081
dev_uuid='49ff3cdf-1a08-4541-9fb4-8c82f4e343c5'

app_uuid='c1838690-6ec1-49d5-edd3-32da0b8114b4'
app_secret='KRUGS4ZANFZSA2LOORSXEZLTORUW4ZZAK5UGC5BANFZSAZ3PNFXGOIDPNYQE4ZLFMQQGCIDMN5XGOIDTMVXHIZLOMNSSAY3BOJZHSIDPNYQGC3TEEB2GC23FEBWW64TF'

speakeasy=require('speakeasy')
app_token=speakeasy.totp({key: app_secret, encoding : 'base32'});

exchange='event'
url ='ws://' + host + ':' + port + '/' + app_uuid +'/' + app_token + '/' + exchange

//
// message to subscribe temperature data
//
d1='{".insert":{"binding":"cloud.' + dev_uuid + '.device.ip.*.temperature"}}'
d2 = JSON.parse(d1)
data=JSON.stringify(d2)


//
// main
//
WebSocket = require('ws')

ws = new WebSocket(url); 
console.log("Connected : ", url)

conn = function(){
  ws.send(data); 
  console.log("Subscribed : ", data)
}

ws.on('message', function(data){ console.log('Received : ',data) })
ws.on('open', conn) 
