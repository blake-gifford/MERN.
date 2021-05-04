//1.
//given
console.log(hello);                                   
var hello = 'world';                                 
//AFTER HOISTING BY THE INTERPRETER
var hello;
console.log(hello);
hello = 'world';
// predictions : world


//2.
//given
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//AFTER HOISTING BY THE INTERPRETER
var needle;
test();
function test(){
    needle = 'magnet';
    console.log(needle);
}
// predictions : magnet

//3.
//given
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//AFTER HOISTING BY THE INTERPRETER
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
brendan = 'super cool';
// predictions : 'super cool'

//4.
//given
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//AFTER HOISTING BY THE INTERPRETER
var food;
console.log(food);
food = 'chicken';
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
// predictions : undefined 'half-chicken'

//5.
//given
mean();
console.log(food);
var mean = function(){
    food = 'chicken';
    console.log(food);
    var food = 'fish';
    console.log(food);
}
console.log(food);
//AFTER HOISTING BY THE INTERPRETER
mean();
console.log(food);
var mean;
mean = function(){
    food = 'chicken';
    console.log(food);
    var food;
    food = 'fish';
    console.log(food);
}
console.log(food);
// predictions : 'chickens'

//6.
//given
console.log(genre);
var genre = 'disco';
rewind();
function rewind(){
    genre = 'rock';
    console.log(genre);
    var genre = 'r&b';
    console.log(genre);
}
console.log(genre);
//AFTER HOISTING BY THE INTERPRETER
console.log(genre);
var genre;
genre = 'disco';
rewind();
function rewind(){
    genre = 'rock';
    console.log(genre);
    genre = 'r&b';
    console.log(genre);
}
console.log(genre);
// predictions : undefined 'rock' 'r&b'

//7.
//given
dojo = 'san jose';
console.log(dojo);
learn();
function learn(){
    dojo = 'seattle';
    console.log(dojo);
    var dojo = 'burbank';
    console.log(dojo);
}
console.log(dojo);
//AFTER HOISTING BY THE INTERPRETER
var dojo;
dojo = 'san jose';
console.log(dojo);
learn();
function learn(){
    dojo = 'seattle';
    console.log(dojo);
    dojo = 'burbank';
    console.log(dojo);
}
console.log(dojo);
// predictions : 'san jose' 'seattle' 'burbank' 'burbank'


