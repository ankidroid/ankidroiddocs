ankidroiddocs
=============
Source files for the documentation on the AnkiDroid website ankidroid.org.

* manual.asc &rarr; [manual.html](https://ankidroid.org/docs/manual.html)
* help.asc &rarr; [help.html](https://ankidroid.org/docs/help.html)
* changelog.asc &rarr; [changelog.html](https://ankidroid.org/docs/changelog.html)

# Compilation
The documentation on this site is written in the Asciidoc syntax, and should be compiled with [Asciidoctor](http://asciidoctor.org/docs/install-toolchain/) as follows

## Install Asciidoctor
On Ubuntu you should be able to install with apt: `sudo apt-get install asciidoctor`

On Windows try the following:
  * [Install Ruby](https://www.ruby-lang.org/en/installation/)
  * Open command prompt with Ruby
  * Enter the command `gem install asciidoctor`

## Compile the .asc source files
  * Open terminal or command prompt with Ruby
  * Enter the command `asciidoctor FULL_PATH_TO_SOURCE_FILE`
  * A file will be generated with the same name as the source file, but with .html extension.

# Contributing translations and corrections

The preferred method of contributing to the documentation is to fork the `ankidroiddocs` project on github, and send a pull request with your additions in the usual way. However, if you don't know how to use github, you can simply download the "manual.asc" file and send it to a project member or the Google Group.

To create a translation of the manual, please make a copy of "manual.asc" and add "-LANUGAGE\_CODE" ([list of ISO\_639-1 language codes](http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)). For example for Italian submit a translated file called "manual-it.asc" based on the original source file.

Translations should be periodically updated to reflect any changes in the original manual. Details of all changes can be found in the [list of commits](https://github.com/ankidroid/ankidroiddocs/commits/master/).
