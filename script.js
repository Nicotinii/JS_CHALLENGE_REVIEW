"strict mode";

let tempmax1 = [17, 21, 23];
let tempmax2 = [12, 5, -5, 0, 4];

function tempall (quecalor) {
    for (let i=0; i<quecalor.length; i++) {

        console.log(quecalor[i] + " degrée dans "  + (i + 1) + " jour" );

    }
}

tempall(tempmax1);
tempall(tempmax2);