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
    let randomNumber = Math.floor(Math.random() * array.length);
    if (randomNumber === currentNumber) { randomNumber = Math.floor(Math.random()* array.length) }
    return randomNumber
}

function avatarSwapper() {
    const avatars = [
        {   src: "/images/collections/avatars/PotatoLords_Persona_Creator.png",
            alt: "Avatar of a white woman with brown hair, eyes closed, tongue sticking out. Wearing an orange jumper with a sun on it.",
        },
        {   src: "/images/collections/avatars/makowka_character_maker_II.png",
            alt: "Avatar or a woman with brown hair, styled in spacebuns and blonde streaks where men would have sideburns. Wearing blue dungarees with a red jumper with strawberries on it. ",
        },
        {   src: "/images/collections/avatars/crows_character_creator_.png",
            alt: "Avatar of a white woman with messy brown hair, and blonde streaks where men would have sideburns. Surprised expression with eyes wide and mouth open. Wearing an orange jumper with a rainbow LGBTQIA+ badge.",
        },
        {   src: "/images/collections/avatars/Ultimate_friends_face_maker.png",
            alt: "Avatar of a white woman with brown hair and blonde streaks where men would have sideburns. Surly expression with slighly drooped eyes and straight lips. Wearing blue dungarees with a green jumper.",
        },
        {   src: "/images/collections/avatars/nosk.png",
            alt: "Avatar of a white woman with brown hair, happy expression and chunky eyebrows. Muted blueish colour palette, wearing blue dungarees and a grey top. The background is blue spotted with white polka dots",
        },
        {   src: "/images/collections/avatars/OC_Creator-transparent.png",
            alt: "Avatar or a woman with brown hair, styled in spacebuns and blonde streaks where men would have sideburns. Wearing metal armour.",
        },
        {   src: "/images/collections/avatars/flowerveil.png",
            alt: "Avatar or a woman with brown ombre hair, excessively big eyelashes and sparkly eyes. Sparkles surround her.",
        },
        {   src: "/images/collections/avatars/miaw.jpg",
            alt: "Avatar of a white woman with brown hair and pink cheeks. Wearing yellow dungarees and a grey stripey top. She is framed by a branch of leaves starting from the bottom branching up to the left and right.",
        },
        {   src: "/images/collections/avatars/stardew.png",
            alt: "Avatar of a white woman with brown hair tucked behind her left ear. Wearing pink dungarees and a pink top. In the style of Stardew Valley.",
        },
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