/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


phone.addEventListener('click', openCallModal);
sendPhone.addEventListener('click', sendPhoneModal);
document.querySelector('.menu').addEventListener('click', openMenu);
function sendPhoneModal(event) {
  event.preventDefault();
  console.log(event);
  //some
}
function openMenu(event) {
  document.querySelector('#socialLinks').classList.toggle('active');
}
function openCallModal(event) {
  document.querySelector('body').classList.add('show-modal');
  document.querySelector('#callModal').style.display = 'flex';
  callModal.addEventListener('click', closeCallModal);
  closeBtn.addEventListener('click', closeCallModal);
}
function closeCallModal(event) {
  event.preventDefault();
  if (event.target.id == 'callModal' || event.target.id == 'closeBtn') {
    document.querySelector('body').classList.remove('show-modal');
    document.querySelector('#callModal').style.display = 'none';
    callModal.removeEventListener('click', closeCallModal);
    closeBtn.addEventListener('click', closeCallModal);
  }
}

// console.log('Проект собран на Webpack');
/******/ })()
;