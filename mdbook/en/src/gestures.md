# Gestures

<!-- toc -->

AnkiDroid allows you to customize the interface, so that actions you perform
frequently can be accomplished quickly by using tap and swipe gestures.

### Actions
The following gestures can be used:

 * Swipe up
 * Swipe down
 * Swipe left
 * Swipe right
 * Double touch
 * Touch top
 * Touch bottom
 * Touch left
 * Tough right

The following actions are available for each gesture:

#### No action 
Don't do anything. Useful if you want to disable certain swipes, tap zones and so on.

#### Answer button 1 
When the answer screen is shown, choose the red
button, indicating you wish to review the card again soon. This is useful when
you forgot a card or wish to review it more frequently. 
When the question is shown, this action (and all other answer actions below) will simply show the answer.

#### Answer button 2 
When the answer screen is shown, choose the second button from the left, 
generally indicating you found the card hard to remember.

#### Answer button 3 
When the answer screen is shown, choose the third button from the left.

#### Answer button 4 
When the answer screen is shown, choose the fourth button from the left (when applicable).

#### Answer recommended (green) 
When the answer screen is shown, choose the green button.
This is the button you should end up using the most.

#### Answer better than recommended 
When the answer screen is shown, choose the button on the
right, indicating you found the card too easy to remember and would like a
much longer delay.

#### Undo 
Undoes the last action.

#### Edit card 
Edits the current card.

#### Mark 
Adds a tag called **Marked** the current note, so it can be easily found in a search.

#### Lookup expression 
When the lookup feature is enabled (in advanced settings), lookup an expression
in the selected dictionary. Note: the expression needs to be copied to the clipboard before this action will work.

#### Bury card 
Hides the current card from review.

#### Suspend card 
Prevent current card from being shown during review until you unsuspend it via the card browser.

#### Delete note 
Deletes the currently shown note and all of its cards.

#### Play media 
Replay any audio on the card.

#### Abort learning 
Stop reviewing and go back to the deck overview page.

#### Bury note 
Bury the current note (i.e. hide it until the next day).

#### Suspend note 
Suspend the current note (i.e. hide it until you unsuspend it).

#### Toggle Red Flag 
Enables the red flag, unless the flag is already red, in which case the flag is disabled.

#### Toggle Orange Flag 
Enables the orange flag, unless the flag is already orange, in which case the flag is disabled.

#### Toggle Green Flag 
Enables the green flag, unless the flag is already green, in which case the flag is disabled.

#### Toggle Blue Flag 
Enables the blue flag, unless the flag is already blue, in which case the flag is disabled.

#### Remove Flag 
Removes the flag from the card.

## Advanced
Some less common features for advanced users are shown here

#### Collection path 
Change the location where AnkiDroid's data is stored (not recommended)

#### Force full sync 
Tap this item to force a full upload or download on the next sync (for example, because you accidentally deleted a deck on one side and want to restore the deck rather than having its deletion synchronized).

#### Advanced Statistics 
Take into account the effect of future reviews in the **Forecast** graph. More info [here](advanced-features/advanced-statistics.md).

### Workarounds

#### Type answer into the card 

If you have set up your cards to ask you to type in the answer (as explained in [this section of the desktop manual](https://docs.ankiweb.net/templates/intro.html)), AnkiDroid will display a keyboard on such cards and allow you to check your answer.

In order to improve user experience when working with the whiteboard and gestures, we use a typing box separate from the card, which is inconsistent with the way the feature works on Anki Desktop.

For full consistency with Anki Desktop, you can enable this option which allows you to save screen area, and choose an appropriate font (e.g. Japanese vs Chinese) for the input box.

#### Input Workaround
Some older devices couldn't gain focus into the text input box for typed-answer fields, so this was added (Hidden for API > 14).

#### Longclick Workaround
Some older devices couldn't detect longclick for initiating selecting/copying of text, so this was added (Hidden for API > 10).
 
#### Fix for Hebrew Vowels
Some older devices couldn't render Hebrew text, so this feature was added which allows the user to download and install a Hebrew font which is known to work (Hidden for API > 15).

#### Text to Speech
Enable this option to have Android read out all the text on your flashcards using the default text to speech engine. Google's built-in TTS engine should work; 3rd party TTS engines may or may not.
AnkiDroid will ask you to select the language for the front and back of your cards once for each deck on the first time you review a card in that deck. 
To change the language or disable TTS for a given deck after making your initial choice, you'll need to use the **reset languages** option described below and reconfigure for each deck.

Alternatively, if you want only fragments of cards to be read aloud, or if you want to set the TTS language for multiple decks at once, you can insert `<tts>` tags into [card templates](advanced-features/customizing-card-layout.md). For example, with the following template for the back of the card

```html
{{FrontSide}}

<hr id=answer>

<tts service="android" voice="en_GB">{{EnglishTranslation}}</tts>
<br><br>
{{Example}}
```

only the `EnglishTranslation` field will be read aloud in a British English voice; the `Example` field, lying outside the `<tts>` tag, won't be read aloud. Every `<tts>` tag needs to have the following two attributes:

 * **`service`**: should be set to **`android`**, otherwise the contents of the **`<tts>`** tag won't be read aloud;
 * **`voice`**: used to select the TTS language; should be a [two- or three- letter language code](https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes), optionally followed by an underscore and a [two-letter country or region code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). A frequently updated list of languages supported by the Google TTS engine can be found on its [Wikipedia page](https://en.wikipedia.org/wiki/Google_Text-to-Speech).

To make both AnkiDroid and the [AwesomeTTS](https://ankiatts.appspot.com) plugin to the desktop application use a TTS engine to read aloud certain card fragments, put the `<tts service="android" ...>` tag inside the `<tts>` tag recognised by AwesomeTTS, or vice versa. An example:

```html
<tts service="sapi5js" quality="39" speed="0" voice="Microsoft David Desktop" volume="100" xml="0">
    <tts service="android" voice="en_GB">
        {{EnglishTranslation}}
    </tts>
</tts>
```

AnkiDroid automatically ignores `<tts>` tags selecting an unknown TTS service. In contrast, AwesomeTTS may display a warning message on encountering the `<tts service="android" ...>` tag; to suppress it, uncheck the two _Show errors_ checkboxes on the _Playback_ tab of the _AwesomeTTS: Configuration_ dialog in the desktop application.

_This feature may be removed in the future in favor of a separately downloadable plugin._

#### Lookup Dictionary
Dictionary to use to lookup words copied to the clipboard in the reviewer. After setting up a dictionary, do the following to perform the lookup:

 * Longclick on the text you want to copy in the reviewer
 * After selecting the word you want to copy, press the **copy** icon in the app bar at the top of the screen
 * Tap once anywhere on the flashcard
 * A magnifying glass icon should appear, which performs the lookup when clicked

Alternatively, the lookup action can be performed via a gesture.

_This feature will likely be removed in the future in favor of a plugin_

#### Reset Languages
Useful for resetting the TTS language

#### eReader (up/down buttons)
Support for eReader hardware buttons (see [issue 1625](https://github.com/ankidroid/Anki-Android/issues/1625))

_This feature will likely be removed in the future in favor of a plugin_

#### eReader Double Scrolling
Double the scrolling distance when using the eReader hardware buttons
