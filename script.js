'strict mode';

let dauphins1 = [44, 23, 71];
let koalas1 = [65, 54, 49];

let dauphins2 = [85, 54, 41];
let koalas2 = [23, 34, 27];

function calcAverage (score) {
    let totalscore = score.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let cbscore = score.length;
    return parseFloat(totalscore / cbscore).toFixed(2);
};


function checkWinner (dauphins, koalas) {
    if (calcAverage(dauphins) > (calcAverage(koalas)*2)){
        return "Les Dauphins espiegle gagnent " + calcAverage(dauphins) + " VS " + calcAverage(koalas) ;

    } else if ((calcAverage(dauphins)*2) < calcAverage(koalas)) {
        return "Les Koalas qui sentent bon grace a l'eucaliptus gagnent " + calcAverage(koalas) + " VS " + calcAverage(dauphins);
    } 
    else {
    return "persone gagne"
    }  

}


console.log(checkWinner(dauphins1, koalas1));
console.log(checkWinner(dauphins2, koalas2));