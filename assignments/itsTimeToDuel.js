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
    attack(target){
        if( target instanceof UnitCard ) {
            // implement card text here
            target.resilience -= this.power
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

class EffectCard extends UnitCard {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if( target instanceof UnitCard){
            if (this.stat == 'resilience'){
                target.resilience += this.magnitude;
            }
            if (this.stat == 'power'){
                target.power += this.magnitude;
            }
        }
        else{
            throw new Error( "Target must be a unit!" );
        }
    }
}



let myRedBeltNinja = new UnitCard('Red Belt Ninja', 3, 3, 4);
let myBlackBeltNinja = new UnitCard('Black Belt Ninja', 4, 5, 4);

let hardAlgorithm = new EffectCard('Hard Algo', 2, "increase target's resilience by 3", 'resilience', 3);
let unhandledPromiseRejection = new EffectCard('Unhandled Promise Rejection ', 1, "reduce target's resilience by 2", 'resilience', -2);
let pairProgramming = new EffectCard('Pair Programming ', 3, "increase target's resilience by 3", 'power', 2);


// let myEffectCard = new EffectCard()

console.log("This is the Red Belt Ninja pbject:");
console.log(myRedBeltNinja);

console.log("*******************************");

console.log("This is the Black Belt Ninja pbject:");
console.log(myBlackBeltNinja);



myRedBeltNinja.showStats();

console.log("*******************************");

myBlackBeltNinja.showStats();


console.log(hardAlgorithm);
console.log(unhandledPromiseRejection);
console.log(pairProgramming);

console.log('this is before the attack', myBlackBeltNinja);
myRedBeltNinja.attack(myBlackBeltNinja);
console.log('this is after the attack', myBlackBeltNinja);


hardAlgorithm.play(myBlackBeltNinja);
console.log(myBlackBeltNinja);
hardAlgorithm.play(unhandledPromiseRejection);