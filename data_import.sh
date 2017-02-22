#!/bin/bash
# Téléchargement des données depuis le site open data de la ville de New-York
cd bestplacetolive

mongoimport -d bestplaceDB -c watercomplaints --type csv --file watercomplaints.csv --headerline

mongoimport -d bestplaceDB -c subwaystations --type csv --file subwaystations.csv --headerline

mongoimport -d bestplaceDB -c theaters --type csv --file theaters.csv --headerline
