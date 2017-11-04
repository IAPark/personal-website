#/bin/bash
npm install

tsc

pm2 restart dist/backend/index.js