// Add notification bubble to nav items
function notification(navItem, hiddenText) {
    const notifTarget = document.getElementsByClassName('page__nav')[0].getElementsByTagName('UL')[0].children.item(navItem)
    const notif = document.createElement('span')
    notif.classList.add('notification')
    notif.innerHTML = hiddenText
    notifTarget.append(notif)
}

// Dark mode toggle
// Modified from debtdeath.neocities.org
function colorScheme() {
    const colorSchemeButton = document.getElementById('colorSchemeButton');
    let colorScheme = localStorage.getItem('colorScheme') ?? 'system';
    if (colorScheme == 'system') {
        var prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
        if (prefersLightMode) {
            colorScheme = 'light';
        } else {
            colorScheme = 'dark';
        }
    }

    function setColorScheme(colorScheme) {
        document.documentElement.dataset.scheme = colorScheme;
        if (colorScheme == 'light') {
            colorSchemeButton.setAttribute('aria-pressed', false);
        } else {
            colorSchemeButton.setAttribute('aria-pressed', true);
        }
    }
    setColorScheme(colorScheme);
        colorSchemeButton.addEventListener('click', () => {
        if (colorScheme == 'light') {
            colorScheme = 'dark';
        } else {
            colorScheme = 'light';
        }
        localStorage.setItem('colorScheme', colorScheme);
        setColorScheme(colorScheme);
    });
}

function sparkles(pattern = "confetti1") {
    const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
    var pause = false;
    if (!!isReduced) {
        pause = true;
    }
    cursorTrail({
        paused: pause,
        pattern: pattern,
        animationType: 'down',
        theme: 'light',
        step: 8
    });
}

// Button to speak
const buttonSpeak = (button) => {
    button.onclick = (event) => {
        event.preventDefault();
        let speak = event.target.dataset.speak;
        const utterThis = new SpeechSynthesisUtterance(speak);
        utterThis.lang = "en-GB";
        utterThis.pitch = 1.2;
        window.speechSynthesis.speak(utterThis);
    };
}

// Load when everything has loaded
window.addEventListener('load', function () {
    // notification(4, 'New!');
    colorScheme();
    sparkles()

    document.querySelectorAll('button[data-speak]').forEach((button) => buttonSpeak(button))
}, true);
