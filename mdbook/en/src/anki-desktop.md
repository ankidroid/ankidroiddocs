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

Note that if you have any existing material in AnkiDroid before attempting to sync, you may be shown a message asking you to choose to either download from AnkiWeb, or upload to AnkiWeb. If you are happy to lose the cards in AnkiDroid then simply choose **Download**. If you need to merge the existing cards with AnkiDroid then you should see the [resolving conflicts](ankiweb-conflicts.md#dealing-with-merge-conflicts-on-ankiweb) section before continuing.

After the first synchronization has completed, you can click the sync button again any time you wish to synchronize your changes to the cloud. Only changes made since the previous sync will be sent, so subsequent syncs are a lot faster.

If you add some new cards on the desktop computer and want to sync them to AnkiDroid, you'd repeat the same basic process: sync on desktop (or close the program, as it syncs automatically on close by default), and then tap the sync button on AnkiDroid.

### Sync from AnkiDroid to Computer
The process of syncing from AnkiDroid to computer is essentially the same as syncing from computer to AnkiDroid, but in reverse.

From the [deck list](deck-picker.md), tap the sync button in the top right (it has two arrows in a circle). If it's your first time using AnkiWeb, you may need to enter your login credentials, and then press the "upload" button to upload your AnkiDroid collection to AnkiWeb.

Once the synchronization has completed, open Anki Desktop on your computer and press the sync button there (with two arrows in a circle), and Anki will download your collection.
