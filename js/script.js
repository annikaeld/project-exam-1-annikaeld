function toggleDropdown(id) {
  document.getElementById(id).classList.toggle("show");
}

function toggleExpandedMenu() {
  var x = document.getElementById("myTopnav");
  const navBackground = document.getElementById("nav-background");

  if (x.className === "topnav") {
    x.className += " expanded";
    navBackground.className = "expanded";
  } else {
    x.className = "topnav";
    navBackground.className = "";
  }
}

function contactPage() {
  window.location.href = 'contact.html';
}