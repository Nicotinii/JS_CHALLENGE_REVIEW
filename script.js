'strict mode';

let BernardA = {
    weight: 78,
    height: 1.69
};

let MarcelA = {
    weight: 92,
    height: 1.95
};

let BernardB = {
    weight: 95,
    height: 1.88
};

let MarcelB = {
    weight: 85,
    height: 1.76
};

function imc (weight, height) {
    return (weight / (height * height)).toFixed(2);
};

let imcBernardA = imc(BernardA.weight, BernardA.height);
let imcMarcelA = imc(MarcelA.weight, MarcelA.height);

let imcBernardB = imc(BernardB.weight, BernardB.height);
let imcMarcelB = imc(MarcelB.weight, MarcelB.height);

let messageA = "";
let messageB = "";

if (imcBernardA > imcMarcelA) {
    messageA = "Bernard a un IMC(" + imcBernardA + ") plus élevé que Marcel(" + imcMarcelA + ").";
} else {
    messageA = "Marcel a un IMC(" + imcMarcelA + ") plus élevé que Bernard(" + imcBernardA + ").";
}

if (imcBernardB > imcMarcelB) {
    messageB = "Bernard a un IMC(" + imcBernardB + ") plus élevé que Marcel(" + imcMarcelB + ").";
} else {
    messageB = "Marcel a un IMC(" + imcMarcelB + ") plus élevé que Bernard(" + imcBernardB + ").";
}

console.log(messageA); //Bernard a un IMC(27.31) plus élevé que Marcel(24.19).
console.log(messageB); //Marcel a un IMC(27.44) plus élevé que Bernard(26.88).




function imcMessage (nivea) {
    if (imc(nivea.weight, nivea.height) <20) {
        return "Insuffisance pondérale";
    } else if (imc(nivea.weight, nivea.height) <25) {
        return "Normal";
    } else if (imc(nivea.weight, nivea.height) <30) {
        return "Surpoids";
    } else if (imc(nivea.weight, nivea.height) <40) {
        return "Obésité";
    } else {
        return "Obésité importante";
    }
}

console.log(imcMessage(BernardA)); //Surpoids
console.log(imcMessage(MarcelA)); //Normal
console.log(imcMessage(BernardB));//Surpoids
console.log(imcMessage(MarcelB));//Surpoids




