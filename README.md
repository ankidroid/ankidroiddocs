# ankidroiddocs

## View manual
[[English](http://docs.ankidroid.net/en/)]
[[中文](http://docs.ankidroid.net/zh/)]
[[日本語](http://docs.ankidroid.net/ja/)]
[[اللغة العربية](http://docs.ankidroid.net/ar/)]

## Preview

Pull requests generate the HTML manual as an artifact which can be viewed on the [GitHub Actions](https://github.com/ankidroid/ankidroiddocs/actions) page.

## Compilation
The documentation on this site is implemented using [mdBook](https://rust-lang.github.io/mdBook/), and should be compiled with [mdbook-binaries](https://github.com/ankitects/mdbook-binaries)

## Install mdbook-binaries
```
cd && git clone https://github.com/ankitects/mdbook-binaries.git
export PATH="$HOME/mdbook-binaries:$PATH"
```

View [mdbook-binaries](https://github.com/ankitects/mdbook-binaries.git) for building the binaries.

## Compile the mdBook source files
1. Enter ankidroiddocs
   ```
   cd ankidroiddocs
   ```

2. Run scripts in tools to build, 
   ```
   ./tools/build.sh
   ```
   
   `CHECK` used for link check in md files
   ```
   CHECK=1 ./tools/build.sh
   ```
   
3. The generated files are copied to docs directory
4. Run localhost from docs directory
   ```
   cd docs

   python -m http.server
   ```
5. Now view the pages in browser on localhost:8000

## Contributing translations and corrections

The preferred method of contributing to the documentation is to fork the `ankidroiddocs` project on github, and send a pull request with your additions in the usual way.

To create a translation of the manual

1. Create a directory in `mdbook` with language code as name ([list of ISO\_639-1 language codes](http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes))

2. Create `book.toml` file in the new directory
3. Create `src` directory
4. Create `SUMMARY.md` in `src` directory
5. Now add topic wise `.md` file and table of contents in `SUMMARY.md`
6. Directory structure for English language, `en` as language code
```
mdbook
  └── en
       └── src
       │    └── SUMMARY.md
       │    └── intro.md
       └── book.toml
```

Translations should be periodically updated to reflect any changes in the original manual. Details of all changes can be found in the [list of commits](https://github.com/ankidroid/ankidroiddocs/commits/main/).
