cat 5.py 
#!/usr/bin/env python

import riak
#port =10018
port =10017

print "===Begin"
myClient = riak.RiakClient(pb_port=port, protocol='pbc')


myBucket = myClient.bucket('test')
val1 = 1
key1 = myBucket.new('one', data=val1)
key1.store()
print "\n\n===key1"
print key1
print dir(key1)

val2 = "two"
key2 = myBucket.new('two', data=val2)
key2.store()

val3 = {"myValue": 3}
key3 = myBucket.new('three', data=val3)
key3.store()

fetched1 = myBucket.get('one')
print "\n\n===fetched1"
print fetched1
print dir(fetched1)
print "siblings=[%s]" % fetched1.siblings
print "usermeta=[%s]" % fetched1.usermeta
print "key=[%s]" % fetched1.key
print "data=[%d]" % fetched1.data

fetched2 = myBucket.get('two')
fetched3 = myBucket.get('three')


assert val1 == fetched1.data
assert val2 == fetched2.data
assert val3 == fetched3.data

print "\n\nCompleted successfully!!"


# ref
## http://docs.basho.com/riak/latest/dev/taste-of-riak/python/
#  install riak client
## sudo apt-get install python-pip
## pip install riak
'''
$./5.py 
===Begin


===key1
<riak.riak_object.RiakObject object at 0x7f6c34218210>
['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_exists', '_get_resolver', '_resolver', '_set_resolver', 'add', 'add_index', 'add_link', 'bucket', 'charset', 'clear', 'client', 'content_encoding', 'content_type', 'data', 'delete', 'encoded_data', 'etag', 'exists', 'get_encoded_data', 'get_sibling', 'indexes', 'key', 'last_modified', 'link', 'links', 'map', 'reduce', 'reload', 'remove_index', 'remove_indexes', 'resolver', 'set_encoded_data', 'set_index', 'siblings', 'store', 'usermeta', 'vclock']


===fetched1
<riak.riak_object.RiakObject object at 0x7f6c34218250>
['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_exists', '_get_resolver', '_resolver', '_set_resolver', 'add', 'add_index', 'add_link', 'bucket', 'charset', 'clear', 'client', 'content_encoding', 'content_type', 'data', 'delete', 'encoded_data', 'etag', 'exists', 'get_encoded_data', 'get_sibling', 'indexes', 'key', 'last_modified', 'link', 'links', 'map', 'reduce', 'reload', 'remove_index', 'remove_indexes', 'resolver', 'set_encoded_data', 'set_index', 'siblings', 'store', 'usermeta', 'vclock']
siblings=[[<riak.content.RiakContent object at 0x7f6c34218910>]]
usermeta=[{}]
key=[one]
data=[1]


Completed successfully!!
'''
