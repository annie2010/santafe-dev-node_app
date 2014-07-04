#!/usr/bin/env python


host     = 'localhost'
user     = 'annie'
password = 'passwd'
vhost    = 'test'
que      = 'annie-event'


'''
using pika to delete a que
'''

import pika

creds  = pika.PlainCredentials(user, password)
params = pika.ConnectionParameters(host, credentials=creds, virtual_host=vhost)
conn   = pika.BlockingConnection(params)
ch     = conn.channel()

ch.queue_delete(queue=q1)
ch.queue_delete(queue=q2)
ch.queue_delete(queue=q3)
print "Deleted queues <%s>" % que

conn.close()
print "Completed successfully"

''' sample runtime
1.a) create a que
1.b) inspect the que

2.a) delete a que
2.b) inspect the que
'''

'''
ref
http

# install
# $ sudo pypi install pika
'''
