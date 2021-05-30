/* 
    Given two strings, version1, and version2, both representing version numbers
    If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
    Helpful methods:
        - .split(characterToSplitOn)
        - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
        - .parseInt
        - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
    Bonus, solve without .split
*/
const test1V1 = "0.25";
const test1V2 = "1.1";
const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;

function compareVersionNumbers(v1, v2) {
    let vOne = []
    let vTwo = []
    let results = 0
    if(v1 > v2){
        results = 1;
        return results
    }
    
    for(let i = 0; i < v1.length; i++){
        vOne.push(v1)
    }
    for(let i = 0; i < v2.length; i++){
        vTwo.push(v2)
    }
    results = vOne[0] - vTwo[0]
    if(v1 < v2){
        results = -1;
        return results
    }else{
        results = 0;
        return results
    }
    return results
}

console.log(compareVersionNumbers(test1V1, test1V2))
console.log(compareVersionNumbers(test2V1, test2V2))
console.log(compareVersionNumbers(test3V1, test3V2))
console.log(compareVersionNumbers(test4V1, test4V2))
console.log(compareVersionNumbers(test5V1, test5V2))


// if(v1 > v2){
    //     results = 1;
    //     return results
    // }else if(v1 < v2){
    //     results = -1;
    //     return results
    // }else{
    //     results = 0;
    //     return results
    // }