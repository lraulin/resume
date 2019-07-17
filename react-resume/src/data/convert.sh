#!/bin/sh

# Convert YAML file to JSON.
FILENAME="${1%.*}"
yq r -j ${1} > "${FILENAME}.json"