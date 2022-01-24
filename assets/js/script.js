const deckListWrapperEl = document.querySelector(".deck-list-wrapper");
const decks = [saladDeck, dumplingDeck];

const populateDeckList = () => {
    for (let i = 0; i < decks.length; i++) {
        let deckEl = document.createElement("div");
        deckEl.className = "deck";

        let deckAboutEl = document.createElement("div");
        deckAboutEl.className = "deck-about";
        deckAboutEl.innerHTML = "" +
            `<h3>${decks[i].deckName}</h3>` +
            `<h4>${decks[i].cards.length} Cards</h4>`;
        deckEl.appendChild(deckAboutEl);

        let deckButtonsEl = document.createElement("div");
        deckButtonsEl.className = "deck-buttons";
        deckButtonsEl.innerHTML = "" +
            "<button class='deck-button-view'>View</button>" +
            "<button class='deck-button-practice'>Practice</button>";
        deckEl.appendChild(deckButtonsEl);

        deckListWrapperEl.appendChild(deckEl);
    }
}

populateDeckList();