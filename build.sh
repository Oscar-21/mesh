#!/bin/bash
npm run build
cd build
mv manifest.json ~/steve-backend/public/
mv sw.js ~/steve-backend/public/
mv favicon.ico ~/steve-backend/public/
mv index.html ~/steve-backend/public/
