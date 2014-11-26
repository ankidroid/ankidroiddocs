#!/bin/bash
# Environment variables are defined in the Travis project settings.
set -ev
if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
  cd $TRAVIS_BUILD_DIR
  # Clone gh-pages branch into _site/
  git clone -q -b gh-pages https://$GH_TOKEN@github.com/ankidroid/ankidroiddocs.git _site/
  # Convert *.txt files to HTML5 and write them into _site/
  asciidoctor *.txt -D _site/
  # Push changes to gh-pages branch
  cd _site/
  git config user.email $GIT_EMAIL
  git config user.name "$GIT_NAME"
  git add -A .
  git commit -m "Update site (Travis Build $TRAVIS_BUILD_NUMBER)."
  git push -q origin gh-pages
fi
