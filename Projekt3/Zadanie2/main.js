let fsize = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    btn.textContent = "Start";
    document.body.appendChild(btn);
    let kontener = document.createElement("ul");
    document.body.appendChild(kontener);
    btn.addEventListener("click", createLiElements);
}

const createLiElements = () => {
    for (let index = 1; index < 10; index++) {
        let item = document.createElement("li");
        item.textContent = `Element ${index}`;
        item.style.fontSize = fsize + "px";
        const kontener = document.querySelector("ul");
        kontener.appendChild(item);
        fsize += 1;
    }
}

init();