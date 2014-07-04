#!/usr/bin/env node

//
// nemo2 connect api 
// ws://54.215.201.239:8084/db46e960-3f4c-4ad4-9f94-2814d2182dba/745918/event
//
host='54.215.201.239'
port=8084
//port=8087
dev_uuid='49ff3cdf-1a08-4541-9fb4-8c82f4e343c5'
dev_token='816505'
exchange='event'
url ='ws://' + host + ':' + port + '/' + dev_uuid +'/' + dev_token + '/' + exchange


//
// message to publish temperature data
//
d1='{"device.ip.santa_cruz_weather_station.temperature":{".update":{"value":75,"time":1403897308997,"counter":54,"unit":"F", "name":"IP_SENSOR-santa_cruz_weather_station"}}}'
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
  ws.send(data); 
  console.log("Published : ", data)
  ws.close(); 
}

ws.on('open', conn) 
