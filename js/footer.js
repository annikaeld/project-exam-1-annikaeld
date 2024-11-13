import { openingHours } from './openingHours.js';
function addFooter() {
  var footerElement = document.querySelector('.footer');
  footerElement.innerHTML = `
    <div class="footer-item" id="item-logo">
      <a href="index.html"> <img src="/pictures/STOKK logo kvit.svg" alt="logo of STOKK" class="bottom-logo"></a>
    </div>
    <div class="footer-item some" id="item-facebook">
      <a href="https://www.facebook.com/stokk.org"><img src="/pictures/facebook.svg" alt="facebook logo" class="social-media"></a>
    </div>
    <div class="footer-item some" id="item-instagram">
      <a href="https://www.instagram.com/stordtindeogklatreklubb/"><img src="/pictures/instagram.svg" alt="instagram logo" class="social-media"></a>
    </div>
    <div class="footer-item" id="item-opening-hours">
      ${openingHours()}
    </div>
  `;
}
export { addFooter };
