#!/bin/sh

cd /home
rm -rf agent_client
git clone git@github.com:litufu/agent_client.git
cd agent_client
yarn
npm run build
cd /home/node_server
cd rm -rf build
cp -r /home/agent_client/build/ /home/node_server/build/
pm2 stop app
pm2 delete app
pm2 start app.js