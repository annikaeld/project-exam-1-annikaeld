import { openingHours } from './openingHours.js';
function addFooter() {
  var footerElement = document.querySelector('.footer');
  footerElement.innerHTML = `
    <div class="footer-left">
      <a href="index.html"> <img src="/pictures/STOKK logo kvit.svg" alt="logo of STOKK" class="bottom-logo"></a>
    </div>
    <div class="footer-right">
      ${openingHours()}
    </div>
  `;
}
export { addFooter };
