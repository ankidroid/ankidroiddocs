#!/bin/bash
# Environment variables are defined in the Travis project settings.
set -ev
if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
  cd $TRAVIS_BUILD_DIR
  # Add private key to agent
  chmod 600 tools/id_rsa
  ssh-add tools/id_rsa
  # Clone remote branch into _site/
  git clone travis@ankidroid.org:/home/travis/ankidroiddocs.git _site/
  # Convert *.txt files to HTML5 and write them into _site/
  asciidoctor *.txt -D _site/
  # Push changes to remote branch
  cd _site/
  git config user.name "Travis CI"
  git config user.email travis@ankidroid.org
  git add -A .
  git commit -m "Update site (Travis Build $TRAVIS_BUILD_NUMBER)."
  git push origin master
fi
