const deckListWrapperEl = document.querySelector(".deck-list-wrapper");
const mainEl = document.querySelector("#main");
const contentWrapper = document.querySelector(".content-wrapper");
const decks = [saladDeck, dumplingDeck];

const populateDeckList = () => {
    for (let i = 0; i < decks.length; i++) {
        let deckEl = document.createElement("div");
        deckEl.className = "deck";

        let deckAboutEl = document.createElement("div");
        deckAboutEl.className = "deck-about";
        deckAboutEl.innerHTML = "" +
            `<h3 id='deck-name'>${decks[i].deckName}</h3>` +
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

const populateViewDeck = deckName => {
    let deck;
    for (let i = 0; i < decks.length; i++) {
        if (decks[i].deckName === deckName) {
            deck = decks[i];
            console.log("Success");
            break;
        }
    }

    contentWrapper.innerHTML = `<h2>Decks>${deckName}</h2>`;

    let deckViewWrapperEl = document.createElement("div");
    deckViewWrapperEl.className = "deck-view-wrapper";

    for (let i = 0; i < deck.cards.length; i++) {
        let deckItemEl = document.createElement("div");
        deckItemEl.className = "deck-item";
        deckItemEl.innerHTML = deck.cards[i].name;
        deckViewWrapperEl.appendChild(deckItemEl);
    }
    
    contentWrapper.appendChild(deckViewWrapperEl);
}

const mainButtonHandler = function(event) {
    const targetButton = event.target;

    if (targetButton.className === "deck-button-view") {
        const targetButtonDeckName = targetButton.closest("div").previousElementSibling.children[0].innerHTML;
        populateViewDeck(targetButtonDeckName);
    } else if (targetButton.className === "deck-button-practice") {
        console.log("Practice");
    }
}

mainEl.addEventListener("click", mainButtonHandler);

populateDeckList();