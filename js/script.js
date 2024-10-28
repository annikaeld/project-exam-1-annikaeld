function toggleDropdown(id) {
  document.getElementById(id).classList.toggle("show");
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " expanded";
  } else {
    x.className = "topnav";
  }
}
