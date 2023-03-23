const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");

  const animateModal = () => {
    modal.style.display = "block";
    if (window.innerWidth < 768) {
      return;
    }
    modal.style.opacity = 0;

    let opacity = 0;
    const fadeIn = setInterval(() => {
      opacity += 0.05;
      modal.style.opacity = opacity;
      if (opacity >= 1) clearInterval(fadeIn);
    }, 20);
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", animateModal);
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
  });
};

export default modal;
