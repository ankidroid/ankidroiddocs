# Using Right-To-Left Languages with AnkiDroid

Anki and AnkiDroid have full support for RTL languages such as Arabic, Hebrew, and Persian.

## Editing Fields as RTL
Fields can be marked as RTL (currently possible only from Anki Desktop) for RTL editing. When a field is marked as RTL, then the text is right-aligned in editing fields and punctuation is correctly displayed at the end (left) of sentences. Text that contains blocks of LTR characters will be properly displayed as well, with the beginning of the sentence appearing to the right of the LTR block and the end of the sentence being displayed to the left of the LTR block.

Directionality is especially important for editing and creating RTL cloze deletions as the cloze format includes both neutral and LTR markup characters. Therefore it is recommended to use a separate note type for LTR cloze deletions and RTL cloze deletions.

## Displaying Fields as RTL during study
To display a field as RTL, with proper right-alignment and directionality (punctuation at left of sentences, proper flow around LTR blocks), the field should be wrapped in a div or span element with the RTL directionality specified:

```html
<div dir="rtl"></div>
```