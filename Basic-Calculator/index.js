const buttons_el = document.querySelectorAll("button");
const inputField_el = document.getElementById("result");
buttons_el.forEach((element) => {
  element.addEventListener("click", () => {
    detectOperation(element.innerHTML);
  });
});

function detectOperation(button_value) {
  if (button_value == "C") {
    clearResult();
  } else if (button_value == "⌫") {
    deleteElement(button_value);
  } else if (button_value == "=") {
    calculateResult();
  } else {
    appendElement(button_value);
  }
}

function calculateResult() {
    try {
        inputField_el.value = eval(inputField_el.value);    
    } catch (e) {
        window.alert("you entered wrong input !")
    }
    
}

function appendElement(button_value) {
  inputField_el.value += button_value;
}

function deleteElement(button_value) {
    inputField_el.value = inputField_el.value.slice(0, -1);
}

function clearResult() {
  inputField_el.value = "";
}
