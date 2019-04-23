
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;

    if (scroll > 0){

      var element = document.getElementById("my-menu");
      element.style.transition = "all 0.85s";
      element.classList.add("menu-style2");

      element = document.querySelector(".artist-name1");
      element.classList.add("artist-name2");
      element = document.querySelectorAll(".menu-font-style1");

      for (var i = 0; i < element.length; i++) {
        element[i].classList.add("menu-font-style2");
      }
    }else{
      var element = document.getElementById("my-menu");
      element.classList.remove("menu-style2");
      element = document.querySelector(".artist-name1");
      element.classList.remove("artist-name2");
      element = document.querySelectorAll(".menu-font-style1");
      for (var i = 0; i < element.length; i++) {
        element[i].classList.remove("menu-font-style2");
      }
    }
});


let buttonServices = document.getElementById("menu-services");
let buttonPortfolio = document.getElementById("menu-portfolio");
let buttonClients = document.getElementById("menu-clients");
let buttonAbout = document.getElementById("menu-about");
let buttonContact = document.getElementById("contact-button");

buttonServices.addEventListener("click", function () {
  $('.collapse').collapse('hide');
});
buttonServices.addEventListener("touchstart", function () {
  $('.collapse').collapse('hide');
});


buttonPortfolio.addEventListener("click", function () {
  $('.collapse').collapse('hide');
});
buttonPortfolio.addEventListener("touchstart", function () {
  $('.collapse').collapse('hide');
});



buttonClients.addEventListener("click", function () {
  $('.collapse').collapse('hide');
});
buttonClients.addEventListener("touchstart", function () {
  $('.collapse').collapse('hide');
});


buttonAbout.addEventListener("click", function () {
  $('.collapse').collapse('hide');
});
buttonAbout.addEventListener("touchstart", function () {
  $('.collapse').collapse('hide');
});


buttonContact.addEventListener("click", function () {
  $('.collapse').collapse('hide');
});
buttonContact.addEventListener("touchstart", function () {
  $('.collapse').collapse('hide');
});


