#!/usr/bin/env bash
set -euo pipefail

main() {
  echo "${@}"
  LANG=en-GB jest --ci "${@}"
}

main "${@}"
