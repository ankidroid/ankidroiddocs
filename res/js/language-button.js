let langIconButton = `<a href="#" title="Languages buttons" aria-label="Languages buttons">
<i id="languages-buttons-button" class="fa fa-language"></i>
</a>`;

let languagePopup = `<ul id="language-list" class="language-popup" aria-label="Languages" role="menu" style="display: none;">
    <li role="none"><button role="menuitem" class="language" id="lang-en"><a href="/en" class="lang-list-item">English</a></button></li>
    <li role="none"><button role="menuitem" class="language" id="lang-zh"><a href="/zh" class="lang-list-item">简体中文</a></button></li>
    <li role="none"><button role="menuitem" class="language" id="lang-ja"><a href="/ja" class="lang-list-item">日本語</a></button></li>
    <li role="none"><button role="menuitem" class="language" id="lang-ar"><a href="/ar" class="lang-list-item">عربى</a></button></li>
</ul>`;

let rightButtonsHtml = document.querySelector(".right-buttons").innerHTML;

document.querySelector(".right-buttons").innerHTML = langIconButton;
document.querySelector(".right-buttons").innerHTML += rightButtonsHtml;
document.querySelector(".right-buttons").innerHTML += languagePopup;

(function languages() {
    var languageToggleButton = document.getElementById('languages-buttons-button');
    var languagePopup = document.getElementById('language-list');

    function showLanguages() {
        languagePopup.style.display = 'block';
        languageToggleButton.setAttribute('aria-expanded', true);
    }

    function hideLanguages() {
        languagePopup.style.display = 'none';
        languageToggleButton.setAttribute('aria-expanded', false);
        languageToggleButton.focus();
    }

    document.getElementById("languages-buttons-button").onclick = function () {
        showLanguages();
    };

    // Should not be needed, but it works around an issue on macOS & iOS: https://github.com/rust-lang/mdBook/issues/628
    document.addEventListener('click', function(e) {
        if (languagePopup.style.display === 'block' && !languageToggleButton.contains(e.target) && !languagePopup.contains(e.target)) {
            hideLanguages();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) { return; }
        if (!languagePopup.contains(e.target)) { return; }

        switch (e.key) {
            case 'Escape':
                e.preventDefault();
                hideLanguages();
                break;
            case 'ArrowUp':
                e.preventDefault();
                var li = document.activeElement.parentElement;
                if (li && li.previousElementSibling) {
                    li.previousElementSibling.querySelector('button').focus();
                }
                break;
            case 'ArrowDown':
                e.preventDefault();
                var li = document.activeElement.parentElement;
                if (li && li.nextElementSibling) {
                    li.nextElementSibling.querySelector('button').focus();
                }
                break;
            case 'Home':
                e.preventDefault();
                languagePopup.querySelector('li:first-child button').focus();
                break;
            case 'End':
                e.preventDefault();
                languagePopup.querySelector('li:last-child button').focus();
                break;
        }
    });
})();
