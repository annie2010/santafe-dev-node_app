# 1) First you must get the signing key.
curl http://apt.basho.com/gpg/basho.apt.key | sudo apt-key add -

# 2) Then add the Basho repository to your apt sources list (and update them).

sudo bash -c "echo deb http://apt.basho.com $(lsb_release -sc) main > /etc/apt/sources.list.d/basho.list"
sudo apt-get update

# 3) Now install the riak package.

sudo apt-get install riak

