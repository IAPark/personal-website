#/bin/bash
npm install
tsc
webpack
pm2 restart dist/backend/index.js
echo And we\'r running for real