# 1) to install the required dependency packages:

sudo apt-get install build-essential libncurses5-dev openssl libssl-dev fop xsltproc unixodbc-dev

# 2) install download, build, and install Erlang (Riak requires Erlang R15B01)

wget http://erlang.org/download/otp_src_R15B01.tar.gz
tar zxvf otp_src_R15B01.tar.gz
cd otp_src_R15B01
./configure && make && sudo make install

################################
# Riak, Five-Minute Install
# 1. install erlang
# 2. install riak locally
# 3. build riak
# 4. start up 5 nodes
# 6. Python clients
################################
# http://docs.basho.com/riak/latest/quickstart/
# Ref:  http://docs.basho.com/riak/latest/ops/building/installing/erlang/#Installing-on-GNU-Linux
