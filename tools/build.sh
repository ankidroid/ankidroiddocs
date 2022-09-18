#!/bin/bash

MDBOOK="$HOME/mdbook-binaries"

if [ ! -d "$MDBOOK" ]; then
  (cd && git clone https://github.com/ankitects/mdbook-binaries.git)
fi

export PATH="$MDBOOK:$PATH"

if [ "$CHECK" = "" ]; then
    rm $HOME/mdbook-binaries/mdbook-linkcheck
fi

SRC_DIR=$(pwd)
MDBOOK_DIR=$SRC_DIR/mdbook

echo "cleaning docs dir"
rm -rf docs
mkdir docs

declare -a arr=("changelog" "en" "zh" "ar" "ja")

# build for each book
for book in "${arr[@]}"; do
   echo "building book for $book"
   # copy kbd.css to css dir of the book
   mkdir -p $MDBOOK_DIR/$book/css/
   cp $SRC_DIR/res/css/kbd.css $MDBOOK_DIR/$book/css/
   cd $MDBOOK_DIR/$book

   # add langauge buttons
   mkdir -p $MDBOOK_DIR/$book/js/
   cp $SRC_DIR/res/css/language-button.css $MDBOOK_DIR/$book/css/
   cp $SRC_DIR/res/js/language-button.js $MDBOOK_DIR/$book/js/

   mdbook build

   mv $SRC_DIR/docs/$book/html/* $SRC_DIR/docs/$book/

   # clean copied file from mdbook
   rm $MDBOOK_DIR/$book/css/kbd.css
   rm $MDBOOK_DIR/$book/css/language-button.css
   rm $MDBOOK_DIR/$book/js/language-button.js
done
