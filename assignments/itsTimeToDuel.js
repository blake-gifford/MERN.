class UnitCard {
    constructor(name, cost, power, resilience){
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }
    showStats(){
        console.log('Name: ' + this.name);
        console.log('Cost: ' + this.cost);
        console.log('Power: ' + this.power);
        console.log('Resilience: ' + this.resilience);
    }
}

class EffectCard extends UnitCard {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    hardAlgorithm(){
        this.name = 'Hard Algorithm'
        this.cost = 2;
        this.text = "increase target's resilience by 3";
        this.stat = this.resilience;
        this.magnitude += 3;
        console.log(this.magnitude);
    }
    unhandledPromiseRejection(){
        this.name = 'Unhandled Promise Rejection'
        this.cost = 1;
        this.text = "reduce target's resilience by 2";
        this.stat = this.resilience;
        this.magnitude -= 2;
        console.log(this.magnitude);
    }
    pairProgramming(){
        this.name = 'Pair Programming'
        this.cost = 3;
        this.text = "increase target's resilience by 3";
        this.stat = this.power;
        this.magnitude += 2;
        console.log(this.magnitude);
    }
}



let myRedBeltNinja = new UnitCard('Red Belt Ninja', 3, 3, 4);
let myBlackBeltNinja = new UnitCard('Black Belt Ninja', 4, 5, 4);

// let myEffectCard = new EffectCard()

console.log("This is the Red Belt Ninja pbject:");
console.log(myRedBeltNinja);

console.log("*******************************");

console.log("This is the Black Belt Ninja pbject:");
console.log(myBlackBeltNinja);



myRedBeltNinja.showStats();

console.log("*******************************");

myBlackBeltNinja.showStats();



myRedBeltNinja.hardAlgorithm();
myRedBeltNinja.unhandledPromiseRejection();
myRedBeltNinja.pairProgramming();

console.log("*******************************");

// myBlackBeltNinja.hardAlgorithm();
// myBlackBeltNinja.unhandledPromiseRejection();
// myBlackBeltNinja.pairProgramming();