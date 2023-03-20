const calc = () => {
  const numberPattern = /^\d+$/;

  const squareInput = document.querySelector(".calc-square");
  const countInput = document.querySelector(".calc-count");
  const dayInput = document.querySelector(".calc-day");

  squareInput.addEventListener("input", (e) => {
    const inputValue = e.target.value.trim();
    const isValid = inputValue !== "" && numberPattern.test(inputValue);
    const isError = !isValid;
    if (isError) {
      alert("Пожалуйста, введите только числа.");
    }
  });

  countInput.addEventListener("input", (e) => {
    const inputValue = e.target.value.trim();
    const isValid = inputValue !== "" && numberPattern.test(inputValue);
    const isError = !isValid;
    if (isError) {
      alert("Пожалуйста, введите только числа.");
    }
  });

  dayInput.addEventListener("input", (e) => {
    const inputValue = e.target.value.trim();
    const isValid = inputValue !== "" && numberPattern.test(inputValue);
    const isError = !isValid;
    if (isError) {
      alert("Пожалуйста, введите только числа.");
    }
  });
};

export default calc;
