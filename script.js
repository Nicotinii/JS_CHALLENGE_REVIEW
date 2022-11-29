'strict mode';


function bill(facture) {

let tips = 0;

(50 <= facture <= 300) ? tips = 0.15 * facture : tips = 0.20 * facture

let total = facture + tips;

return "La note est de " + facture + " le pourboire est de " + tips + " et la valeur totale était de " + total;

}


console.log(bill(275));
console.log(bill(40));
console.log(bill(430));




