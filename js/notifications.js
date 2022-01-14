const notificationArray = [
  {
    title: 'IMG Recruitment Update',
    body:
      'Hey, have you checked out the Winter Design Assignment? Click here to check them now.',
    icon: '/assets/img_notif.png',
    redirectURL: '/design/',
    token: 'sdmnjyhdsw'
  },
  {
    title: 'IMG Recruitment Update',
    body:
      'Hey, have you checked out the Winter Developer Assignment? Click here to check them now.',
    icon: '/assets/img_notif.png',
    redirectURL: '/development/',
    token: 'sdmnjyhddw'
  },
  {
    title: 'IMG Recruitment Update',
    body:
      'Hey, join us to learn Javascript basics and build a simple game with us. Livestreaming on our youtube channel on 14Jan, 5-7 PM.',
    icon: '/assets/img_notif.png',
    redirectURL: 'https://youtu.be/y5TXGy-2CiQ',
    token: 'asdfghdjbc'
  },
  {
    title: 'IMG Recruitment Update',
    body:
      'Hey, join us to get an overview on UI/UX Design and develop product thinking with us. Livestreaming on our youtube channel on 15Jan, 5-7 PM.',
    icon: '/assets/img_notif.png',
    redirectURL: 'https://youtu.be/MtBL-4dPc6c',
    token: 'qwerty123'
  }
]

// Cookies, yumm!
function setCookie (name, value, days) {
  var expires = ''
  if (days) {
    var date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
}
function getCookie (name) {
  var nameEQ = name + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}
function eraseCookie (name) {
  document.cookie = name + '=; Max-Age=-99999999;'
}

function spawnNotification () {
  const notifLastToken = getCookie('notifLastToken')
  let lastNotifIndex = -1
  lastNotifIndex = notificationArray.findIndex(
    notif => notif.token == notifLastToken
  )
  const notification = []
  for (let i = notificationArray.length - 1; i > lastNotifIndex; i--) {
    notification[i] = new Notification(notificationArray[i].title, {
      body: notificationArray[i].body,
      icon: notificationArray[i].icon
    })
    if (notificationArray[i].redirectURL) {
      notification[i].onclick = () => {
        notification[i].close()
        window.location = notificationArray[i].redirectURL
      }
    }
  }
  setCookie(
    'notifLastToken',
    notificationArray[notificationArray.length - 1].token,
    90
  )
}

const notifPermission = Notification.permission

if (notifPermission != 'granted') {
  Notification.requestPermission().then(function (result) {
    if (result == 'granted') {
      ga(
        'send',
        'event',
        'Notification',
        'notification subscribed',
        'Notification allowed'
      )
      spawnNotification()
    }
  })
} else {
  spawnNotification()
}
