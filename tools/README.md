tools
=====

This folder contains scripts that are intended to convert the Asciidoctor files to HTML (https://github.com/ankidroid/ankidroiddocs/blob/master/tools/convert.sh) on each commit on Travis. The HTML files are then pushed to a Git repository on the ankidroid.org server where they are automatically placed into the `docs` folder in the wwwroot of nginx using a `post-receive` hook (https://github.com/ankidroid/ankidroiddocs/blob/master/tools/post-receive). The SSH key that allows password-less `push` from Travis to the ankidroid.org server is also stored encrypted in this folder (https://github.com/ankidroid/ankidroiddocs/blob/master/tools/id_rsa.enc) and is decrypted on Travis using an environment variable that can be managed in the Travis user interface.
