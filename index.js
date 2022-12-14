var cards = document.querySelector(".cards");
var MyPokemon = [
    {
        name: "Métamorph",
        picture: "https://www.pokepedia.fr/images/thumb/e/e3/M%C3%A9tamorph-RFVF.png/250px-M%C3%A9tamorph-RFVF.png"
    },
    {
        name: "Ectoplasma",
        picture: "https://www.pokepedia.fr/images/thumb/8/8d/Ectoplasma-RFVF.png/250px-Ectoplasma-RFVF.png"
    },
    {
        name: "Dracaufeu",
        picture: "https://www.pokepedia.fr/images/archive/1/17/20141016141812%21Dracaufeu-RFVF.png"
    },
    {
        name: "Pachirisu",
        picture: "https://www.media.pokekalos.fr/img/pokemon/home/shiny/pachirisu.png"
    },
    {
        name: "Rayquaza",
        picture: "https://www.pokepedia.fr/images/thumb/1/1a/Rayquaza-DEPS.png/250px-Rayquaza-DEPS.png"
    },
    {
        name: "Volcaropod",
        picture: "https://www.pokepedia.fr/images/thumb/8/85/Volcaropod-HGSS.png/250px-Volcaropod-HGSS.png"
    }
];
function createCard(title, imageUrl) {
    var life = "100%";
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
    var cardButton = document.createElement("div");
    cardButton.classList.add("container");
    cardBody.appendChild(cardButton);
    var cardLife = document.createElement("div");
    cardLife.innerHTML = life;
    cardLife.classList.add("life");
    cardLife.style.width = life + "%";
    cardButton.appendChild(cardLife);
    document.getElementById('fight').onclick = function () {
        var life = Math.floor(Math.random() * 101);
        cardLife.innerHTML = life;
        cardLife.style.width = life + "%";
    };
}
MyPokemon.forEach(function (MyPokemon) {
    createCard(MyPokemon.name, MyPokemon.picture);
});
// document.getElementById('fight')!.onclick = function () {
//     MyPokemon.forEach(MyPokemon => {
//         modif(MyPokemon.life)
//     })
// };
// function modif(vie) {
//     vie = Math.floor(Math.random() * 101)!;
//     document.querySelector('.life')!.textContent = vie;
// }
