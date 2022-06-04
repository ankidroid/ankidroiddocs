#!/bin/bash

MDBOOK="$HOME/mdbook-binaries"

if [ ! -d "$MDBOOK" ]; then
  (cd && git clone https://github.com/ankitects/mdbook-binaries.git)
fi

export PATH="$MDBOOK:$PATH"

if [ "$CHECK" = "" ]; then
    rm $HOME/mdbook-binaries/mdbook-linkcheck
fi

rm -rf docs
mkdir docs

# build for english
lang="en"
cd mdbook/$lang
mdbook build

cd ../../
cd docs
cp -r $lang/html/* $lang
rm -rf $lang/html/*


# build for chinese
lang="zh"
cd ..
cd mdbook/$lang
mdbook build

cd ../../
cd docs
cp -r $lang/html/* $lang
rm -rf $lang/html/*


# build for arabic
lang="ar"
cd ..
cd mdbook/$lang
mdbook build

cd ../../
cd docs
cp -r $lang/html/* $lang
rm -rf $lang/html/*

# build for japanese
lang="ja"
cd ..
cd mdbook/$lang
mdbook build

cd ../../
cd docs
cp -r $lang/html/* $lang
rm -rf $lang/html/*
