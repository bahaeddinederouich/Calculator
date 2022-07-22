//------- Variables
let numbers = document.querySelectorAll("[data-number]");
let operators = document.querySelectorAll("[data-operator]");
let clearButton = document.querySelector("[data-clear]");
let deletButton = document.querySelector("[data-dell]");
let equalButton = document.querySelector(".equal");
let previousOutput = document.querySelector(".previous-output");
let currentOutput = document.querySelector(".current-output");
// console.log(numbers);

//------- Function()
numbers.forEach(function (ele) {
  ele.addEventListener("click", function () {
    updateAffichage(ele.innerHTML);
  });
});

// operators click
// console.log(operators);
operators.forEach(function (ele) {
  ele.addEventListener("click", function () {
    opearatorClicked(ele.innerHTML);
  });
});

function updateAffichage(ele) {
  currentOutput.innerHTML += ele;
}

//////
function opearatorClicked(operator) {
  //   console.log(currentOutput.innerHTML)
  if (currentOutput.innerHTML === "") {
    return;
  } else {
    previousOutput.innerHTML = currentOutput.innerHTML + operator;
    currentOutput.innerHTML = "";
  }
}
///////////////
equalButton.addEventListener("click", function () {
  let prevLenght = previousOutput.innerHTML.length;
  let oprateur = previousOutput.innerHTML[prevLenght - 1];
  let first = parseFloat(
    previousOutput.innerHTML.replace(
      previousOutput.innerHTML[prevLenght - 1],
      ""
    )
  );
  let second = parseFloat(currentOutput.innerHTML);
  //   console.log(first);
  //   console.log(second);
  //   console.log(oprateur);
  //   console.log(parseFloat(previousOutput.innerHTML + currentOutput.innerHTML));
  let result = 0;
  switch (oprateur) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "/":
      result = first / second;
      break;
    case "*":
      result = first * second;
  }
  previousOutput.innerHTML = result;
  currentOutput.innerHTML = result;
});

clearButton.onclick = clear;
deletButton.onclick = deleteit;

function clear() {
  currentOutput.innerHTML = "";
  previousOutput.innerHTML = "";
}
function deleteit() {
  let del = currentOutput.innerHTML.length;
  currentOutput.innerHTML = currentOutput.innerHTML.slice(0, del - 1);
}
