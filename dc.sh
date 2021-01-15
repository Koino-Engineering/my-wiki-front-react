#!/bin/bash
docker-compose \
-f docker-compose.yml \
-f ./modules/api/docker-compose.yml \
-f ./modules/api/modules/back/docker-compose.yml \
-f docker-compose.front.override.yml \
$@
