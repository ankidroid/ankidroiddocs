# Importing Anki Databases (.anki2)
 
AnkiDroid does not support directly importing Anki database (`.anki2`) files. A database import will replace your collection with the contents the provided file. If you want to perform a full replacement, you should import a `collection[.apkg/.colpkg]` created in the app with the export function.
 
## Importing anki2 files manually

This is not officially supported, but `.anki2` files can manually be imported if needed, in cases of troubleshooting for example:

* Create a new folder on your Android file system
* Obtain the full path to the folder as provided by your file manager, this will typically appear as: `/storage/emulated/0/<FolderName>`
* Place the `.anki2` file in the newly created folder
* Rename the file to `collection.anki2`
* (If applicable) Temporarily log out of your AnkiWeb account: `Settings - AnkiDroid - AnkiWeb account`
* Open `Settings - Advanced - AnkiDroid Directory` and set the AnkiDroid Directory to the newly created folder.
