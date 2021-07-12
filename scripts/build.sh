#!/usr/bin/env bash

rimraf dist
rimraf cjs
tsc --build tsconfig.build.json

esbuild src/index.cjs --bundle --platform=node --outfile=dist/index.cjs
esbuild src/index.ts --bundle  --platform=node --format=esm --outfile=dist/index.mjs

# node12 compatibility
mkdir cjs && cp dist/index.cjs cjs/index.js
