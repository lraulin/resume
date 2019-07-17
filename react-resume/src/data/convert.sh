#!/bin/sh

# Convert YAML file to JSON.
FILE=$1
FILENAME="${FILE%.*}"
yq r -j ${FILE} > "${FILENAME}.json"