
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
import "channels";

const burger = document.querySelector('.button-burger');
const overlay = document.querySelector('.main-header-overlay');
const mainNav = document.querySelector('.main-nav');
const body = document.querySelector('body');

document.addEventListener('turbolinks:load', () => {

  // Au clic sur le burger menu
  burger.addEventListener('click', (event) => {
    // Transformation du burger menu en fleche
    event.currentTarget.classList.toggle('active');
    // Translation de la gauche vers la droite de la main-nav
    mainNav.classList.toggle('active');
    // Apparition de l'overlay
    overlay.classList.toggle('active');
    // Empecher le scrollvertical lorsque le menu est ouvert
    body.classList.toggle("overflow_hidden");
  });

  // Au clic sur l'overlay, quitter le burger menu
  overlay.addEventListener('click', (event) => {
    // Transformation du burger menu en fleche
    burger.classList.remove('active');
    // Translation de la gauche vers la droite de la main-nav
    mainNav.classList.remove('active');
    // Disparition de l'overlay
    event.currentTarget.classList.remove('active');
    // Empecher le scrollvertical lorsque le menu est ouvert
    body.classList.remove("overflow_hidden");
  });
});
