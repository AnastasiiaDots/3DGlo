const validate = (input) => {
  const phoneRegex = /^\+?\d{1,3}[-.\s()]?(\d{3}[-.\s()]?){2}\d{4}$/;
  //   const nameRegex = /^[\u0400-\u04FF\s]{2,}$/;
  //   const messageRegex = /^[а-яА-Я\s\d.,?!]+$/u;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  let success = true;

  input.forEach((item) => {
    item.classList.remove("error");

    switch (item.getAttribute("name")) {
      case "user_name":
        if (item.value.trim().length < 2) break;
        return;
      case "user_phone":
        if (!phoneRegex.test(item.value)) break;
        return;
      case "user_email":
        if (
          !emailRegex.test(item.value) ||
          item.value.split(".").pop().length < 2
        )
          break;
        return;
      default:
        return;
    }

    item.classList.add("error");
    success = false;
  });
  return success;
};

export default validate;
