// christmasify
function storeEmoji() {
    const emojis = Array.from(document.getElementsByClassName('emoji'))
    emojis.map((emoji) => {
        emoji.dataset.emoji = emoji.innerText;
    })
}

function restoreEmoji() {
    const emojis = Array.from(document.getElementsByClassName('emoji'))
    emojis.map((emoji) => {
        emoji.innerText = emoji.dataset.emoji
    })
}

function changeEmoji() {
    const emojis = Array.from(document.getElementsByClassName('emoji'))
    const newEmojiSet = ["❄️", "☃️", "🥶", "🧊"]
    emojis.map((emoji) => {
        const randomIndex = Math.floor(Math.random() * newEmojiSet.length);
        emoji.innerText = newEmojiSet[randomIndex]
        emoji.setAttribute('aria-hidden', true)
    })
}

function christmasScheme() {
    const christmasButton = document.getElementById('christmasSchemeButton');
    let christmasify = localStorage.getItem('christmasify');

    function setChristmasScheme() {
        document.documentElement.dataset.christmas = christmasify;
        if (christmasify === 'true') {
            christmasButton.setAttribute('aria-pressed', true);
            changeEmoji();
        } else {
            christmasButton.setAttribute('aria-pressed', false);
            restoreEmoji();
        }
    }

    if (christmasify != null) {
        setChristmasScheme();
    }

    christmasButton.addEventListener('click', () => {
        if (christmasify === 'false') {
            christmasify = 'true';
        } else {
            christmasify = 'false';
        }
        localStorage.setItem('christmasify', christmasify);
        setChristmasScheme();
    });
}

storeEmoji();
christmasScheme();