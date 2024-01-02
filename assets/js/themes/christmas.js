// christmasify
// function christmasScheme() {
//     const christmasButton = document.getElementById('christmasSchemeButton');
//     let christmasify = localStorage.getItem('christmasify');

//     function setChristmasScheme() {
//         document.documentElement.dataset.christmas = christmasify;
//         if (christmasify === 'true') {
//             christmasButton.setAttribute('aria-pressed', true);
//         } else {
//             christmasButton.setAttribute('aria-pressed', false);
//         }
//     }

//     if (christmasify != null) {
//         setChristmasScheme();
//     } else {
//         document.documentElement.dataset.christmas = true;
//         christmasButton.setAttribute('aria-pressed', true);
//     }

//     christmasButton.addEventListener('click', () => {
//         if (christmasify == 'null') {
//             christmasify = 'true';
//         }
//         if (christmasify === 'false') {
//             christmasify = 'true';
//         } else {
//             christmasify = 'false';
//         }
//         localStorage.setItem('christmasify', christmasify);
//         setChristmasScheme();
//     });
// }

// christmasScheme();

localStorage.removeItem('christmasify')
localStorage.removeItem('spookify')