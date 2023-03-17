const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");

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

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
};

export default modal;
