#!/bin/bash
set -e
# Only run on normal commits, ignore pull requests.
if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
  # Decrypt private key: https://docs.travis-ci.com/user/encrypting-files/
  # Environment variables are defined in the Travis project settings.
  openssl aes-256-cbc -K $encrypted_3a5998253966_key -iv $encrypted_3a5998253966_iv -in tools/id_rsa.enc -out tools/id_rsa -d
  chmod 600 tools/id_rsa
  # Add private key to agent
  eval $(ssh-agent) > /dev/null
  ssh-add tools/id_rsa
  # Disable host key checking
  echo -e "Host ankidroid.org\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
  # Clone remote branch into _site/
  git clone travis@ankidroid.org:/home/travis/ankidroiddocs.git _site/
  # Convert *.asc files to HTML5 and write them into _site/
  asciidoctor *.asc -D _site/
  # Copy images
  cp -r img _site/
  # Copy icons and manifest
  cp icons/* _site/
  # Push changes to remote branch
  cd _site/
  git config user.name "Travis CI"
  git config user.email travis@ankidroid.org
  git add -A .
  git commit -m "Update site (Travis Build $TRAVIS_BUILD_NUMBER)."
  git push origin master
fi
