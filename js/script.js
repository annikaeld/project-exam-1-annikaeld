function toggleDropdown(id) {
  document.getElementById(id).classList.toggle("show");
}

function toggleExpandedMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " expanded";
  } else {
    x.className = "topnav";
  }
}
