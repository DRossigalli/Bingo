let letter = document.querySelector(".letter");
let number = document.querySelector(".number");
let main = document.querySelector("main");
let allNumbers = document.querySelector(".all_container");

let letters = ["B", "I", "N", "G", "O"];
let sorted = [];
let previous = document.querySelectorAll(".previous");

let i = 0;
let maxCombination = 75;
let before;

document.addEventListener("keypress", (e) => {
  if (e.key == " " || e.key == "Enter") {
    updateNumber();
  }
});

window.onload = () => {
    if (window.innerWidth <= 600) {
      let remove = document.querySelector(".last");
    //   console.log(remove);
      remove.parentNode.removeChild(remove);
    }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genCombination() {
  let l = letters[Math.floor(Math.random() * 5)];
  let n;
  if (l == "B") {
        n = getRandomInt(1, 15)
    } else if (l == "I") {
        n = getRandomInt(16, 30)
    } else if (l == "N") {
        n = getRandomInt(31, 45)
    } else if (l == "G") {
        n = getRandomInt(46, 60)
    } else {
        n = getRandomInt(61, 75)
  }
  let comb = l + n;
  return comb;
}

function show(l, n) {
  letter.textContent = l;
  number.textContent = n;
  return l + n;
}

function updateNumber() {
    if (maxCombination > 0) {
        let checked = checkCombination();
        maxCombination--;
        let l = checked[0];
        let n = checked.slice(1, checked.length);
        if (i == 0) {
          before = checked;
          show(l, n);
          i++;
        } else if (i == 1) {
          previous[0].textContent = before;
          before = show(l, n);
          i++;
        } else if (i == 2) {
          previous[1].textContent = previous[0].textContent;
          previous[0].textContent = before;
          before = show(l, n);
          i++;
        } else if (i == 3) {
          previous[2].textContent = previous[1].textContent;
          previous[1].textContent = previous[0].textContent;
          previous[0].textContent = before;
          before = show(l, n);
          i++;
        } else if (i == 4) {
          previous[3].textContent = previous[2].textContent;
          previous[2].textContent = previous[1].textContent;
          previous[1].textContent = previous[0].textContent;
          previous[0].textContent = before;
          before = show(l, n);
          i++;
        } else if (i == 5) {
          previous[4].textContent = previous[3].textContent;
          previous[3].textContent = previous[2].textContent;
          previous[2].textContent = previous[1].textContent;
          previous[1].textContent = previous[0].textContent;
          previous[0].textContent = before;
          before = show(l, n);
          i++;
        } else {
          previous[4].textContent = previous[3].textContent;
          previous[3].textContent = previous[2].textContent;
          previous[2].textContent = previous[1].textContent;
          previous[1].textContent = previous[0].textContent;
          previous[0].textContent = before;
          before = show(l, n);
          i++;
        }
    } else {
        show ("F", "im");
    }
}

function checkCombination() {
  let combination = genCombination();
  while (sorted.includes(combination) && maxCombination > 0) {
    combination = genCombination();
    console.log("ALREADY SORTED", combination);
  }
  if (maxCombination > 0) {
      sorted.push(combination);
      return combination;
  }
}

function nextPage(option) {
  if (option == 0) {
    main.classList.remove("normal");
    allNumbers.classList.remove("normal");
    main.classList.add("active");
    allNumbers.classList.add("active");
  } else {
    main.classList.remove("active");
    allNumbers.classList.remove("active");
    main.classList.add("normal");
    allNumbers.classList.add("normal");
  }
}

function listPrevious(option) {
  if (option == 0) {
    nextPage(0);
    for (var i = sorted.length - 1; i >= 0; i--) {
      let all = document.querySelector(".all_numbers");
      let div = document.createElement("div");
      let text = document.createTextNode(sorted[i]);
      div.appendChild(text);
      div.classList.add("previous");
      all.appendChild(div);
    }
  } else {
    let all = document.querySelector(".all_numbers");
    nextPage(1);
    setTimeout(() => {
      all.innerHTML = "";
    }, 600);
  }
}
