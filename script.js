"strict mode";

let tempmax1 = [17, 21, 23];
let tempmax2 = [12, 5, -5, 0, 4];

function alltemp(quecalor) {
    for (let i = 0; i < quecalor.length; i++) {
        if (i === 0) {
            if (quecalor[i] === 0|1) {
                return meteo = quecalor[i] + " degré dans " + i + 1 + " jour";
            } else {
                return meteo = quecalor[i] + "degré dans" + i + 1 + " jour";
            }
        }
        if (i === 0) {
            if (quecalor[i] === 0|1) {
                return meteo = quecalor[i] + "degré dans" + i + 1 + " jour";
            } else {
                return meteo = quecalor[i] + "degré dans" + i + 1 + " jour";
            }
        }
    }
}

console.log(alltemp(tempmax1))