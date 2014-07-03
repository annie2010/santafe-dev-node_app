#!/usr/bin/env python

import onetimepass as otp
my_secret = 'MFRGGZDFMZTWQ2LK'
my_token = otp.get_totp(my_secret)
print my_token

# ref
# https://pypi.python.org/packages/source/o/onetimepass/onetimepass-0.1.2.tar.gz


# install
#  390  wget https://pypi.python.org/packages/source/o/onetimepass/onetimepass-0.1.2.tar.gz
#  391  tar -xvf onetimepass-0.1.2.tar.gz 
#  392  cd onetimepass-0.1.2/
#  393  python setup.py install

