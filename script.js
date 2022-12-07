"strict mode";

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

const players1 = game.players[0];
const players2 = game.players[1];
console.log(players1);
console.log(players2);

const gk = players1[0];
const array = [];
const fieldPlayers = array.concat(players1);
fieldPlayers.shift();
console.log(gk);
console.log(fieldPlayers);

const allPlayers = players1.concat(players2);
console.log(allPlayers);  

const players1Final = players1.concat(['Thiago', 'Coutinho', 'Perisic'])
console.log(players1Final);

let team1 = game.odds.team1;
let team2 = game.odds.team2;
let draw = game.odds.x;
console.log(team1);
console.log(team2);
console.log(draw);

