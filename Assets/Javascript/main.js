//  Toggle class active

const navbarMenu = document.querySelector(".navbar_menu");

// Activation Hamburger Menu

document.querySelector("#hamburger-menu").onclick = () => {
  navbarMenu.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove("active");
  }
});
