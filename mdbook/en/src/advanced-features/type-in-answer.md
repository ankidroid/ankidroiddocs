# Type in the answer feature

AnkiDroid allows you to type in the correct answer and then compare it to the right answer. You have to set this up with Anki desktop, as described in the [Anki Desktop manual](https://docs.ankiweb.net/templates/fields.html#checking-your-answer).

Anki desktop replaces the **{{type:NN}}** field on the front of a card with an input box in the card. On AnkiDroid it is replaced with a **......** prompt instead, and a text input box is shown at the bottom. The comparison between typed text and the correct text is shown on the answer side in place of the **{{type:NN}}** field there, like on Anki desktop.

The text input box and the soft keyboard can be hidden by ticking **Disable typing in answer** in the preferences.

Even with typing disabled, the correct answer is shown on the answer side. This is done on purpose; otherwise the correct answer might not be shown at all.

To hide the comparison (e.g. because the correct answer is shown anyway), the HTML id **typeans** can be used. 
Add following to the [card styling](https://docs.ankiweb.net/templates/styling.html#card-styling) using Anki Desktop.
```css
.mobile #typeans {
    display: none;
}
```

The type answer prompt and the comparison have more classes that can be used to change the way they are displayed. Some of these are the same as on Anki Desktop, some are specific to AnkiDroid.

The comparison uses three classes, typeGood, typeBad and typeMissed to add green, red and gray background to the typing comparison. These three classes are used on Anki desktop as well.

The **......** prompt has the class **typePrompt**.

When typing is set to off in the preferences, the class **typeOff** is added to the prompt on the question side, and to the div element containing the comparison on the answer side. This class can be used to show the type prompt or to hide the typing comparison in this case.
