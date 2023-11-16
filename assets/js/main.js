// Add notification bubble to nav items
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
    console.log('%c' + consoleClubTitle, consoleClubStyles);
    console.log('%c' + consoleClubDescription, 'color: white; background: black;font-size: 18px;');
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

function sparkles() {
    const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
    var pause = false;
    if (!!isReduced) {
        pause = true;
    }
    cursorTrail({
        paused: pause,
        pattern: 'confetti2',
        animationType: 'down',
        theme: 'light'
    });
}


const randomiser = (array, currentNumber) => {
    let newNumber = Math.floor(Math.random() * array.length);
    if (newNumber === currentNumber) {
        newNumber = Math.floor(Math.random() * array.length)
    }
    return newNumber
}

function avatarSwapper() {
    const avatars = [
        {   src: "/images/picrew/PotatoLord’s_Persona_Creator.png",
            alt: "Cute af pic",
            credit: "PotatoLord’s_Persona_Creator",
            crediturl: "https://picrew.me/en/image_maker/1473879"
        },
        {   src: "/images/picrew/makowka_character_maker_II.png",
            alt: "Cute af pic",
            credit: "makowka",
            crediturl: "https://picrew.me/en/image_maker/644129"
        },
        {   src: "/images/picrew/crows_character_creator_.png",
            alt: "Cute af pic",
            credit: "crowwithapen",
            crediturl: "https://picrew.me/en/image_maker/1243146"
        },
        {   src: "/images/picrew/Ultimate_friends_face_maker.png",
            alt: "Cute af pic",
            credit: "makowka_character_maker_II",
            crediturl: "https://picrew.me/en/image_maker/1342558"
        },
        {   src: "/images/picrew/OC_Creator-transparent.png",
            alt: "Cute af pic",
            credit: "MaeEllen",
            crediturl: "https://picrew.me/en/image_maker/2141620"
        },
        {   src: "/images/picrew/flowerveil.png",
            alt: "Cute af pic",
            credit: "flowerveil",
            crediturl: "http://asdad.com"
        },
        {   src: "/images/picrew/miaw-sq.jpg",
            alt: "Cute af pic",
            credit: "Mia Wilkes",
            crediturl: "http://mia-wilkes.squarespace.com/"
        },
        {   src: "/images/picrew/stardew.png",
            alt: "Cute af pic",
            credit: "Jazzybee",
            crediturl: "https://jazzybee.itch.io/sdvcharactercreator"
        },
        // {   src: "/images/picrew/TOON_ME_⟪_B_⟫.png",
        //     alt: "Cute af pic",
        //     credit: "TOON_ME_⟪_B_⟫",
        //     crediturl: "http://asdad.com"
        // },
    ]
    let diceRoll = randomiser(avatars)
    const avatarContainer = document.getElementsByClassName('swapAvatar')[0]
    const avatar = avatarContainer.appendChild(document.createElement('img'));
    avatar.id='swappedAvatar';
    avatar.src=avatars[diceRoll].src;
    avatar.alt=avatars[diceRoll].alt;
    avatarContainer.classList.add('swapped');
    document.getElementById('refreshAvatar').addEventListener("click", (event) => {
        let reRoll = randomiser(avatars, diceRoll)
        let avatar = document.getElementById('swappedAvatar')
        avatar.src=avatars[reRoll].src;
        avatar.alt=avatars[reRoll].alt;
    });
}

window.addEventListener('load', function () {
    // notification(4, 'New!');
    consoleClub();
    colorScheme();
    sparkles();
}, true);

avatarSwapper()