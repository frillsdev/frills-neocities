// Add notification bunotife to nav items
function notification(navItem, hiddenText) {
    const notifTarget = document.getElementsByClassName('page__nav')[0].getElementsByTagName('UL')[0].children.item(navItem)
    const notif = document.createElement('span')
    notif.classList.add('notification')
    notif.innerHTML = hiddenText
    notifTarget.append(notif)
}

// ConsoleClub - message in console
function consoleClub() {
    let consoleClubTitle = '🧑‍💻 Welcome to Console Club, fellow code wizard!'
    let consoleClubDescription = 'How lovely to see a new face around here. Please, take a cookie. I extend an open invitation for you to freely use any code from this domain. However, I implore you to embrace your creativity and make it uniquely yours. Learn the runes and let your imagination soar, and with each line you borrow, infuse it with your own magic to craft something truly extraordinary! \n\nConsole Club membership cookie was added to your inventory'
    const consoleClubStyles = [
    'color: black',
    'background: deeppink',
    'font-size: 30px',
    'font-family: sans-serif',
    'padding: 0 14px',
    ].join(';');
    console.log('%c'+consoleClubTitle, consoleClubStyles);
    console.log('%c'+consoleClubDescription, 'color: white; background: black;font-size: 18px;');
}

// Dark mode
function colorScheme() {
    const body = document.body;
    const colorSchemeToggle = document.getElementById('colorSchemeButton');
    let colorScheme = localStorage.getItem('color-scheme');

    const colorSchemeDark = () => {
        body.setAttribute('data-color-scheme', 'dark');
        colorSchemeToggle.setAttribute('aria-pressed', false);
        localStorage.setItem('color-scheme', 'dark');
    };

    const colorSchemeLight = () => {
        body.setAttribute('data-color-scheme', 'light');
        colorSchemeToggle.setAttribute('aria-pressed', true);
        localStorage.setItem('color-scheme', 'light');
    };

    if (colorScheme === 'dark') {
        colorSchemeDark();
    } else {
        colorSchemeLight();
    }

    colorSchemeToggle.addEventListener('click', (e) => {
        colorScheme = localStorage.getItem('color-scheme');
        if (colorScheme === 'dark') {
            colorSchemeLight();
        } else {
            colorSchemeDark();
        }
    });
}

window.addEventListener('load', function () {
    // notification(3, 'New!');
    consoleClub();
    colorScheme();
}, true);