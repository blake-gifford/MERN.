
class Ninja {
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("Ninja Name: " + this.name)
        console.log("Ninja Health: " + this.health)
        console.log("Ninja Speed: " + this.speed)
        console.log("Ninja Strength: " + this.strength)
    }
    drinkSake(){
        this.health += 10
        console.log(this.health)
    }
}

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom){
        super(name, 200, 10, 10, 10);
        this.wisdom = 10;
    }
    speakWisdom(){
        console.log('What one programmer can do in one month, two programmers can do in two months.');
        console.log(this.name);
    }
    drinkSake(){
        console.log("Ninja Name: " + this.name)
        console.log("Ninja Health: " + this.health)
        console.log("Ninja Speed: " + this.speed)
        console.log("Ninja Strength: " + this.strength)
    }
}

let blake = new Ninja('Blake', 100);
let senseiBlake = new Sensei('Blake');
// console.log(blake);

// blake.sayName();

// blake.drinkSake();

// senseiBlake.speakWisdom();

// senseiBlake.drinkSake();