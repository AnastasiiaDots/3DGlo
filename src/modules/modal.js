import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");

  // function to animate the modal
  const animateModal = () => {
    if (modal.style.display !== "block") {
      modal.style.display = "block";
      // check for screen size before animating
      if (window.innerWidth >= 768) {
        animate({
          duration: 300,
          timing(timeFraction) {
            return Math.pow(timeFraction, 2);
          },
          draw(progress) {
            modal.style.opacity = progress;
          },
        });
      }
    }
  };

  // add event listeners to the buttons
  buttons.forEach((btn) => {
    btn.addEventListener("click", animateModal);
  });

  // close the modal when clicking outside of it
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
