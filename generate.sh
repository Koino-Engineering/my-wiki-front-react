#!/bin/bash

echo "down started compose"
./dc.sh down

echo "Rebuild"
./dc.sh build

echo "compose up"
./dc.sh up -d --remove-orphans

echo "waiting up end"
sleep 30

echo "Regeneration"
./dc.sh \
    run --rm \
    api generate \
    -i http://back:5000/swagger.json \
    -l typescript-fetch \
    -c /src/swagger-config.json \
    -o /src/src/modules/api \
    --type-mappings Date=string

echo "compose down"
./dc.sh down
