const forms = () => {
  const inputs = document.querySelectorAll(
    'input[type="text"], input[type="tel"], input[type="email"]'
  );

  const cyrillicRegex = /^[а-яёЁ\s-]*$/i;
  const emailRegex = /^[a-zA-Z0-9._!~*'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[\d\s()-]*$/;

  const validateInput = (input, regex) => {
    if (!regex.test(input.value)) {
      input.setCustomValidity(`Please enter a valid ${input.type} value.`);
    } else {
      input.setCustomValidity("");
    }
  };

  inputs.forEach((input) => {
    if (input.type === "text") {
      input.addEventListener("input", () => {
        validateInput(input, cyrillicRegex);
      });
    } else if (input.type === "email") {
      input.addEventListener("input", () => {
        validateInput(input, emailRegex);
      });
    } else if (input.type === "tel") {
      input.addEventListener("input", () => {
        validateInput(input, phoneRegex);
      });
    }
  });
};

export default forms;
