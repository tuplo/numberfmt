#!/usr/bin/env bash

rimraf dist
rimraf cjs
tsc --build tsconfig.build.json

esbuild src/index.cjs --bundle --platform=node --outfile=dist/index.cjs
esbuild src/index.ts --bundle --format=esm --outfile=dist/index.js

# node12 compatibility
mkdir cjs && cp dist/index.cjs cjs/index.js
