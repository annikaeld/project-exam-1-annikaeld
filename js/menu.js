function addMenu(activeMenuItem) {
  const topnav = document.getElementById("topnav");
  const dropdownHTML = `
        <li class="dropdown">
            <a href="api-page.html?link=visit" id="menu-visit" class="dropbtn" onclick="toggleDropdown('visitDropdown')">Finn oss</a>
            <div id="visit-dropdown" class="dropdown-content">
                <a href="api-page.html?link=prices" id="menu-prices">Prisar</a>
                <a href="api-page.html?link=rental" id="menu-rental">Leige av utstyr</a>
            </div>
        </li>
        <li class="dropdown">
            <a href="api-page.html?link=climbing" id="menu-climbing" class="dropbtn" onclick="toggleDropdown('climbingDropdown')">Klatring</a>
            <div id="climbing-dropdown" class="dropdown-content">
                <a href="api-page.html?link=safety" id="menu-safety">Tryggleik</a>
                <a href="api-page.html?link=outside" id="menu-outside">Ute</a>
                <a href="api-page.html?link=courses" id="menu-courses">Aktivitetar</a>
            </div>
        </li>
        <li><a href="api-page.html?link=about" id="menu-about">Om oss</a></li>
        <li><a href="latest.html" id="menu-latest">Siste nytt</a></li>
        <li><a href="api-page.html?link=contribute" id="menu-contribute">Bidra</a></li>
        <li><a href="api-page.html?link=sponsors" id="menu-sponsors">Sponsorar</a></li>
        <li class="icon" role="button" tabindex="0" aria-label="Toggle menu" onclick="toggleExpandedMenu()" onkeypress="if(event.key === 'Enter') toggleExpandedMenu()">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </li>
    `;
  topnav.innerHTML = dropdownHTML;
  var activeSubMenuItem;
  if (activeMenuItem == "prices" || activeMenuItem == "rental") {
    activeSubMenuItem = activeMenuItem;
    activeMenuItem = "visit";
  } else if (
    activeMenuItem == "safety" ||
    activeMenuItem == "outside" ||
    activeMenuItem == "courses"
  ) {
    activeSubMenuItem = activeMenuItem;
    activeMenuItem = "climbing";
  }
  if (activeMenuItem) {
    const activeElement = document.getElementById("menu-" + activeMenuItem);
    if (activeElement) {
      activeElement.className = "active-menu-item";
    }
    if (activeMenuItem == "visit" || activeMenuItem == "climbing") {
      const dropdownElement = document.getElementById(
        activeMenuItem + "-dropdown"
      );
      if (dropdownElement) {
        dropdownElement.className = "dropdown-content show";
      }
    }
  }
  if (activeSubMenuItem) {
    const activeSubElement = document.getElementById(
      "menu-" + activeSubMenuItem
    );
    if (activeSubElement) {
      activeSubElement.className = "active-sub-menu-item";
    }
  }
}

function toggleDropdown(id) {
  document.getElementById(id).classList.toggle("show");
}

function toggleExpandedMenu() {
  var x = document.getElementById("topnav");
  const navBackground = document.getElementById("nav-background");

  if (x.className === "topnav") {
    x.className += " expanded";
    navBackground.className = "expanded";
  } else {
    x.className = "topnav";
    navBackground.className = "";
  }
}

export { addMenu, toggleDropdown, toggleExpandedMenu };
window.toggleDropdown = toggleDropdown;
window.toggleExpandedMenu = toggleExpandedMenu;