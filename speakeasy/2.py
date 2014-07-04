#!/usr/bin/env python

from otpauth import OtpAuth

def test_totp():
  print "\n1.b test totp"
  secret= 'dev_annie_04'
  auth = OtpAuth(secret)
  code = auth.totp()
  assert auth.valid_totp(code)
  print "secret <%s> code <%s>" % (auth.secret, code)
  #print dir(auth) 
  print "completed successfully"

test_totp()
