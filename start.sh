#/bin/bash
npm install

tsc

env NODE_ENV=production
npm start

pm2 restart dist/backend/run.js