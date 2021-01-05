
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
import "channels";
import { openBurgerMenu } from '../components/burger-menu';
import { switchActiveLink } from '../components/navbar';

document.addEventListener('turbolinks:load', () => {
  openBurgerMenu();
  switchActiveLink();
});
