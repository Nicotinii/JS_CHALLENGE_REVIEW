'strict mode';

function calcTip (facture) {
    if (facture >= 50 && facture <= 300) {
        return facture * 0.15;
    } else {
        return facture * 0.20;
    }
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]; //[4.4, 44.25, 26.4, 88, 7.4, 15.75, 2, 220, 12.9, 7.8]

let tips = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
}
console.log(tips);

let totals = [];

for (let i = 0; i < bills.length; i++) {
    totals.push(calcTip(bills[i]) + bills[i]);
}
console.log(totals); //[26.4, 339.25, 202.4, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8]

function calcAverage(tab){
    let tableau = tab.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return tableau / tab.length;
}
console.log(calcAverage(totals)); // 275.19




