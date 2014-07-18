# download riak source and build
wget http://s3.amazonaws.com/downloads.basho.com/riak/1.4/1.4.10/riak-1.4.10.tar.gz
# http://docs.basho.com/riak/latest/downloads/

tar -xvf riak-1.4.10.tar.gz
cd riak-1.4.10
make all

# Start Up Five Nodes
# http://docs.basho.com/riak/latest/quickstart/#Install-Riak
#
# a. Build riak from source
# b. Use rebar,  a packaging and build system for Erlang applications, to
# c. Get five self-contained Riak nodes running on your machine.
#
# riak newbie, http://lists.basho.com/pipermail/riak-users_lists.basho.com/2012-June/008642.html
