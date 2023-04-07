const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const input = form.querySelectorAll("input");
  const statusBlock = document.createElement("div");
  // const loadText = "Uploading...";
  const errorText = "Error...";
  const successText = "Thank you! Our manager will contact you";

  const validate = (input) => {
    const phoneRegex = /^\+?(\d{6,11}[\d()-]*\d)$/;
    const nameRegex = /^[\u0400-\u04FF\s]{2,}$/;
    // const messageRegex = /^[\u0400-\u04FF\s\d\p{P}]+$/u;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    let success = true;

    input.forEach((item) => {
      if (item.name === "user_phone" && !phoneRegex.test(item.value)) {
        success = false;
        item.classList.add("error");
      } else if (item.classList.contains("error")) {
        item.classList.remove("error");
      }

      if (
        item.name === "user_name" &&
        (!nameRegex.test(item.value) || item.value.trim().length < 2)
      ) {
        success = false;
        item.classList.add("error");
      } else if (item.classList.contains("error")) {
        item.classList.remove("error");
      }

      // if (item.name === "user_message" && !messageRegex.test(item.value)) {
      //   success = false;
      //   if (!item.classList.contains("error")) {
      //     item.classList.add("error");
      //   }
      // } else if (item.classList.contains("error")) {
      //   item.classList.remove("error");
      // }

      if (
        item.name === "user_email" &&
        (!emailRegex.test(item.value) || item.value.split(".").pop().length < 2)
      ) {
        success = false;
        item.classList.add("error");
      } else if (item.classList.contains("error")) {
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

    let hasError = false; // Initialize hasError as false

    for (let i = 0; i < formElements.length; i++) {
      if (formElements[i].classList.contains("error")) {
        hasError = true; // Set hasError to true if an error is found
        break;
      }
    }

    statusBlock.style.display = "none";
    form.appendChild(statusBlock);

    if (!hasError) {
      if (validate(formElements)) {
        statusBlock.textContent = "Uploading...";
        statusBlock.style.display = "block";
      }

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

      if (!document.querySelector("#form2-message").value.trim()) {
        delete formBody.user_message;
      }

      if (total.textContent == "0") {
        delete formBody.total;
      }

      if (validate(formElements)) {
        sendData(formBody)
          .then((data) => {
            statusBlock.textContent = successText;
            statusBlock.style.display = "block";
            formElements.forEach((input) => {
              input.value = "";
            });
            setTimeout(() => {
              statusBlock.textContent = "";
            }, 3000);
          })
          .catch((error) => {
            statusBlock.textContent = errorText;
            statusBlock.style.display = "block";
          });
      } else {
        formElements.forEach((input) => {
          input.classList.add("error");
        });
        alert("Data is not valid");
      }
    }
  };

  // input.forEach((item) => {
  //   item.addEventListener("input", () => {
  //     validate([item]);
  //     if (!item.classList.contains("error")) {
  //       item.classList.remove("error");
  //     }
  //   });
  // });

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
