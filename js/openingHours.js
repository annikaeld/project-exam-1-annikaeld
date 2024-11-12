function openingHours() {
    return `
      <h2>Opningstider</h2>
      <p>Mandag: 19 - 21</p>
      <p>Torsdag: 19 - 21</p>
      <p>Laurdag: 11 - 16</p>
      <p>Søndag: 11 - 16</p>
    `;
}

function insertOpeningHours() {
    var openingHoursElement = document.querySelector('.opening-hours');
    if (openingHoursElement) { openingHoursElement.innerHTML = openingHours(); }

}

export { openingHours, insertOpeningHours };