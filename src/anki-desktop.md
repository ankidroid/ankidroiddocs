# Using Anki Desktop with AnkiDroid

<!-- toc -->

Anki has a free cloud synchronization service called AnkiWeb that makes it easy to keep your card decks in sync between mobile devices and your computer. If you cannot use sync for some reason, it's also possible to use USB, though this method is more laborious.

Note that AnkiDroid is not affiliated with Anki Desktop or AnkiWeb. AnkiDroid is based on Anki Desktop but it is developed by an entirely separate community of volunteers.

![AnkiDesktop.png](img/AnkiDesktop.png)

## Via Cloud Sync
Before you can use AnkiWeb, you'll first need to create an account by visiting [https://ankiweb.net](https://ankiweb.net) and clicking the **Sign Up** button. If you have used AnkiWeb in the past, you can skip this step. After signing up, see the corresponding instructions below, depending on whether you are trying to get your existing decks into AnkiDroid or out of AnkiDroid.

### Sync existing decks into a new AnkiDroid install
In this scenario you have some existing Anki decks that you want to copy into a new install of AnkiDroid by syncing with AnkiWeb. Open the Anki client with your existing decks (usually this would be Anki desktop, but it could also mean a version of AnkiDroid you have been using on another device), and click the synchronization button (which has two arrows in a circle) at the top right of the deck list.

If you have never used AnkiWeb before you will need to enter your credentials if prompted, and then press the **Upload to AnkiWeb** button to confirm overwriting the empty collection on AnkiWeb with your existing decks in Anki. Anki will upload all your cards, images and audio to AnkiWeb. If you have a lot of media, this may take some time.

Once the synchronization has completed, open AnkiDroid in the device that you are trying to copy the existing decks into, and tap the **Sync** button in the app bar at the top of the main [deck list](deck-picker.md). 
After entering your AnkiWeb credentials, AnkiDroid will download all your cards and media, and remember your login information for next time.

Note that if you have any existing material in AnkiDroid before attempting to sync, you may be shown a message asking you to choose to either download from AnkiWeb, or upload to AnkiWeb. If you are happy to lose the cards in AnkiDroid then simply choose **Download**. If you need to merge the existing cards with AnkiDroid then you should see the [resolving conflicts](anki-desktop.md#dealing-with-merge-conflicts-on-ankiweb) section before continuing.

After the first synchronization has completed, you can click the sync button again any time you wish to synchronize your changes to the cloud. Only changes made since the previous sync will be sent, so subsequent syncs are a lot faster.

If you add some new cards on the desktop computer and want to sync them to AnkiDroid, you'd repeat the same basic process: sync on desktop (or close the program, as it syncs automatically on close by default), and then tap the sync button on AnkiDroid.

### Sync from AnkiDroid to Computer
The process of syncing from AnkiDroid to computer is essentially the same as syncing from computer to AnkiDroid, but in reverse.

From the [deck list](deck-picker.md), tap the sync button in the top right (it has two arrows in a circle). If it's your first time using AnkiWeb, you may need to enter your login credentials, and then press the "upload" button to upload your AnkiDroid collection to AnkiWeb.

Once the synchronization has completed, open Anki Desktop on your computer and press the sync button there (with two arrows in a circle), and Anki will download your collection.

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
