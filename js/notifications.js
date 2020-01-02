const notificationArray = [
    { title: 'IMG Recruitment Update', body: 'Hey, have you checked out the Winter Design Assignment? Click here to check them now.', icon: '/assets/img_notif.png', redirectURL: '/design/', token: 'eflzPOEBN3' },
    { title: 'IMG Recruitment Update', body: 'Hey, have you checked out the Winter Developer Assignment? Click here to check them now.', icon: '/assets/img_notif.png', redirectURL: '/development/', token: 'LeyjfMSaDg' },
    { title: 'IMG Recruitment Update', body: 'Deadline for submitting the design winter assignment has been extended.', icon: '/assets/img_notif.png', redirectURL: '/design/', token: 'Bnd5bZigNS' },
]


// Cookies, yumm!
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

function spawnNotification() {
    const notifLastToken = getCookie('notifLastToken')
    let lastNotifIndex = -1
    lastNotifIndex = notificationArray.findIndex(notif => (notif.token == notifLastToken))
    const notification = []
    for (let i = lastNotifIndex + 1; i < notificationArray.length; i++) {
        setCookie('notifLastToken', notificationArray[i].token, 90)
        notification[i] = new Notification(notificationArray[i].title, { body: notificationArray[i].body, icon: notificationArray[i].icon })
        if (notificationArray[i].redirectURL) {
            notification[i].onclick = () => {
                notification[i].close()
                window.location = notificationArray[i].redirectURL
            }
        }
    }
}

const notifPermission = Notification.permission


if (notifPermission != "granted") {
    Notification.requestPermission().then(function (result) {
        if (result == "granted") {
            ga('send', 'event', 'Notification', 'notification subscribed', 'Notification allowed');
            spawnNotification()
        }
    })
} else {
    spawnNotification()
}
