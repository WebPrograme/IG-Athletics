var records = document.querySelector('.profileRecords');
var recordsMore = document.querySelector('.profileRecordsMore');
var recordsMore2 = document.querySelector('.profileRecordsMore2');
recordsMore2.style.display='none';

recordsMore.addEventListener('click', function () {
  recordsMore.style.display='none';
  recordsMore2.style.display='block';
  records.style.display='block';
})

recordsMore2.addEventListener('click', function () {
  recordsMore2.style.display='none';
  recordsMore.style.display='block';
  records.style.display='none';
})

var z = document.querySelector('.active').offsetLeft;
var effect = document.querySelector('.effect');

effect.style.left= `${z}px`;

var headerProfile = document.querySelector('.headerProfile');
var headerProfileMobile = document.querySelector('.headerProfileMobile');

headerProfileMobile.style.display='none';

headerProfile.addEventListener('click', function(){
  document.querySelector('.settings').style.display='block';
  headerProfile.style.display='none';
  headerProfileMobile.style.display='block';
})

headerProfileMobile.addEventListener('click', function(){
  document.querySelector('.settings').style.display='none';
  headerProfile.style.display='block';
  headerProfileMobile.style.display='none';
})

var notificationTrigger = document.querySelector('.notificationButton');
var notificationClose = document.querySelector('.notificationClose');
var notifications = document.querySelector('.notificationContent');
var overlay = document.querySelector('.overlay');

notificationTrigger.addEventListener('click', function(){
  notifications.style.display='block';
  overlay.style.display='block';
})

notificationClose.addEventListener('click', function(){
  notifications.style.display='none';
  overlay.style.display='none';
})