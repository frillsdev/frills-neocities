// snowify
function snowScheme() {
    const snowButton = document.getElementById('snowSchemeButton');
    let snowify = localStorage.getItem('snowify');

    function setSnowScheme() {
        document.documentElement.dataset.snow = snowify;
        if (snowify === 'true') {
            snowButton.setAttribute('aria-pressed', true);
        } else {
            snowButton.setAttribute('aria-pressed', false);
        }
    }
   
    if (snowify != null) {
        setSnowScheme();
    }

    snowButton.addEventListener('click', () => {
        if (snowify == 'null') {
            snowify = 'false';
        }
        if (snowify === 'false') {
            snowify = 'true';
        } else {
            snowify = 'false';
        }
        localStorage.setItem('snowify', snowify);
        setSnowScheme();
    });
}

snowScheme();