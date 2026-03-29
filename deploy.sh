#!/bin/bash
set -e

git fetch

mkdocs build
mkdocs gh-deploy

git add .

read -p "Commit message: " msg
git commit -m "$msg"

git push
