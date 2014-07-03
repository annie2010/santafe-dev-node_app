#!/usr/bin/env python

import onetimepass as otp
my_secret = 'MFRGGZDFMZTWQ2LK'
my_token = otp.get_totp(my_secret)
print my_token

#######################
# pypi/onetimepass
######################
#
# desc 
#  Module for generating and validating HOTP and TOTP tokens
#
# ref
#  https://pypi.python.org/pypi/onetimepass/0.2.2
#
# install
#  390  wget https://pypi.python.org/packages/source/o/onetimepass/onetimepass-0.1.2.tar.gz
#  391  tar -xvf onetimepass-0.1.2.tar.gz 
#  392  cd onetimepass-0.1.2/
#  393  python setup.py install


#######################
# pypi/getotp
######################
#
# desc - Store and retrieve TOTP secrets/tokens.
#
# ref
# - https://pypi.python.org/pypi/getotp/0.0.3
#
# install
#  415  wget https://pypi.python.org/packages/source/g/getotp/getotp-0.0.3.tar.gz
#  416  tar -xvf getotp-0.0.3.tar.gz 
#  417  cd getotp-0.0.3/

