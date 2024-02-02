# Removed Features

## Automatic night mode color inversion

NOTE: Removed in AnkiDroid 2.17

### Feature Description

Previously, AnkiDroid contained a very basic color inverter for card content in night mode. For example it changed white to black and black to white. It inverted _all_ colors though for example green inverts to pink. These changes were frequently unwanted.

### Reason for removal

This feature was introduced in 2012, before either Android or Anki had night mode functionality.

AnkiDroid implemented Android's 'follow system' night mode functionality in 2.16, which made the functionality more
prominent.

In 2.17, AnkiDroid was updated to use unified night mode card rendering code across the Anki ecosystem.
As color inversion was an unexpected feature for our users, and did not match Anki Desktop's behavior, it was removed.

https://github.com/ankidroid/Anki-Android/issues/14893

### Action to take

If you are impacted by these changes, you may [customizing card layout](advanced-features/customizing-card-layout.md) of
your card templates using the `night_mode` selector. The css: `filter: invert(1)`

```css
.card {
  --text-color1: black;
}

.card.night_mode {
  --text-color1: white;
}

.title {
   color: var(--text-color1);
}

/* filter could also be used */

.title {
    color: red;
}

.night_mode .title {
	filter: invert(100%);
}
```

## Gesture Action: Answer better than recommended

NOTE: Removed in AnkiDroid 2.17

### Feature Description

When the answer screen is shown, choose the button on the right, indicating you found the card too easy to remember and would like a much longer delay.

### Reason for Removal

Previous versions of the Anki Scheduler had a variable number of buttons. The V3 scheduler always has 4 buttons, so this option no longer has unique functionality.

### Action to take

The functionality is now equivalent to 'Answer easy', either reassign the action, or remove it.

## Gesture Action: Answer recommended (green)

NOTE: Removed in AnkiDroid 2.17

### Feature Description

When the answer screen is shown, choose the green button.
This is the button you should end up using the most.

Previous versions of the Anki Scheduler had a variable number of buttons. The V3 scheduler always has 4 buttons, so this option no longer has unique functionality.

### Action to take

The functionality is now equivalent to 'Answer good', either reassign the action, or remove it.
