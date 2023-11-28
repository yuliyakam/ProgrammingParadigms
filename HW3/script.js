// Для решения задачи применялось императивное(код представлен последовательным, с объявлением переменных) и процедурное программироавние(Объявлены процедуры). Внутри процедур имеется структурный подход - ветвление, циклы.

let i = 0;
const cellEl = document.querySelectorAll(".cell");
const contentEl = document.querySelector(".content");
const mesEl = document.querySelector(".message");

cellEl.forEach((el, index) => {
  el.textContent = index;
  el.style.color = "white";
});

function paste(e) {
  const cell = e.target;
  if (i % 2 == 0) {
    cell.style.color = "black";
    cell.textContent = "X";
    i++;
    isVin();
  } else {
    cell.style.color = "black";
    cell.textContent = "O";
    i++;
    isVin();
  }
}

cellEl.forEach((element) => {
  element.addEventListener("click", paste, { once: true });
});

function isVin() {
  const vinArr = Array.from(cellEl);
  if (
    (vinArr[0].textContent == vinArr[1].textContent &&
      vinArr[1].textContent == vinArr[2].textContent) ||
    (vinArr[3].textContent == vinArr[4].textContent &&
      vinArr[4].textContent == vinArr[5].textContent) ||
    (vinArr[6].textContent == vinArr[7].textContent &&
      vinArr[7].textContent == vinArr[8].textContent) ||
    (vinArr[0].textContent == vinArr[3].textContent &&
      vinArr[3].textContent == vinArr[6].textContent) ||
    (vinArr[1].textContent == vinArr[4].textContent &&
      vinArr[4].textContent == vinArr[7].textContent) ||
    (vinArr[2].textContent == vinArr[5].textContent &&
      vinArr[5].textContent == vinArr[8].textContent) ||
    (vinArr[0].textContent == vinArr[4].textContent &&
      vinArr[4].textContent == vinArr[8].textContent) ||
    (vinArr[2].textContent == vinArr[4].textContent &&
      vinArr[4].textContent == vinArr[6].textContent)
  ) {
    mesEl.textContent = "Game over";
    contentEl.style.outline = "2px solid #c5303c";
    cellEl.forEach((element) => {
      element.removeEventListener("click", paste);
    });
  } else if (i === 9) {
    mesEl.textContent = "Ура! Победила дружба!";
  }
}
