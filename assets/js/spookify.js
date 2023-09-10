function changeEmoji() {
    const emojis = Array.from(document.getElementsByClassName('emoji'))
    const newEmojiSet = ['🎃', '👻', '💀', '😱', '🧟', '🧙', '🐺', '🧛', '🕷️', '🕸️', '🦉', '🦇', '🌕', '🍫', '🍬', '🍭', '⚰️', '🥀', '🩸']
    emojis.map((emoji) => {
        const randomIndex = Math.floor(Math.random() * newEmojiSet.length);
        emoji.dataset.emoji = emoji.innerText; 
        emoji.innerText = newEmojiSet[randomIndex]
    })
}
function unchangeEmoji() {
    const emojis = Array.from(document.getElementsByClassName('emoji'))
    emojis.map((emoji) => {
        emoji.innerText = emoji.dataset.emoji
    })
}

function spookyScheme() {
    const spookyButton = document.getElementById('spookyButton');
    let spookify = localStorage.getItem('spookify') ?? 'false';
    function setSpookyScheme(spookyScheme) {
        document.documentElement.dataset.spooky = spookify;
        if (spookify) {
            spookyButton.setAttribute('aria-pressed', true);
            changeEmoji();
        } else {
            spookyButton.setAttribute('aria-pressed', false);
            unchangeEmoji();
        }
    }
    setSpookyScheme(spookyScheme);
    spookyButton.addEventListener('click', () => {
        if (spookify == false) {
            spookify = true;
        } else {
            spookify = false;
        }
        localStorage.setItem('spookify', spookify);
        setSpookyScheme(spookyScheme);
    });
}