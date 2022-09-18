# Preferences

<!-- toc -->

The preferences screen can be accessed by opening the navigation drawer, and choosing **Settings**. It allows you to customize various application settings and how AnkiDroid appears.

The Preferences screen is divided up into different sections, which are covered below.

## AnkiDroid
These are the general settings which affect the whole app:

#### AnkiWeb account 
Change the account used for syncing with the cloud. For more information on syncing, please see [this section](anki-desktop.md).

#### Fetch media on sync 
By default, AnkiDroid will sync sounds and images as well as your cards and review history. 
If you disable this option, sounds and images will not be downloaded from or uploaded to the sync server by AnkiDroid.

#### Automatic synchronization 
Enable this option if you want AnkiDroid to sync every time you open and close the app. There is a limit of once every ten minutes for this behavior. Once a sync begins you can cancel it by pressing your device's back button, however it can take some time for the cancellation to take effect.

Users that want more fine-grained control over when sync occurred might like to use a 3rd party app like Tasker to automate synchronization. See the <a href="https://github.com/ankidroid/Anki-Android/wiki/AnkiDroid-API#sync-intent">API documentation</a> for more information on this.
 
#### Deck for new cards 
The default of **Use current deck** means that Anki saves the last-used note type for each deck and selects it again then next time you choose the deck (and, in addition, will start with the current deck selected when choosing Add from anywhere). The other option, **Decide by note type,** saves the last-used deck for each note type (and opens the add window to the last-used note type when you choose Add). This may be more convenient if you always use a single note type for each deck.

#### Language 
Change the language. Note: AnkiDroid translations are contributed by volunteers. If you find missing or incorrect translations, feel free to contribute to the translation project. More details can be found on the <a href="https://github.com/ankidroid/Anki-Android/wiki/Contributing#translate-ankidroid">AnkiDroid Wiki</a>.

#### Error reporting mode 
Control whether or not AnkiDroid asks your permission before sending error reports to our error reporting system when AnkiDroid crashes. You can also disable the reporting feature entirely if you wish.

## Notifications
This subsection allows you configure when and how AnkiDroid shows alerts in the Android notification bar.

#### Notify when
**Never notify** will disable all notifications from AnkiDroid. **Pending messages available** will only show important status updates like when a sync completed. **More than n cards due** will show a notification when you have more than n cards due (requires the widget to be enabled).

#### Vibrate 
Checking this will make your device vibrate when showing a notification

#### Blink light  
Checking this will make your device light blink when an unread notification exists (if your device has a notification LED)


## Reviewing

The reviewing screen allows you to customize how AnkiDroid behaves when you're
reviewing cards. Note that only the reviewing settings which are applied to **all decks** are shown here. There are more settings related to reviewing which are **deck specific**. These deck specific settings are located in **Deck options**.

#### New card position
Controls when new cards are shown: either mixed with, after, or before all reviews.

#### Start of next day
Controls when AnkiDroid should start showing the next day's cards. 
The default setting of 4AM ensures that if you're studying around midnight, you won't have two days worth of cards shown to you in one session. If you stay up very late or wake up very early, you may want to adjust this to a time you're usually sleeping.

#### Learn ahead limit
The Learn ahead limit tells AnkiDroid how to behave when there is nothing left to study in the current deck but cards in learning. The default setting of 20 minutes tells AnkiDroid that cards should be shown early if they are due to be shown in less than 20 minutes and there's nothing else to do. If you set this to 0, Anki will always wait the full period, showing the congratulations screen until the remaining cards are ready to be reviewed.

#### Timebox limit 
Timeboxing is a technique to help you focus by dividing a longer activity (such as a 30 minute study session) into smaller blocks. If you set the timebox time limit to a non-zero number of minutes, AnkiDroid will periodically show a message saying you how many cards you've managed to study during the prescribed time limit.

## Display
This subsection relates to the way cards are displayed during reviewing

#### Keep screen on
Ignore the automatic screen timeout setting in Android to always keep the screen on.

#### Fullscreen mode
Switches to an immersive fullscreen mode so that you can use more of the screen. You can choose between **Hide the system bars** which will hide the system status bar, action bar, and bottom navigation buttons. Alternatively you can choose **Hide the system bars and answer buttons**, which will hide everything except for the actual card content itself. You can temporarily exit fullscreen mode by swiping inwards (i.e. down or up) from the system bars.

_Note that immersive fullscreen mode is only supported on Android 4.4+_

#### Center align 
By default AnkiDroid tries to show cards exactly as they are shown on Anki Desktop, however if you prefer your cards to be center aligned vertically in AnkiDroid then you can enable this feature.

#### Show button time
By default, the answer buttons will display the time a card will next be shown. If you disable this option, the times will not appear, and only labels like **Again**, **Good** and **Easy** will be shown.

#### Card zoom
Here you can increase the zoom level of the card content (excluding images). You can use this option if you want to increase the font size for all cards.

#### Image zoom
Here you can increase the zoom level of any images embedded in your cards.

#### Answer button size
If you find it difficult to press the answer button, you can use this setting to make it bigger.

#### Show remaining
Disabling this allows you to hide the card count in the top left of the screen.

## Whiteboard
This subsection controls the whiteboard in the reviewer.
Note: the whiteboard must be enabled in each deck individually from the menu in the study screen.

#### Stroke width
Control the stroke width of the whiteboard. Reducing the stroke width may allow you to draw with more detail.

#### Black strokes
Use black strokes instead of color, which may reduce memory usage. Note: this setting doesn't apply when night mode is enabled.

## Automatic display answer
The automatic display answer feature allows you to have the answer shown automatically after some timeout period. You can also have the next question shown automatically; in this case the card is assumed to be failed (i.e. the again button is automatically chosen)

#### Time to show answer
Time to wait until answer is automatically shown

#### Time to show next question
Time to wait until next question is automatically shown.

## Fonts
In this screen you can change the font used by AnkiDroid, and some scaling options related to fonts. 
See the [custom fonts](advanced-features/custom-fonts.md) section for more information about using custom fonts.

#### Default font
Choose the default font used by the AnkiDroid reviewer. You can add fonts to this list by copying them to the **fonts** folder.

#### Default font applicability
The default setting is to only use the default font when no font has been specified in the card styling via Anki Desktop, however you can also force the default font to be applied, ignoring any font specification in the card styling.

#### Browser and editor font
The font to be used by the browser and editor

#### Card browser font scaling
Lets you change the font size used in the card browser.
