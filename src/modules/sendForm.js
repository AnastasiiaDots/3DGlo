const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const input = form.querySelectorAll("input");
  const statusBlock = document.createElement("div");
  const loadText = "Uploading...";
  const errorText = "Error...";
  const successText = "Thank you! Our manager will contact you";

  const validate = (input) => {
    const phoneRegex = /^\+?(\d{6,11}[\d()-]*\d)$/;
    const nameRegex = /^[\u0400-\u04FF\s]{2,}$/;
    const messageRegex = /^[\u0400-\u04FF\s\d\p{P}]+$/u;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    let success = true;

    input.forEach((item) => {
      if (item.name === "user_phone" && !phoneRegex.test(item.value)) {
        success = false;
        item.classList.add("error");
      } else {
        item.classList.remove("error");
      }

      if (
        item.name === "user_name" &&
        (!nameRegex.test(item.value) || item.value.trim().length < 2)
      ) {
        success = false;
        item.classList.add("error");
      } else {
        item.classList.remove("error");
      }

      if (item.name === "user_message" && !messageRegex.test(item.value)) {
        success = false;
      }

      if (
        item.name === "user_email" &&
        (!emailRegex.test(item.value) || item.value.split(".").pop().length < 2)
      ) {
        success = false;
        item.classList.add("error");
      } else {
        item.classList.remove("error");
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    form.setAttribute("novalidate", true);

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    const totalZero = someElem.some(
      (elem) => elem.id === "total" && elem.value === "0"
    );

    if (totalZero) {
      statusBlock.textContent = successText;
      formElements.forEach((input) => {
        input.value = "";
      });
    } else if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formElements.forEach((input) => {
            input.value = "";
          });
          setTimeout(() => {
            statusBlock.textContent = "";
          }, 3000);
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      formElements.forEach((input) => {
        input.classList.add("error");
      });
      // alert("Data is not valid");
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место, пожалуйста");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm(form);
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
