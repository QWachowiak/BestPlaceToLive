#!/bin/bash
# Import des données depuis les fichiers csv dans une base mongodb
mkdir bestplacetolive

wget -O bestplacetolive/watercomplaints.csv https://data.cityofnewyork.us/api/views/qfe3-6dkn/rows.csv?accessType=DOWNLOAD

wget -O bestplacetolive/subwaystations.csv https://data.cityofnewyork.us/api/views/kk4q-3rt2/rows.csv?accessType=DOWNLOAD

wget -O bestplacetolive/theaters.csv https://data.cityofnewyork.us/api/views/2hzz-95k8/rows.csv?accessType=DOWNLOAD
