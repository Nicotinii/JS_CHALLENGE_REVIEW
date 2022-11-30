'strict mode';

function calcTip (facture) {
    if (facture >= 50 && facture <= 300) {
        return facture * 0.15;
    } else {
        return facture * 0.20;
    }
}
console.log(calcTip (555))

const bills = [125, 555, 44];

let tips = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
}
console.log(tips);

let totals = [];

for (let i = 0; i < bills.length; i++) {
    totals.push(calcTip(bills[i]) + bills[i]);
}

console.log(totals);
