//  Toggle class active

const navbarMenu = document.querySelector(".navbar_menu");

// Activation Hamburger Menu

document.querySelector("#hamburger-menu").onclick = () => {
  navbarMenu.classList.toggle("active");
};
