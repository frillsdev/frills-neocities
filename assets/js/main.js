// Add notification bunotife to nav items
function notification(navItem, hiddenText) {
    const notifNavItem = navItem
    const notifSRText = hiddenText
    const notifTarget = document.getElementsByClassName('page__nav')[0].getElementsByTagName('UL')[0].children.item(notifNavItem)

    const notif = document.createElement('span')
    notif.classList.add('notification')
    notif.innerHTML = notifSRText
    notifTarget.append(notif)
}

window.addEventListener('load', function () {
    notification(3, 'New!');
}, true);