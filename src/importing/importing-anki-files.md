# Importing Anki Files

You can import Anki files (with .apkg file format) directly into AnkiDroid. Other file formats cannot be imported directly into AnkiDroid, however flashcards from most other applications can be imported into Anki Desktop on your computer, which can then be [added into AnkiDroid in the usual way](../anki-desktop.md). 
See the [importing section of the Anki Desktop manual](https://docs.ankiweb.net/importing.html) for help on importing into Anki Desktop.

As in Anki Desktop, AnkiDroid distinguishes between [the two types of .apkg files](https://docs.ankiweb.net/exporting.html) (**collection package** and **deck package**) based on the filename.  Collection packages have the name **collection.colpkg**, and when imported will completely _replace all contents_ in AnkiDroid. Any apkg file which is **_not_** named something that ends in **.colpkg** will be treated as a deck package, which will be _merged with any existing content_ when imported into to AnkiDroid.

You can import .apkg Anki collection files into AnkiDroid either by opening them using the standard Android system, or by manually importing them from within AnkiDroid:

## Open the file using Android
Apkg files are automatically associated with AnkiDroid, so for example if you open a .apkg email attachment which you sent to yourself, then AnkiDroid will automatically open the file and confirm if you want to import it. Simply click OK and the apkg file will be imported.

## Import the file manually in AnkiDroid
You can also manually import .apkg files as follows:

 * Connect your device to your computer using USB
 * Copy the .apkg from your computer to the AnkiDroid folder on your device
 * Open AnkiDroid on your device
 * From the main menu in the deck list, choose *Import*
 * Choose the apkg file you just copied to your device when prompted
 * Tap OK
 