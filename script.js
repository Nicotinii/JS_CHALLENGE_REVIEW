'strict mode';

let people1= {
    name: 'Bernard',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        return parseFloat(this.weight / (this.height * this.height)).toFixed(2); 
    }
};



let people2= {
    name: "Marcel",
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        return parseFloat(this.weight / (this.height * this.height)).toFixed(2); 
    }
};

let people3 = {
    name: "Bertrand",
    weight: 95,
    height: 1.88,
    calcBMI: function () {
        return parseFloat(this.weight / (this.height * this.height)).toFixed(2); 
    }
};

let people4 = {
    name: "Marcelino",
    weight: 85,
    height: 1.76,
    calcBMI: function () {
        return parseFloat(this.weight / (this.height * this.height)).toFixed(2); 
    }
};

people1.imc=people1.calcBMI();
people2.imc=people2.calcBMI();
people3.imc=people3.calcBMI();
people4.imc=people4.calcBMI();
console.log(people1.calcBMI());
console.log(people2.calcBMI());
console.log(people3.calcBMI());
console.log(people4.calcBMI());

let message=" "


function compare(man1, man2){
    if (man1.imc > man2.imc){
        return message= "L’IMC de " + man1.name + " (" + man1.imc + ") est plus élevé que celui de " + man2.name + " (" + man2.imc + ")"

    }else{
        return message=  "L’IMC de " + man2.name + " (" + man2.imc + ") est plus élevé que celui de " + man1.name + " (" + man1.imc + ")"
    }
}


console.log(compare(people1, people2)); //L’IMC de Bernard (27.31) est plus élevé que celui de Marcel (24.19)
console.log(compare(people3, people4)); //L’IMC de Marcelino (27.44) est plus élevé que celui de Bertrand (26.88)




