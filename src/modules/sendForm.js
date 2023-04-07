import validate from "./validate";

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const input = form.querySelectorAll("input");
  const statusBlock = document.createElement("div");
  const loadText = "Uploading...";
  const errorText = "Error...";
  const successText = "Thank you! Our manager will contact you";

  const sendData = (data) =>
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

  const submitForm = () => {
    if (!validate(input)) return;

    const formData = new FormData(form);
    const formBody = {};

    form.appendChild(statusBlock);
    statusBlock.textContent = loadText;
    statusBlock.style.display = "block";

    formData.forEach((val, key) => {
      val && (formBody[key] = val);
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        total.textContent !== "0" && (formBody[elem.id] = element.textContent);
      } else if (elem.type === "input") {
        element.value && (formBody[elem.id] = element.value);
      }
    });

    sendData(formBody)
      .then((data) => {
        statusBlock.textContent = successText;
        input.forEach((input) => {
          input.value = "";
        });
        setTimeout(() => {
          statusBlock.textContent = "";
        }, 3000);
      })
      .catch((error) => {
        statusBlock.textContent = errorText;
      });
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место, пожалуйста");
    }
    form.setAttribute("novalidate", true);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm(form);
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
