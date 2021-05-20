/* 
    Given an array of objects, a searchFor string, and searchBy key that exists in the object
    return a new array of only those objects whose value for the given key starts with the given search string
    You can assume the key will exist on the object and the value of that key will be a string
    Bonus: make the search case insensitive
    Bonus: re-write it with functional programming in mind, using built in methods
    Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
        - you can assume the searchMethod will be valid
*/
// EXAMPLE:
const people = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "Eddy",
        lastName: "Lee",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
    {
        firstName: "Edward",
        lastName: "Kim",
    },
    {
        firstName: "Gene",
        lastName: "Simmons"
    }
];
    
const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
];
function filterByKey(items, searchFor, searchBy){
    let newArr = [];
    for(let i = 0; i < items.length; i++){
        if(items[i][searchBy].toLowerCase().indexOf(searchFor.toLowerCase())!=-1){
            result.push(items[i])
        }
    }
    return newArr;
}

console.log(filterByKey(people, searchFor1, searchBy1))

const searchForBonus = "e";
const searchByBonus = "firstName";
const searchMethodBonus = "endsWith";
const expectedBonus = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "Gene",
        lastName: "Simmons"
    }
]
function filterByKeyBonus3(items, searchFor, searchBy, searchMethod){

}
