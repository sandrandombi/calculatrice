//declarer la variable...document fait reference l objet document ....getElement permet de selectionner un element html...display et l argument passé a la methode
let display = document.getElementById("display");

//on nomme la fonction clearDisplay , elle modifie le contenu l'élément référencé par display pour qu'il affiche "0"
function clearDisplay() {
  display.innerText = "0";
}

// fonction pour gérer la suppression du dernier chiffres affiché
function deleteLast() {
  if (display.innerText.length === 1) {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

// fonction pour ajouter un chiffre (ou un nombre) au texte affiché dans le HTML
function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

// fonction pour ajouter un opérateur mathématique + - * /
function appendOperator(operator) {
  let lastChar = display.innerText[display.innerText.length - 1];
  if (["+", "-", "*", "/"].includes(lastChar)) {
    display.innerText = display.innerText.slice(0, -1) + operator;
  } else {
    display.innerText += operator;
  }
}

// fonction pour afficher le resultat de l operation avec "try donne eval"..si non "catch retransmet error"
function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/"
  )
    appendNumber(key);
  else if (key === "Enter") calculate();
  else if (key === "Backspace") deleteLast();
});