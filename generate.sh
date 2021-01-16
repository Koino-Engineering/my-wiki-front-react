#!/bin/bash

echo "down started compose"
./dc.sh down

echo "Rebuild"
./dc.sh build

echo "compose up"
./dc.sh up -d --remove-orphans

echo "waiting up end"
sleep 60

echo "Regeneration"
./dc.sh exec api swagger-codegen generate -i http://back:5000/swagger.json -l typescript-fetch -o ./src/modules/

echo "compose down"
./dc.sh down
