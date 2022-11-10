var btnContainer = document.getElementById("ul_navbar");

var navs = btnContainer.getElementsByClassName("nav-itm");

for (var i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}