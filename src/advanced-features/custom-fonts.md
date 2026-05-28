# Custom Fonts

AnkiDroid allows you to use non-system fonts on your cards. To set them up properly, it is strongly recommended to use the official method that is used by Anki Desktop. Please see [the corresponding section in the desktop manual](https://docs.ankiweb.net/templates/styling.html#installing-fonts) for more information.

Alternatively, you can create a new subfolder **fonts** in the main AnkiDroid directory (i.e. the folder which contains the **backups** subfolder, specified under `Settings > Advanced > AnkiDroid directory)`, copy a compatible font file (i.e. .ttf) there, and then set this as the default font under `Settings > Fonts > Default font`. 

**Note:** this method will change the default font for **all** of your cards, whereas the official method can be more specific. Also, if you sync with AnkiWeb, using this method will lead to cards being displayed differently on different devices.

Only fonts in the ttf format are officially supported in Anki/AnkiDroid; the [Google Noto](https://fonts.google.com/noto) font set is highly recommended for all languages, and some other free fonts can be found [here](https://github.com/ankidroid/Anki-Android/wiki/Freely-distributable-fonts).

Please note that AnkiDroid has to load the entire font into memory in order to use it, and fonts for Asian languages can be quite large. If you have an older device and notice AnkiDroid crashing frequently after installing a font, you may have exceeded your device's memory limits. For Google Noto, it's not recommended to use the combined CJK font, rather get the individual languages [separately from here](https://github.com/googlei18n/noto-cjk).

>**Note 1**: If you have **Fetch media on sync** disabled, you may need to manually copy the font file from Anki Desktop to your AnkiDroid/collection.media folder.

>**Note 2**: If you can't get your font to work after following the steps in here and the Anki Desktop manual, please refer to the FAQ for <a href="https://github.com/ankidroid/Anki-Android/wiki/FAQ#i-followed-the-instructions-in-the-manual-but-i-still-cant-get-my-custom-font-to-work">detailed steps on how to debug font issues</a>.
