/* 
    Given a search criteria object whose values will only be
    primitives (ints, strings, booleans) and a list of objects.
    return any object that matches all the key value pairs in the search
    criteria object.
    Bonus: write a 2nd solution using build in methods to practice functional
    programming.
    // Bonus 2: write this as an array prototype method
    Array.prototype.methodName = function(someparameter){

    }
*/
// EXAMPLE:
const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria = {
    firstName: "Bob",
    age: 31,
};
const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

function findObjects(criteria, collection){
    // const results = collection.filter(collection => criteria)
    // return results;
    newArr = [];
    for (let i = 0; i < collection.length; i++){
        if(collection[i].firstName === criteria.firstName && collection[i].age === criteria.age){
            newArr.push(collection[i]);
        }
    }
    return newArr;


}

console.log(findObjects(searchCriteria, items));


// BONUS 2:
Array.prototype.find = function(criteria){

}
/* 
    Given an id, an object that has keys with corresponding updated values, and an array of objects
    Find the object by "id" key that matches the given id value and then update that object's
    keys with the provided new values.
    Return the updated object, or null if no object was found
    
    BONUS: accept a 4th parameter that is a function to be run on the update
*/
const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false,
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false,
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false,
    },
];
const searchId = 3;
const updateData = { redBeltStatus: true, isLateToday: true };
const expected2 = {
    id: 3,
    name: "student3",
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
};

function findByIdAndUpdate(id, updatedVals, collection) {
    for(const item of collection){
        if(item.id === id){
            for(const key in updatedVals){
                item[key] = updatedVals[key];
            }
            return items
        }
    }
    return null;
} 