var body = document.querySelectorAll('body');
var sidemenu = document.querySelectorAll('.sidemenu');
var sidemenuMobile = document.querySelectorAll('.sidemenuMobile');
var profileMenuActive = document.querySelectorAll('.profileMenuActive');
var post = document.querySelectorAll('.post');
var postResultaten = document.querySelectorAll('.postResultaten');
var postContent = document.querySelectorAll('.postContent');
var profileFlex = document.querySelectorAll('.profileFlex');
var profileNumbers = document.querySelectorAll('.profileNumbers');
var profileMenu = document.querySelectorAll('.profileMenu');
var headerRecords = document.querySelectorAll('.headerRecords');
var resultatenNumbers = document.querySelectorAll('.resultatenNumbers');
var officieelBericht = document.querySelectorAll('.officieelBericht');
var officieelBerichtH2 = document.querySelectorAll('.officieelBerichtH2');
var header = document.querySelectorAll('.header');
var bottomNavbar = document.querySelectorAll('.bottom-navbar');
var content = document.querySelectorAll('.content');
var notificationContent = document.querySelectorAll('.notificationContent');
var settings = document.querySelectorAll('.settings');
var check = document.getElementById('check');
var checkWeb = document.getElementById('checkWeb');
var checkStatus;

check.addEventListener('change', darkMode);
checkWeb.addEventListener('change', darkMode);

darkMode();

function darkMode(){
  if (this.checkend || checkStatus == false) {
    for (var i = 0; i < body.length; ++i) {
      body[i].classList.add('bodyDark');
    }

    for (var i = 0; i < sidemenu.length; ++i) {
      sidemenu[i].classList.add('sidemenuDark');
    }

    for (var i = 0; i < sidemenuMobile.length; ++i) {
      sidemenuMobile[i].classList.add('sidemenuMobileDark');
    }
    for (var i = 0; i < profileMenuActive.length; ++i) {
      profileMenuActive[i].classList.add('profileMenuActiveDark');
    }

    for (var i = 0; i < post.length; ++i) {
      post[i].classList.add('postDark');
    }

    for (var i = 0; i < postResultaten.length; ++i) {
      postResultaten[i].classList.add('postResultatenDark');
    }

    for (var i = 0; i < postContent.length; ++i) {
      postContent[i].classList.add('postContentDark');
    }

    for (var i = 0; i < profileFlex.length; ++i) {
      profileFlex[i].classList.add('profileFlexDark');
    }

    for (var i = 0; i < profileNumbers.length; ++i) {
      profileNumbers[i].classList.add('profileNumbersDark');
    }

    for (var i = 0; i < profileMenu.length; ++i) {
      profileMenu[i].classList.add('profileMenuDark');
    }

    for (var i = 0; i < headerRecords.length; ++i) {
      headerRecords[i].classList.add('headerRecordsDark');
    }

    for (var i = 0; i < resultatenNumbers.length; ++i) {
      resultatenNumbers[i].classList.add('resultatenNumbersDark');
    }

    for (var i = 0; i < officieelBericht.length; ++i) {
      officieelBericht[i].classList.add('officieelBerichtDark');
    }

    for (var i = 0; i < officieelBerichtH2.length; ++i) {
      officieelBerichtH2[i].classList.add('officieelBerichtH2Dark');
    }

    for (var i = 0; i < header.length; ++i) {
      header[i].classList.add('headerDark');
    }

    for (var i = 0; i < bottomNavbar.length; ++i) {
      bottomNavbar[i].classList.add('bottom-navbarDark');
    }

    for (var i = 0; i < content.length; ++i) {
      content[i].classList.add('contentDark');
    }

    for (var i = 0; i < notificationContent.length; ++i) {
      notificationContent[i].classList.add('notificationContentDark');
    }

    for (var i = 0; i < settings.length; ++i) {
      settings[i].classList.add('settingsDark');
    }

    checkStatus = true;
  } else {
    for (var i = 0; i < body.length; ++i) {
      body[i].classList.remove('bodyDark');
    }

    for (var i = 0; i < sidemenu.length; ++i) {
      sidemenu[i].classList.remove('sidemenuDark');
    }

    for (var i = 0; i < sidemenuMobile.length; ++i) {
      sidemenuMobile[i].classList.remove('sidemenuMobileDark');
    }
    for (var i = 0; i < profileMenuActive.length; ++i) {
      profileMenuActive[i].classList.remove('profileMenuActiveDark');
    }

    for (var i = 0; i < post.length; ++i) {
      post[i].classList.remove('postDark');
    }

    for (var i = 0; i < postResultaten.length; ++i) {
      postResultaten[i].classList.remove('postResultatenDark');
    }

    for (var i = 0; i < postContent.length; ++i) {
      postContent[i].classList.remove('postContentDark');
    }

    for (var i = 0; i < profileFlex.length; ++i) {
      profileFlex[i].classList.remove('profileFlexDark');
    }

    for (var i = 0; i < profileNumbers.length; ++i) {
      profileNumbers[i].classList.remove('profileNumbersDark');
    }

    for (var i = 0; i < profileMenu.length; ++i) {
      profileMenu[i].classList.remove('profileMenuDark');
    }

    for (var i = 0; i < headerRecords.length; ++i) {
      headerRecords[i].classList.remove('headerRecordsDark');
    }

    for (var i = 0; i < resultatenNumbers.length; ++i) {
      resultatenNumbers[i].classList.remove('resultatenNumbersDark');
    }

    for (var i = 0; i < officieelBericht.length; ++i) {
      officieelBericht[i].classList.remove('officieelBerichtDark');
    }

    for (var i = 0; i < officieelBerichtH2.length; ++i) {
      officieelBerichtH2[i].classList.remove('officieelBerichtH2Dark');
    }

    for (var i = 0; i < header.length; ++i) {
      header[i].classList.remove('headerDark');
    }

    for (var i = 0; i < bottomNavbar.length; ++i) {
      bottomNavbar[i].classList.remove('bottom-navbarDark');
    }

    for (var i = 0; i < content.length; ++i) {
      content[i].classList.remove('contentDark');
    }

    for (var i = 0; i < notificationContent.length; ++i) {
      notificationContent[i].classList.remove('notificationContentDark');
    }

    for (var i = 0; i < settings.length; ++i) {
      settings[i].classList.remove('settingsDark');
    }

    checkStatus = false;
  }
}