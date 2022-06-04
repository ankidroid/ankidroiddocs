#!/bin/bash

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
