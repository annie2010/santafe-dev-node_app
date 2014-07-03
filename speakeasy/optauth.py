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


def test_to_google_totp(f_provider,f_authKey):
  print "\n2.a test to google totp"
  auth   = OtpAuth('python')
  expect = 'otpauth://totp/python?secret='+f_authKey+'&issuer=' + f_provider
  assert auth.to_google('totp', 'python', 'python') == expect
  print "secret <%s> to_uri <%s>" % (auth.secret, expect)
  #print dir(auth) 
  print "completed successfully"


def test_to_uri_totp(f_provider,f_authKey):
  print "\n2.b test to uri totp"
  auth   = OtpAuth('python')
  expect = 'otpauth://totp/'+f_provider+'?secret='+f_authKey+'&issuer=' + f_provider
  assert auth.to_uri('totp', 'python', 'python') == expect
  print "secret <%s> to_uri <%s>" % (auth.secret, expect)
  #print dir(auth) 
  print "completed successfully"


def test_to_google_hotp(f_provider,f_authKey):
  print "\n3.a test to google hotp"
  auth   = OtpAuth('python')
  expect = 'otpauth://hotp/'+f_provider+'?secret=' + f_authKey + '&issuer='+f_provider+'&counter=4'
  assert auth.to_google('hotp', 'python', 'python', 4) == expect
  print "secret <%s> to_uri <%s>" % (auth.secret, expect)
  #print dir(auth) 
  print "completed successfully"

def test_to_uri_hotp(f_provider,f_authKey):
  print "\n3.b test to google hotp"
  auth = OtpAuth('python')
  expect     = 'otpauth://hotp/'+f_provider+'?secret=' + f_authKey + '&issuer='+f_provider+'&counter=4'
  assert auth.to_uri('hotp', 'python', 'python', 4)    == expect
  print "secret <%s> to_uri <%s>" % (auth.secret, expect)
  #print dir(auth) 
  print "completed successfully"



test_hotp()
test_totp()
test_to_google_totp('python','OB4XI2DPNY')
test_to_uri_totp('python','OB4XI2DPNY')
test_to_google_hotp('python','OB4XI2DPNY')
test_to_uri_hotp('python','OB4XI2DPNY')

#
# google-authenticator, Two-step verification
#
# https://code.google.com/p/google-authenticator/wiki/KeyUriFormat
## KeyUriFormat  
## The format of URIs containing encoded keys 
## Featured, Phase-Implementation
##
## otpauth://TYPE/LABEL?PARAMETERS
##
## Provision a TOTP key for user "alice@google.com", to use with a service provided by Example, Inc:
## otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example#

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

