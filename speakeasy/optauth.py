#!/usr/bin/env python

from otpauth import OtpAuth

def test_hotp():
  print "\n1.a test hotp"
  auth = OtpAuth('python')
  code = auth.hotp()
  assert auth.valid_hotp(code)
  print "secret <%s> code <%s>" % (auth.secret, code)
  #print dir(auth) 
  print "completed successfully"

def test_totp():
  print "\n1.b test totp"
  auth = OtpAuth('python')
  code = auth.totp()
  assert auth.valid_totp(code)
  print "secret <%s> code <%s>" % (auth.secret, code)
  #print dir(auth) 
  print auth.secret
  print "completed successfully"

def test_to_google_totp():
  print "\n2. test to google totp"
  auth = OtpAuth('python')
  expect = 'otpauth://totp/python?secret=OB4XI2DPNY&issuer=python'
  #assert auth.to_google('totp', 'python', 'python') == expect
  assert auth.to_uri('totp', 'python', 'python') == expect
  print "secret <%s> to_uri <%s>" % (auth.secret, expect)
  #print dir(auth) 
  print "completed successfully"

def test_to_google_hotp():
  print "\n3. test to google hotp"
  auth = OtpAuth('python')
  expect     = 'otpauth://hotp/python?secret=OB4XI2DPNY&issuer=python&counter=4'
  #assert auth.to_google('hotp', 'python', 'python', 4) == expect
  assert auth.to_uri('hotp', 'python', 'python', 4)    == expect
  print "secret <%s> to_uri <%s>" % (auth.secret, expect)
  #print dir(auth) 
  print "completed successfully"

test_hotp()
test_totp()
test_to_google_totp()
test_to_google_hotp()

#
# google-authenticator, Two-step verification
#
# https://code.google.com/p/google-authenticator/wiki/KeyUriFormat
#
###########################
# 
# https://github.com/lepture/otpauth/blob/master/test_otpauth.py
#
########################
# 2-step authentication
########################
#
# ref
# https://pypi.python.org/pypi/otpauth/0.2.0
#
# install
# $ sudo pip install otpauth 

