#!/usr/bin/env python

'''
//
// nemo2 connect api 
// wscat --connect ws://54.215.201.239:8081/5d86cc5c-6d4b-4bf8-f8bd-a6963b279fb1/026283/event
//
'''
host='54.215.201.239'
port='8081'
dev_uuid='49ff3cdf-1a08-4541-9fb4-8c82f4e343c5'
app_uuid='c1838690-6ec1-49d5-edd3-32da0b8114b4'


from otpauth import OtpAuth
app_key="This is interesting What is going on Need a long sentence carry on and take more"
auth = OtpAuth(app_key)
app_token = auth.totp()

exchange='event'
url ='ws://' + host + ':' + port + '/' + app_uuid +'/' + str(app_token) + '/' + exchange

import json
d1='{".insert":{"binding":"cloud.' + dev_uuid + '.device.ip.*.temperature"}}'
d2 = json.loads(d1)
data = json.dumps(d2)

'''
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
'''

import websocket 

def on_error(ws, error):
  print error

def on_close(ws):
  print "### closed ###"

def on_message(ws, message):
  print "Received %s" % message

def on_open(ws):
  ws.send(data)
  print "Subscribed %s" % data

if __name__ == "__main__":
  ws = websocket.WebSocketApp(url,
                              on_message = on_message,
                              on_error = on_error,
                              on_close = on_close)
  print "Connected %s" % url

  ws.on_open = on_open
  ws.run_forever()

