const notificationArray = [
  {
    title: 'IMG Recruitment Update',
    body:
      'Hey, have you checked out the Winter Design Assignment? Click here to check them now.',
    icon: '/assets/img_notif.png',
    redirectURL: '/design/',
    token: 'eflzPOEBN3'
  },
  {
    title: 'IMG Recruitment Update',
    body:
      'Hey, have you checked out the Winter Developer Assignment? Click here to check them now.',
    icon: '/assets/img_notif.png',
    redirectURL: '/development/',
    token: 'LeyjfMSaDg'
  },
  {
    title: 'IMG Recruitment Update',
    body:
      'Deadline for submitting the design winter assignment has been extended.',
    icon: '/assets/img_notif.png',
    redirectURL: '/design/',
    token: 'Bnd5bZigNS'
  },
  {
    title: 'IMG Recruitment Update',
    body:
      'Recruitment Talk to held on 12 January, 2020 3:00 PM at MAC Auditorium',
    icon: '/assets/img_notif.png',
    token: 'R3cruitm3nt'
  },
  {
    title: 'IMG Recruitment Update',
    body:
      'Hey Designers, do you know the results for Designer Winter assignments are out? Click here to check them now!',
    icon: '/assets/img_notif.png',
    redirectURL: '/',
    token: 'D3s!gnR3sult'
  },
  {
    title: 'IMG Recruitment Update',
    body:
      'IMG releases more designers assignment for first as well as second years.',
    icon: '/assets/img_notif.png',
    redirectURL: '/design',
    token: 'D3s1gn@$$1nm3nts'
  },
  {
    title: 'IMG Recruitment Update',
    body:
      'Developers Recruitment Test to be held on 13 January, 2020 06:15 PM at LHC.',
    icon: '/assets/img_notif.png',
    redirectURL: '/development',
    token: 'R3cruitm3ntt3st'
  },
  {
    title: 'IMG Recruitment Update',
    body:
      'Deadline for various assignments has been extended to 13 January, 2020 midnight.',
    icon: '/assets/img_notif.png',
    redirectURL: '/',
    token: 'D3@dl!ne3xt3nd3d'
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
