# Edit Note Screen
The edit note screen can be opened by choosing edit while reviewing, or by opening a card in the browser. The edit screen is similar to the add new note screen mentioned above, with some key differences:


 * Changing the deck operates on the selected card (which is underlined in the **Cards** box). 
 If a note type is chosen which has more than one card, only the currently selected card will be moved to the new deck.
 
 * Changing the **Type** dropdown selector changes to the note type edit mode. In this mode, editing the content of the note (i.e. deck, fields, etc) is disabled, 
 and if a custom note type with more than two fields is being used, additional buttons will appear which let you control the mapping of the fields to the new note type.
 
If a note type is selected which has less cards than the original note type, only the first n cards will be kept. For example changing from **Basic (and reversed card)** to **Basic**
 will lead to only the first card being kept. To warn you of this, the text in the **Cards** box will appear red, and a confirmation dialog will be shown before the note is saved.
 
>Hint: to change the type for multiple notes in one go, or to customize the mapping between cards, use the **Change note type** option in the browser on Anki Desktop.
 
There are also several advanced options available in the main menu:

### Add note
Create a new empty note

### Copy card
Copy the current note to a new editable note

### Reset progress
Move the card to the end of the new card queue. The current state of the card is cleared, but not its revision history.

### Reschedule
Allows you to reschedule as a review card on a given date. This is useful if you have imported already-learnt material, and you want to start it off with higher initial intervals.
