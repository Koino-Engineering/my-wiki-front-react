#!/bin/bash
docker-compose \
-f docker-compose.yml \
-f ./modules/back/docker-compose.yml \
-f docker-compose.front.override.yml \
$@
