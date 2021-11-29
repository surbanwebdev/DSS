#!/bin/bash

client=$(lsof -t -i:8080)
api=$(lsof -t -i:8081)

if [ $client > 0 ]
then 
   kill -9 $client
fi

if [ $api > 0 ]
then 
   kill -9 $api
fi

(cd ./client && npm run server) & (cd ./server && npm start) && fg