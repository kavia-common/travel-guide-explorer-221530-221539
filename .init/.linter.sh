#!/bin/bash
cd /home/kavia/workspace/code-generation/travel-guide-explorer-221530-221539/travel_guide_frontend
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

