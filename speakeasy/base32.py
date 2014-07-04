#!/usr/bin/env python


import base64

k1='Milky Way is limited to the hazy band of' # ws1
k2='Geological history of Mars can be split ' # ws2
k3='Inspiration for Nemo sprang from experie' # sub

from otpauth import OtpAuth
def otpauth_totp(f_key):
  print "\n1.b test totp"
  auth = OtpAuth(f_key) # default step=30
  code = auth.totp()
  assert auth.valid_totp(code)
  print "secret <%s> code <%s>" % (auth.secret, code)
  #print dir(auth) 
  print "completed successfully"


s1 = base64.b32encode(k1)
print s1
otpauth_totp(k1)

s2 = base64.b32encode(k2)
print s2
otpauth_totp(k2)

s3 = base64.b32encode(k3)
print s3
otpauth_totp(k3)
