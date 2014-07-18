#
# set bucket properties can also be used to enable the Search precommit hook as well
#
curl -v -XPUT -H "content-type:application/json" \
       http://localhost:10018/buckets/demo2/props -d @- << EOF
{"props":{"precommit":[{"mod":"riak_search_kv_hook","fun":"precommit"}]}}
EOF

## set bucket properties can also be used to enable the Search precommit hook as well
#################################
# ref: http://docs.basho.com/riak/latest/dev/advanced/search/
#################################
#
#* Hostname was NOT found in DNS cache
#*   Trying 127.0.0.1...
#* Connected to localhost (127.0.0.1) port 10018 (#0)
#> PUT /buckets/demo2/props HTTP/1.1
#> User-Agent: curl/7.35.0
#> Host: localhost:10018
#> Accept: */*
#> content-type:application/json
#> Content-Length: 73
#> 
#* upload completely sent off: 73 out of 73 bytes
#< HTTP/1.1 204 No Content
#< Vary: Accept-Encoding
#* Server MochiWeb/1.1 WebMachine/1.10.0 (never breaks eye contact) is not blacklisted
#< Server: MochiWeb/1.1 WebMachine/1.10.0 (never breaks eye contact)
#< Date: Fri, 18 Jul 2014 02:35:55 GMT
#< Content-Type: application/json
#< Content-Length: 0
#< 
#* Connection #0 to host localhost left intact
