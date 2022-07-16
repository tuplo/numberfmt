#!/usr/bin/env bash
set -euo pipefail

main() {
  rm -rf dist
  tsc --build tsconfig.build.json

  esbuild src/index.ts \
    --bundle \
    --minify \
    --outfile=dist/index.cjs.js \
    --platform=node

  esbuild src/index.ts \
    --bundle \
    --format=esm \
    --outfile=dist/index.esm.js

  rm dist/index.js
  rm -rf dist/formats dist/helpers dist/options
}

main
