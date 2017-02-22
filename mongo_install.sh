#!/bin/bash
# Installation de MongoDB
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 –recv 0C49F3730359A14518585931BC711F9BA15703C6

echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

sudo apt-get update

sudo apt-get install -y mongodb-org

#Installation et lancement de robomongo
wget https://download.robomongo.org/0.9.0/linux/robomongo-0.9.0-linux-x86_64-0786489.tar.gz

tar -xzvf robomongo-0.9.0-linux-x86_64-0786489.tar.gz

cd robomongo-0.9.0-linux-x86_64-0786489/bin

sudo ./robomongo
