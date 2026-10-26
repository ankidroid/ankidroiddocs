// Add hover functionality to popover triggers similar to Wikipedia
// Falls back to working HTML if Popover API/JS is not supported
(function () {
  // Check if Popover API is supported
  if (typeof HTMLElement.prototype.showPopover !== "function") {
    return;
  }

  document.querySelectorAll("[popovertarget]").forEach(function (trigger) {
    var popoverId = trigger.getAttribute("popovertarget");
    var popover = document.getElementById(popoverId);

    if (popover) {
      var hideTimeout;

      // Position popover near the trigger element
      function positionPopover() {
        var triggerRect = trigger.getBoundingClientRect();
        var viewportWidth = window.innerWidth;
        var popoverHeight = popover.offsetHeight;
        var popoverWidth = popover.offsetWidth;

        // Position so bottom of popover is above the top of the trigger
        var top = triggerRect.top + window.scrollY - popoverHeight - 8;
        var left = triggerRect.left + window.scrollX;

        // Adjust if popover would go off-screen horizontally
        if (left + popoverWidth > viewportWidth) {
          left = viewportWidth - popoverWidth - 20;
        }
        if (left < 10) {
          left = 10;
        }

        // Adjust if popover would go off-screen vertically, show below instead
        if (top < window.scrollY + 10) {
          top = triggerRect.bottom + window.scrollY + 8;
        }

        popover.style.top = top + "px";
        popover.style.left = left + "px";
      }

      trigger.addEventListener("mouseenter", function () {
        clearTimeout(hideTimeout);

        popover.style.opacity = "0";
        popover.showPopover();

        // Position after showing to get accurate offsetHeight
        positionPopover();

        // Fade in popover
        popover.style.opacity = "";
      });

      // Keep popover open when hovering over it
      popover.addEventListener("mouseenter", function () {
        clearTimeout(hideTimeout);
      });

      trigger.addEventListener("mouseleave", function () {
        hideTimeout = setTimeout(function () {
          popover.hidePopover();
        }, 200);
      });

      popover.addEventListener("mouseleave", function () {
        hideTimeout = setTimeout(function () {
          popover.hidePopover();
        }, 200);
      });
    }
  });
})();

// Redirect outdated manual links with fragments to the new manual location
(function () {
  const fullHash = window.location.hash;
  const hashTextOnly = fullHash.substring(1);
  const CURRENT_MANUAL_URL = "https://docs.ankidroid.org/";
  const ALLOW_LIST = [
    "_introduction",
    "gettingStarted",
    "deckPicker",
    "_add_button",
    "_app_bar",
    "_studying_a_deck",
    "_other_deck_actions",
    "_clickable_areas_on_the_decks",
    "_advanced_actions",
    "_deck_counts",
    "drawer",
    "deckOverview",
    "_app_bar_2",
    "_ordinary_decks",
    "_filtered_decks",
    "_overflow_menu",
    "reviewer",
    "_basics",
    "_app_bar_3",
    "_reaching_the_end_of_the_study_session",
    "addingNotes",
    "noteFormattingToolbar",
    "editingNotes",
    "browser",
    "_searching",
    "filtered",
    "RTL",
    "_editing_fields_as_rtl",
    "_displaying_fields_as_rtl_during_study",
    "AnkiDesktop",
    "_via_cloud_sync",
    "_sync_existing_decks_into_a_new_ankidroid_install",
    "_sync_from_ankidroid_to_computer",
    "AnkiWebConflicts",
    "_custom_sync_server",
    "_via_usb",
    "_copy_all_decks_from_anki_desktop_to_ankidroid_via_usb",
    "_copy_all_decks_from_ankidroid_to_anki_desktop_via_usb",
    "importing",
    "_open_the_file_using_android",
    "_import_the_file_manually_in_ankidroid",
    "_importing_anki_databases_anki2",
    "_importing_anki2_files_manually",
    "exporting",
    "_exporting_collection_package",
    "_exporting_deck_package",
    "backups",
    "settings",
    "_ankidroid",
    "_notifications",
    "_reviewing",
    "_display",
    "_whiteboard",
    "_automatic_display_answer",
    "_fonts",
    "gestures",
    "_actions",
    "userActions",
    "_advanced",
    "_workarounds",
    "_advanced_features",
    "mathjax",
    "reverseCards",
    "customFonts",
    "customizingCardLayout",
    "typeInAnswer",
    "setlanguagehint",
    "keyboardShortcuts",
    "_home_screen",
    "_study_screen",
    "_note_editor",
    "_card_browser",
    "_card_template_editor",
    "betaTesting",
    "alphaTesting",
    "contributing",
  ];

  if (hashTextOnly && ALLOW_LIST.includes(hashTextOnly)) {
    window.location.replace(CURRENT_MANUAL_URL + fullHash);
  }
})();

// Theme toggle (overrides OS preference for current session only)
(function () {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const root = document.documentElement;

  toggle.addEventListener("click", function () {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = root.getAttribute("data-theme");
    var next;
    if (current) {
      next = current === "dark" ? "light" : "dark";
    } else {
      next = prefersDark ? "light" : "dark";
    }
    root.setAttribute("data-theme", next);
  });
})();
