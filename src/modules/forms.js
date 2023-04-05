const forms = () => {
  const inputText = document.querySelector('input[type="text"]');
  const inputEmail = document.querySelector('input[type="email"]');
  const inputPhone = document.querySelector('input[type="tel"]');
  const msg = document.getElementById("form2-message");

  inputText.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яёЁ\s-]/gi, "");
  });

  inputEmail.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z0-9.@\-_!~*'']/g, "");
  });

  inputPhone.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d\s()+-]/gi, "");
  });

  msg.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яёЁ\s-]/gi, "");
  });
};

export default forms;
