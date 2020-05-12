const btn = document.querySelector("button");
const ul = document.querySelector("ul");

let cntr = 1;
const addListItem = function () {
    let item = document.createElement("li");
    item.textContent = cntr;
    if (cntr % 3 == 0) {
        item.style.fontSize = "2rem";
    };
    ul.appendChild(item);
    cntr = cntr + 2;
}

btn.addEventListener("click", addListItem)