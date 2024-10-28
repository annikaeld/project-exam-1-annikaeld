function addDropdownMenu(activeMenuItem) {
    const myTopnav = document.getElementById('myTopnav');
    const dropdownHTML = `
        <li class="dropdown">
            <a href="api-page.html?link=visit" id="menu-visit" class="dropbtn" onclick="toggleDropdown('visitDropdown')">Besøk oss</a>
            <div id="visitDropdown" class="dropdown-content">
                <a href="api-page.html?link=prices" id="menu-prices">Prisar</a>
                <a href="api-page.html?link=rental" id="menu-rental">Leige av utstyr</a>
            </div>
        </li>
        <li class="dropdown">
            <a href="api-page.html?link=climbing" id="climbing" class="dropbtn" onclick="toggleDropdown('climbingDropdown')">Klatring</a>
            <div id="climbingDropdown" class="dropdown-content">
                <a href="api-page.html?link=safety" id="safety">Sikkerhet</a>
                <a href="api-page.html?link=outside" id="outside">Ute</a>
                <a href="api-page.html?link=courses" id="courses">Aktivitetar</a>
            </div>
        </li>
        <li><a href="api-page.html?link=about" id="about">Om oss</a></li>
        <li><a href="latest.html" id="latest">Siste nytt</a></li>
        <li><a href="api-page.html?link=contribute" id="contribute">Bidra</a></li>
        <li><a href="api-page.html?link=sponsors" id="sponsors">Sponsorar</a></li>
        <li><a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a></li>
    `;
    myTopnav.innerHTML = dropdownHTML;

    if (activeMenuItem) {
        const activeElement = document.getElementById(activeMenuItem);
        if (activeElement) {
            activeElement.className = 'active-menu-item';
        }
    }
}

addDropdownMenu();