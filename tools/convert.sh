#!/bin/bash
set -e

# For troubleshooting:
echo TRAVIS_PULL_REQUEST is "$TRAVIS_PULL_REQUEST"
echo TRAVIS_BRANCH is "$TRAVIS_BRANCH"
echo TRAVIS_REPO_SLUG is "$TRAVIS_REPO_SLUG"
echo TRAVIS_SECURE_ENV_VARS is "$TRAVIS_SECURE_ENV_VARS"

# Only run on normal commits to master, ignore pull requests.
if [ "${TRAVIS_PULL_REQUEST}" != "false" ] || [ "${TRAVIS_BRANCH}" != "master" ]; then
  echo "Checkout and publish only happens for regular commits to master"
  exit 0;
fi

# Only attempt to do this for the actual ankidroiddocs repo
if [ "${TRAVIS_REPO_SLUG}" != "ankidroid/ankidroiddocs" ]; then
  echo "Checkout and publish is only valid for the official repository"
  exit 0;
fi

# We won't be able to do anything if we don't have the secure environment variable present
# shellcheck disable=SC2154
if [ "${TRAVIS_SECURE_ENV_VARS}" = "false" ] || [ "$encrypted_3a5998253966_key" = "" ]; then
  echo "Secure environment variables not present. Publish is not possible."
  exit 1
fi

# Decrypt private key: https://docs.travis-ci.com/user/encrypting-files/
# Environment variables are defined in the Travis project settings.
# shellcheck disable=SC2154
openssl aes-256-cbc -K "$encrypted_3a5998253966_key" -iv "$encrypted_3a5998253966_iv" -in tools/id_rsa.enc -out tools/id_rsa -d
chmod 600 tools/id_rsa
# Add private key to agent
eval "$(ssh-agent)" > /dev/null
ssh-add tools/id_rsa
# Disable host key checking
echo -e "Host ankidroid.org\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
# Clone remote branch into _site/
git clone travis@ankidroid.org:/home/travis/ankidroiddocs.git _site/
# Convert *.asc files to HTML5 and write them into _site/
asciidoctor ./*.asc -D _site/
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
