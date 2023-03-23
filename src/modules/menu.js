const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  // const menuItems = menu.querySelectorAll("ul>li>a");
  const body = document.querySelector("body");

  const handleMenu = () => {
    menu.classList.toggle("active-menu"); //active-menu from css proporties
  };
  menuBtn.addEventListener("click", handleMenu);

  body.addEventListener("click", (e) => {
    if (e.target === closeBtn || e.target.closest(".active-menu")) {
      menu.classList.toggle("active-menu");
    }
  });
};

export default menu;
