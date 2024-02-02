# ankidroiddocs

The docs is built using a few tools:

```
mdbook
mdbook-toc
mdbook-linkcheck
mdbook-i18n-helpers
```

First install Rust by following the instructions on https://rustup.rs/. Then clone this repository:

```
git clone https://github.com/ankidroid/ankidroiddocs.git
cd ankidroiddocs
```

Then install these tools with:

```
cargo install mdbook
cargo install mdbook-toc
cargo install mdbook-linkcheck
cargo install mdbook-i18n-helpers
```

Run

```
mdbook serve
```

to start a web server with the course. You'll find the content on `http://localhost:3000`. You can use mdbook build to create a static version of the course in the book/ directory. To build any of the translated versions of the course, run

```
MDBOOK_BOOK__LANGUAGE=xx mdbook build -d book/xx
```

where xx is the ISO 639 language code (e.g. ja for the Japanese translation).

# Translations of AnkiDroid Docs

We use `crowdin.com` for AnkiDroid docs.

## AnkiDroid docs translations on Crowdin:

Translating is easy and fun:

- Go to http://crowdin.net/project/ankidroiddocs
- Register, if you don't have an account yet
- Click on the flag of your language
- Click on a file (they are sorted by descending priority)
- Click on "Sort"
- Click on "Missing translation"
- Grey bullet=missing, Green bullet=done
- For each grey bullet, translate the English text to your language.

## Add new language entry if not exists

1. Contact AnkiDroid Org admin to add new language entry on Crowdin
2. Clone this repository
3. Open [theme/head.hbs](theme/head.hbs) file in text editor
4. Add language entry in head.hbs, for e.g. "ja": "日本語"

```html
<script>
    let book_lang = {
        "ar": "العربية",
        "ja": "日本語",
        "ru": "Русский",        
        "zh-CN": "简体中文",
                            // <------ add new language entry here 
    };
</script>
```

5. Commit changes and create pull request to ankidroiddocs
6. Update translations on Crowdin

### Building a Translation

To use the `po/xx.po` file for your output, run the following command:

```shell
MDBOOK_BOOK__LANGUAGE=xx mdbook build -d book/xx
```

This will update the book's language to `xx`, it will make the `mdbook-gettext`
preprocessor become active and tell it to use the `po/xx.po` file, and finally
it will redirect the output to `book/xx`.

### Serving a Translation

Like normal, you can use `mdbook serve` to view your translation as you work on
it. You use the same command as with `mdbook build` above:

```shell
MDBOOK_BOOK__LANGUAGE=xx mdbook serve -d book/xx
```

When you update the `po/xx.po` file, the translated book will automatically
reload.
