import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calc from "./modules/cacl";
import forms from "./modules/forms";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sendForm from "./modules/sendForm";

timer("31 march 2023");
menu();
modal();
calc(100);
forms();
tabs();
slider();
sendForm({
  formId: ["form1", "form2", "form3"],
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
