const sendForm = ({ formId, someElem = [] }) => {
  const forms = document.querySelectorAll(formId);
  forms.forEach((form) => {
    const statusBlock = document.createElement("div");
    const loadText = "Uploading...";
    const errorText = "Error...";
    const successText = "Thank you! Our manager will contact you";

    if (!form) {
      console.log(`Form with id ${id} not found. Skipping...`);
      return;
    }

    const validate = (list) => {
      let success = true;

      // Check phone number input
      const phoneInput = document.querySelector('input[type="tel"]');
      const phoneRegex = /^[\d+()-]+$/;
      if (!phoneRegex.test(phoneInput.value)) {
        success = false;
      }

      // Check name input
      const nameInput = document.querySelector('input[type="text"]');
      const nameRegex = /^[а-яА-Я\s]+$/;
      if (!nameRegex.test(nameInput.value)) {
        success = false;
      }

      // Check message input
      const messageInput = document.getElementById("form2-message");
      const messageRegex = /^[а-яА-Я\s\d.,?!]+$/;
      if (!messageRegex.test(messageInput.value)) {
        success = false;
      }

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

      if (validate(formElements)) {
        sendData(formBody)
          .then((data) => {
            statusBlock.textContent = successText;
            formElements.forEach((input) => {
              input.value = "";
            });
          })
          .catch((error) => {
            statusBlock.textContent = errorText;
          });
      } else {
        alert("Data is not valid");
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
  });
};

export default sendForm;
