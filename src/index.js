let survey_options = document.getElementById("survey_options");
let add_more_fields = document.getElementById("add_more_fields");
let remove_fields = document.getElementById("remove_fields");
let printBtn = document.getElementById("print-values-btn");
let printCtn = document.getElementById("print-values-ctn");

add_more_fields.onclick = function () {
  let newField = document.createElement("input");
  newField.setAttribute("type", "text");
  newField.setAttribute("name", "survey_options[]");
  newField.setAttribute("class", "survey_options");
  newField.setAttribute("siz", 50);
  newField.setAttribute("placeholder", "Another Field");
  survey_options.appendChild(newField);
};

remove_fields.onclick = function () {
  let input_tags = survey_options.getElementsByTagName("input");
  if (input_tags.length > 2) {
    survey_options.removeChild(input_tags[input_tags.length - 1]);
  }
};

printBtn.onclick = function () {
  let allTextBoxes = document.getElementsByName("survey_options[]");
  for (let i of allTextBoxes) {
    // console.log(i.value); //here you will be able to see all values in the console
    let printElem = document.createElement("div");
    printElem.innerText = `${i.placeholder} - ${i.value}`;
    printCtn.appendChild(printElem);
  }
};
