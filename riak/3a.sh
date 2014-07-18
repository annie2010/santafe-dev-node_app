#
# put an image to a bucket via curl
# 
curl -v -XPUT -H "Content-type: image/jpeg" --data-binary @jean_sibelius.jpg http://127.0.0.1:10018/buckets/images/keys/1.jpg

#################
#* Hostname was NOT found in DNS cache
#*   Trying 127.0.0.1...
#* Connected to 127.0.0.1 (127.0.0.1) port 10018 (#0)
#> PUT /buckets/images/keys/1.jpg HTTP/1.1
#> User-Agent: curl/7.35.0
#> Host: 127.0.0.1:10018
#> Accept: */*
#> Content-type: image/jpeg
#> Content-Length: 611806
#> Expect: 100-continue
#> 
#< HTTP/1.1 100 Continue
#< HTTP/1.1 204 No Content
#< Vary: Accept-Encoding
#* Server MochiWeb/1.1 WebMachine/1.10.0 (never breaks eye contact) is not blacklisted
#< Server: MochiWeb/1.1 WebMachine/1.10.0 (never breaks eye contact)
#< Date: Fri, 18 Jul 2014 02:30:54 GMT
#< Content-Type: image/jpeg
#< Content-Length: 0
#< 
#* Connection #0 to host 127.0.0.1 left intact

