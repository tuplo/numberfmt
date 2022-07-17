#!/usr/bin/env bash
set -euo pipefail

main() {
  LANG=en-GB jest --watch "${@}"
}

main "${@}"
