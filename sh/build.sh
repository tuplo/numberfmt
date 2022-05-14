#!/usr/bin/env bash
set -euo pipefail

main() {
  rm -rf dist
  rm -rf cjs
  tsc --build tsconfig.build.json

  esbuild src/cjs/index.cjs --bundle --platform=node --outfile=dist/index.cjs
  esbuild src/index.ts --bundle --platform=node --format=esm --outfile=dist/index.mjs

  # node12 compatibility
  mkdir cjs && cp dist/index.cjs cjs/index.js
}

main
