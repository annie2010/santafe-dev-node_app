# 1) First you must get the signing key.
curl http://apt.basho.com/gpg/basho.apt.key | sudo apt-key add -

# 2) Then add the Basho repository to your apt sources list (and update them).

sudo bash -c "echo deb http://apt.basho.com $(lsb_release -sc) main > /etc/apt/sources.list.d/basho.list"
sudo apt-get update

# 3) Now install the riak package.

sudo apt-get install riak

#######################################
#######################################
#######################################
# 1) start riak
#
# $ sudo riak start
# $ sudo riak stop
# !!!!
# !!!! WARNING: ulimit -n is 1024; 4096 is the recommended minimum.
# !!!!
# 
# 2) test the readiness of an individual Riak node 
# 
# 2.a) via riak-admin
# 
# $ riak-admin test
# Successfully completed 1 read/write cycle to 'riak@127.0.0.1'
# 
# 2.b) via curl
# 
# $curl -v http://127.0.0.1:8098/riak/test
# > 
# < HTTP/1.1 200 OK
# 
# 3) doc on post installation
# 
# http://docs.basho.com/riak/latest/ops/building/installing/post-install/
