#!/usr/bin/env bash
set -euo pipefail

main() {
  rm -rf dist
  tsc --build tsconfig.build.json

  esbuild src/index.ts \
    --bundle \
    --format=cjs \
    --minify \
    --outfile=dist/index.cjs.js

  esbuild src/index.ts \
    --bundle \
    --format=esm \
    --minify \
    --outfile=dist/index.esm.js

  rm dist/index.js
  rm -rf dist/formats dist/helpers dist/options
}

main
