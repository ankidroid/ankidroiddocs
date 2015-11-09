ankidroiddocs
=============
Source files for the documentation on the AnkiDroid website ankidroid.org.

The documentation is written in the Asciidoc syntax, and should be compiled with [Asciidoctor](http://asciidoctor.org/docs/install-toolchain/)

# Compilation

First install Asciidoctor:
  * [Install Ruby](https://www.ruby-lang.org/en/installation/)
  * Open command prompt with Ruby
  * Enter the command `gem install asciidoctor`

Then compile the manual as follows:
  * Open command prompt with Ruby
  * Enter the command `asciidoctor FULL_PATH_TO_SOURCE_FILE`
  * A file will be generated with the same name as the source file, but with .html extension.

The preferred method of contributing to the documentation is to fork the `ankidroiddocs` project on github, and send a pull request with your additions in the usual way. However, if you don't know how to use github, you can simply download the "manual.txt" file and send it to a project member or the Google Group.

To create a translation of the manual, please make a copy of "manual.txt" and add "-LANUGAGE\_CODE" ([list of ISO\_639-1 language codes](http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)). For example for Italian submit a translated file called "manual-it.txt" based on the original source file.

Translations should be periodically updated to reflect any changes in the original manual. Details of all changes can be found in the [list of commits](https://github.com/ankidroid/ankidroiddocs/commits/master/).
