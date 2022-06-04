MDBOOK="$HOME/mdbook-binaries"

if [ ! -d "$MDBOOK" ]; then
  (cd && git clone https://github.com/ankitects/mdbook-binaries.git)
fi

export PATH="$MDBOOK:$PATH"

# clean for english
lang="en"
cd mdbook/$lang
mdbook clean
cd ../../

# clean for chinese
lang="zh"
cd mdbook/$lang
mdbook clean
cd ../../

# clean for arabic
lang="ar"
cd mdbook/$lang
mdbook clean
cd ../../

# clean for japanese
lang="ja"
cd mdbook/$lang
mdbook clean
cd ../../