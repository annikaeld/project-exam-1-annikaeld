import { getQueryParam } from "./getQueryParam.js";

function addMenu(activeMenuItem) {
  const myTopnav = document.getElementById("myTopnav");
  const dropdownHTML = `
        <li class="dropdown">
            <a href="api-page.html?link=visit" id="menu-visit" class="dropbtn" onclick="toggleDropdown('visitDropdown')">Besøk oss</a>
            <div id="visit-dropdown" class="dropdown-content">
                <a href="api-page.html?link=prices" id="menu-prices">Prisar</a>
                <a href="api-page.html?link=rental" id="menu-rental">Leige av utstyr</a>
            </div>
        </li>
        <li class="dropdown">
            <a href="api-page.html?link=climbing" id="menu-climbing" class="dropbtn" onclick="toggleDropdown('climbingDropdown')">Klatring</a>
            <div id="climbing-dropdown" class="dropdown-content">
                <a href="api-page.html?link=safety" id="menu-safety">Sikkerhet</a>
                <a href="api-page.html?link=outside" id="menu-outside">Ute</a>
                <a href="api-page.html?link=courses" id="menu-courses">Aktivitetar</a>
            </div>
        </li>
        <li><a href="api-page.html?link=about" id="menu-about">Om oss</a></li>
        <li><a href="latest.html" id="menu-latest">Siste nytt</a></li>
        <li><a href="api-page.html?link=contribute" id="menu-contribute">Bidra</a></li>
        <li><a href="api-page.html?link=sponsors" id="menu-sponsors">Sponsorar</a></li>
        <li><a href="javascript:void(0);" class="icon" onclick="toggleExpandedMenu()">
            <i class="fa fa-bars"></i>
        </a></li>
    `;
  myTopnav.innerHTML = dropdownHTML;
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
      console.log("visit or climbing");
      const dropdownElement = document.getElementById(
        activeMenuItem + "-dropdown"
      );
      if (dropdownElement) {
        dropdownElement.className = "dropdown-content show";
        console.log("Updated className:", dropdownElement.className); // Verify the change
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

export { addMenu };
