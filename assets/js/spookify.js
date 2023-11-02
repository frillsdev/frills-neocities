    // storeEmoji();
    // spookyScheme();

// Spookify
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
    const newEmojiSet = ['🎃', '👻', '💀', '😱', '🧟', '🧙', '🐺', '🧛', '🕷️', '🕸️', '🦉', '🦇', '🌕', '🍫', '🍬', '🍭', '⚰️', '🥀', '🩸']
    emojis.map((emoji) => {
        const randomIndex = Math.floor(Math.random() * newEmojiSet.length);
        emoji.innerText = newEmojiSet[randomIndex]
        emoji.setAttribute('aria-hidden', true)
    })
}

function spookyScheme() {
    const spookyButton = document.getElementById('spookyButton');
    let spookify = localStorage.getItem('spookify');

    function setSpookyScheme() {
        document.documentElement.dataset.spooky = spookify;
        if (spookify === 'true') {
            spookyButton.setAttribute('aria-pressed', true);
            changeEmoji();
        } else {
            spookyButton.setAttribute('aria-pressed', false);
            restoreEmoji();
        }
    }
    setSpookyScheme();

    spookyButton.addEventListener('click', () => {
        if (spookify === 'false') {
            spookify = 'true';
        } else {
            spookify = 'false';
        }
        localStorage.setItem('spookify', spookify);
        setSpookyScheme();
    });
}
