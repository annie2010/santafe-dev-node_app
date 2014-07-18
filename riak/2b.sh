#
# riak cluster with 5 nodes
# 1. create 5 nodes
# 2. add nodes to a cluster
# 3. view cluster plan, test cluster
#
cd riak-1.4.10

# You can set the number of nodes you wish to create via DEVNODES To start these up
make devrel DEVNODES=5

#
cd dev; ls

#dev1/bin/riak start
for node in `ls`; do $node/bin/riak start; done

###################################
## start/stop/ping 5 nodes
## http://docs.basho.com/riak/latest/quickstart/#Start-Up-Five-Nodes 
###################################
# cd ~/riak_exp/riak-1.4.10/dev; for node in `ls`; do $node/bin/riak start; done; cd -
# cd ~/riak_exp/riak-1.4.10/dev; for node in `ls`; do $node/bin/riak stop; done; cd -
# cd ~/riak_exp/riak-1.4.10/dev; for node in `ls`; do $node/bin/riak ping; done; cd -

###################################
## join cluster
## http://docs.basho.com/riak/latest/ops/running/tools/riak-admin/
###################################
# cd ~/riak_exp/riak-1.4.10/dev; for n in {2..5}; do dev$n/bin/riak-admin cluster join dev1@127.0.0.1; done; cd -

## cluster plan
# cd ~/riak_exp/riak-1.4.10/dev; dev1/bin/riak-admin cluster plan; cd -
## test cluster
# cd ~/riak_exp/riak-1.4.10/dev; dev1/bin/riak-admin member-status; cd -
## commit the cluster via any node
# cd ~/riak_exp/riak-1.4.10/dev; dev2/bin/riak-admin cluster commit; cd -
## curl
# 

#######################################
# HTTP interface ports
# The above configuration sets up nodes with HTTP interfaces listening on ports 10018, 10028, 10038 and 10048 for dev1, dev2, dev3, dev4, and dev5 respectively. 
# The default port for single nodes to listen on is 8098, and users will need to take note of this when trying to use any of the default settings for Riak client libraries.
#
# check your etc/app.config file for the proper http port for your cluster):
#
# $find  . -name app.config
# ./riak-1.4.10/dev/dev2/etc/app.config
# ./riak-1.4.10/dev/dev4/etc/app.config
# ./riak-1.4.10/dev/dev3/etc/app.config
# ./riak-1.4.10/dev/dev1/etc/app.config
# ./riak-1.4.10/dev/dev5/etc/app.config
# ./riak-1.4.10/rel/files/app.config
#######################################

#######################################
# single node
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
