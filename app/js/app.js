const project_cards = Array.from(document.querySelector("project-card"));
project_cards.forEach((card) =>
    card.addEventListerner("click", (ev) => {
        const textSelected = window.getSelection().toString();
        if(!textSelected) {
            card.querySelector("a").click();
        }
    })
);