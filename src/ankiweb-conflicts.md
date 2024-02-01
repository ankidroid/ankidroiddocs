# Dealing with merge conflicts on AnkiWeb
Although it should not happen often, occasionally you may end up in the position where your cards on AnkiDroid can not be automatically merged with the cards on AnkiWeb. In this case it's necessary to choose to either upload to or download from AnkiWeb, which would overwrite any changes on the other side. 

If you have new cards on both sides which you want to keep, before syncing you can [export a deck package](exporting.md) for each deck containing new cards from AnkiDroid, then when you do the sync choose **download** to download from AnkiWeb. After the synchronization has completed, you can import the decks you previously exported from AnkiDroid, as per the [importing section](importing/importing-anki-files.md).

## Via USB

If you don't have regular internet access, it's still possible to copy decks back and forth to your device, by using USB.

The USB method works by importing or exporting all your decks at once. This means that unlike syncing via AnkiWeb, you can't make changes from two locations at once and then merge them. Instead, if you wish to add cards on the desktop, you need to make sure you export the latest version of your collection from your mobile device first, or you'll end up losing any reviews done on the mobile device.

Thus the workflow you would typically use is to export your collection from your mobile device and import it into the desktop, make modifications on the desktop, and then export your collection and import it back into your mobile device.

AnkiDroid can't directly import text files. If you wish to do that, you'll need to do that with the desktop program, and then import your collection into AnkiDroid.

### Copy all decks from Anki Desktop to AnkiDroid via USB

On your computer:
 1. Open the desktop program.
 2. Choose File>Export from the menu.
 3. Click the **Export...** button. Make sure to leave **all decks** selected, as it's not possible to import individual decks into AnkiDroid. **Include scheduling information** must also remain checked.
 4. Anki will automatically create a collection.apkg on your desktop. If the file is named something else, please see the previous step again.
 5. Connect your Android device to your computer via the USB cable.
 6. Open the file explorer on your computer and view the contents of your Android device.
 7. Locate the AnkiDroid folder.
 8. Drag the collection.apkg file from your desktop into this AnkiDroid folder.
 
Then in AnkiDroid:
 1. From the main decks screen, tap **Import file** from the menu
 2. Tap on **Collection** and then confirm

Once complete, the decks on your device will have been replaced with the decks from your desktop. See the section on 
[importing apkg files](importing/importing-anki-files.md) for more help with importing.

### Copy all decks from AnkiDroid to Anki Desktop via USB

The process to copy your decks from AnkiDroid to Anki Desktop is essentially the same as above, but in reverse.
 1. Start with your device disconnected from USB
 2. Choose **Export collection** from the main menu in the Deck Screen
 3. Ensure **Include scheduling information** remains checked and press **OK**
 4. Connect device to computer using USB
 5. Copy the **collection.apkg** from the path specified in the message to the desktop on your computer
 6. Double click on the file to import into Anki Desktop
 
See the [exporting section](exporting.md) below for more detailed information on exporting from AnkiDroid.
