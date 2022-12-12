var cards = document.querySelector(".cards");
var animalsToAdopt = [
    {
        name: "Lucky",
        picture: "https://placekitten.com/200/287"
    },
    {
        name: "Symba",
        picture: "https://placekitten.com/200/139"
    },
    {
        name: "Léo",
        picture: "https://placekitten.com/200/90"
    },
    {
        name: "Milo",
        picture: "https://placekitten.com/200/194"
    },
    {
        name: "Charly",
        picture: "https://placekitten.com/200/179"
    }
];
function createCard(title, imageUrl) {
    var card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);
    var cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
    var cardImg = document.createElement("div");
    cardImg.style.backgroundImage = "url(".concat(imageUrl, ")");
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);
    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);
    var cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = cardTitle.innerHTML + title;
    cardBody.appendChild(cardTitle);
    var cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    cardButton.innerHTML = cardButton.innerHTML + "Adopt Now";
    cardBody.appendChild(cardButton);
    // Step1: Create the cardBody div, add the class card-body and add it to the card
    // Step2: Create the cardTitle h2, add the class card-title,
    // set the text inside the tag to the "title" parameter of this function
    // and add it to the cardBody
    // Step3: Create the cardButton button, add the class card-button,
    // set the text inside the tag to be "Adopt Now"
    // and add it to the cardBody
}
/* Step 4: Create a for loop, for each element of the array,
 call the function createCard with the corresponding parameter */
animalsToAdopt.forEach(function (animalsToAdopt) {
    createCard(animalsToAdopt.name, animalsToAdopt.picture);
});
