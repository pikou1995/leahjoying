#!/bin/sh

git pull
npm install && npm run build
rm -f /etc/nginx/sites-enabled/*
cp -a love.conf /etc/nginx/sites-enabled/
nginx -s reload
