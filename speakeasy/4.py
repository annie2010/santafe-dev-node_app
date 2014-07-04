#!/usr/bin/env python


import base64
my_key="This is interesting What is going on Need a long sentence carry on and take more"
secret = base64.b32encode(my_key)
print secret

from otpauth import OtpAuth

def otpauth_totp(f_key):
  print "\n1.b test totp"
  auth = OtpAuth(f_key) # default step=30
  code = auth.totp()
  assert auth.valid_totp(code)
  print "secret <%s> code <%s>" % (auth.secret, code)
  #print dir(auth) 
  print "completed successfully"

otpauth_totp(my_key)



'''
A) Algorithm recap:

1 - in python, choose a KEY
2 - in python, encode key in base32 as SECRET, to be used in speakeasy in node
3 - in python, generate token to totp using KEY 

4 - in  node,  generate token using base32 SECRET

5 - toke in 3 and token on 4 are the same

B) ref:
https://github.com/lepture/otpauth/blob/master/otpauth.py

class OtpAuth(object):
    """One Time Password Authentication.

  :param secret: A secret token for the authentication.
    """

    def __init__(self, secret):

    def totp(self, period=30):
'''
