#!/bin/bash
node-sass --output-style compressed style/main.scss --source-map true -o public;
ts-node build.tsx;