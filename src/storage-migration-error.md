# Unexpected error during Storage Migration

There was an error copying your media to a folder supported by Android R. Before the process started, your data was backed up to AnkiWeb and can be restored.

Before continuing, please:

1. Take a backup of your collection (including scheduling + media) via Deck Picker -> Export collection

   - See [Manual Backups](#manual-backups) if you desire a file-based backup

2. Report the error to us: https://docs.ankidroid.org/help.html#_support

### Restoring from AnkiWeb Backup

If you have reviewed a significant number of cards using AnkiDroid since the migration started, see: [Modified Collection](#restoring-a-modified-collection)

- Reinstall AnkiDroid
  - Do not keep app data on uninstall. (_Ensure you have backed up, this will delete the AnkiDroid collection, media and backups from the AnkiDroid folder_)
- Open AnkiDroid, select "Sync from AnkiWeb",
  - Log in and re-sync your collection
  - Syncing will be significantly faster than AnkiDroid 2.15
- Once you are synced, you may delete the folder collection in `/storage/emulated/0/AnkiDroid` to save space.
- Your collection is now located at `/storage/emulated/0/Android/data/com.ichi2.anki/files`

### Restoring a Modified Collection

_Ensure that you have backed up your collection and media_

- Uninstall AnkiDroid
  - Do not keep app data. (**This will delete the AnkiDroid collection, media and backups**)
- Reinstall AnkiDroid
- Select _Get Statred_
- Select _Deck Picker -> Import_
- Import the backup which was created
- Open a file browser and browse to `/storage/emulated/0/Android/data/com.ichi2.anki/files`
- Delete the `collection.media` folder and file: `collection.media.ad.db2`. Delete `collection.media.ad.db2-journal` if it exists.
- Sync with AnkiWeb and your missing media will be downloaded

### Personalised Help

If you require personalised help, please contact us using one of the following:

- [Mailing List](https://groups.google.com/g/anki-android)
- [Discord](https://discord.gg/qjzcRTx) (`#help` and/or `#mobile-apps`)
- [Our Reddit community](https://www.reddit.com/r/Anki/)
- [AnkiWeb forums](https://forums.ankiweb.net/c/ankidroid/16)

### Manual Backups

- Your migrated data exists at the folder listed in _Settings -> Advanced -> AnkiDroid directory_. This is typically: `/storage/emulated/0/Android/data/com.ichi2.anki/files`
  - If you installed a parallel build, replace `com.ichi2.anki` with `com.ichi2.anki.A`
  - Some file managers will be unable to access this folder. You should be able to access this folder via USB.
  - Android will offer to delete this folder when AnkiDroid is uninstalled
- Your non-migrated media and backups of your collection exist at `/storage/emulated/0/AnkiDroid`
