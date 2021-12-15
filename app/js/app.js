const project_cards = Array.from(document.querySelectorAll(".project-card"));
console.log(project_cards);
project_cards.forEach((card) =>
    card.addEventListener("click", (ev) => {
        const textSelected = window.getSelection().toString();
        if(!textSelected) {
            card.querySelector("a").click();
        }
    })
);