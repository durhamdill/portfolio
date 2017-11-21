window.addEventListener("scroll", showNav);

function showNav() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("nav-bar").style.top = "0";
  } else {
      document.getElementById("nav-bar").style.top = "100%";
  }
}
