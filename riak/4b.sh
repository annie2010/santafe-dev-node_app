#
# fetch props via curl
# 
curl -v http://localhost:10018/buckets/demo2/props

#################################
# ref: http://docs.basho.com/riak/latest/dev/advanced/search/
#################################
# 
# * Hostname was NOT found in DNS cache
# *   Trying 127.0.0.1...
# * Connected to localhost (127.0.0.1) port 10018 (#0)
# > GET /buckets/demo2/props HTTP/1.1
# > User-Agent: curl/7.35.0
# > Host: localhost:10018
# > Accept: */*
# > 
# < HTTP/1.1 200 OK
# < Vary: Accept-Encoding
# * Server MochiWeb/1.1 WebMachine/1.10.0 (never breaks eye contact) is not blacklisted
# < Server: MochiWeb/1.1 WebMachine/1.10.0 (never breaks eye contact)
# < Date: Fri, 18 Jul 2014 02:37:47 GMT
# < Content-Type: application/json
# < Content-Length: 470
# < 
# * Connection #0 to host localhost left intact
# {"props":{"allow_mult":false,"basic_quorum":false,"big_vclock":50,"chash_keyfun":{"mod":"riak_core_util","fun":"chash_std_keyfun"},"dw":"quorum","last_write_wins":false,"linkfun":{"mod":"riak_kv_wm_link_walker","fun":"mapreduce_linkfun"},"n_val":3,"name":"demo2","notfound_ok":true,"old_vclock":86400,"postcommit":[],"pr":0,"precommit":[{"mod":"riak_search_kv_hook","fun":"precommit"}],"pw":0,"r":"quorum","rw":"quorum","small_vclock":50,"w":"quorum","young_vclock":20}}

###############
# set prop
###############
#
# {"props":
# {"precommit":[{"mod":"riak_search_kv_hook","fun":"precommit"}]
# }}
#
###############
# get prop
###############
#
# {"props":{
# "allow_mult":false,
# "basic_quorum":false,
# "big_vclock":50,
# "chash_keyfun":{"mod":"riak_core_util","fun":"chash_std_keyfun"},
# "dw":"quorum",
# "last_write_wins":false,
# "linkfun":{"mod":"riak_kv_wm_link_walker","fun":"mapreduce_linkfun"},
# "n_val":3,
# "name":"demo2",
# "notfound_ok":true,
# "old_vclock":86400,
# "postcommit":[],
# "pr":0,
# "precommit":[{"mod":"riak_search_kv_hook","fun":"precommit"}],
# "pw":0,
# "r":"quorum",
# "rw":"quorum",
# "small_vclock":50,
# "w":"quorum",
# "young_vclock":20}}
