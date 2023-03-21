const calc = () => {
  const squareInput = document.querySelector(".calc-square");
  const countInput = document.querySelector(".calc-count");
  const dayInput = document.querySelector(".calc-day");

  squareInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/, "");
  });

  countInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/, "");
  });

  dayInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/, "");
  });
};

export default calc;
