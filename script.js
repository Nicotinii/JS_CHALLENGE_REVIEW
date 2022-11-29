'strict mode';

let dauphins1 = [96, 108, 89];
let koalas1 = [88, 91, 110];

let dauphins2 = [97, 112, 101];
let koalas2 = [109, 95, 123];

let dauphins3 = [97, 112, 101];
let koalas3 = [109, 95, 106];


function average (score) {
    let totalscore = score.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let cbscore = score.length;
    return parseFloat(totalscore / cbscore).toFixed(2);
};


function winner (dauphins, koalas) {
    if ((average(dauphins) || average(koalas)) > 100) {
        if (average(koalas) < average(dauphins)) {
            return "Les Dauphins espiegle gagnent avec une moyenne de " + average(dauphins) + " contre seulement" + average(koalas) + " pour les Koalas les nuls";
        } else if (average(dauphins) < average(koalas)){
            return "Les Koalas trop fort gagnent avec une moyenne de " + average(koalas) + " contre une moyenne de " + average(dauphins) + " pour les Dauphins case prison";
        } else {
            return "Egalité impossible de les départager zut " + average(dauphins);
        }
    } else {
        return "tous nul" + " dauphins : " + average(dauphins) + " kaoala : " + average(koalas);
    }
}

console.log(winner(dauphins1, koalas1));
console.log(winner(dauphins2, koalas2));
console.log(winner(dauphins3, koalas3));




