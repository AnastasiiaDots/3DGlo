const forms = () => {
  const inputText = document.querySelectorAll('input[type="text"]');
  const inputEmail = document.querySelectorAll('input[type="email"]');
  const inputPhone = document.querySelectorAll('input[type="tel"]');
  const msg = document.getElementById("form2-message");

  inputText.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яёЁ\s-]/gi, "");
    });
  });

  inputEmail.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^a-zA-Z0-9.@\-_!~*'']/g, "");
    });
  });

  inputPhone.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d\s()+-]/gi, "");
    });
  });

  msg.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яёЁ\s-]/gi, "");
  });
};

export default forms;
