#!/bin/bash
# Initialisation

#Installation de mongodb
bash mongo_install.sh

#Lancement du service de MongoDB
sudo service mongod start

#Téléchargement des données
bash data_download.sh

#Import en base
bash data_import.sh
