/* 
    Given an array of ints, find all the non-consecutive integers
    A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
    The first element is never considered non-consecutive.
    Return an array of objects where each object contains the number itself
    and it's index.

    EXAMPLE:
    let nums = [1,2,3,4,6,7,8,10];
    
    allNonConsecutive(nums) should return:
    [
        { i: 4, n: 6},
        { i: 7, n: 10 }
    ]
    
    because at index 4, the value is 6, which is not the previous value plus 1 (4 + 1 = 5, not 6),
    and at index 7, the value is 10, which is not the previous value plus 1 (8 + 1 = 9, not 10)
    */

    let sortedNums = [1,2,3,4,6,7,8,10];

function allNonConsecutive(sortedNums){
    let returnArr = {}
    let objectToAdd = {
        i : "",
        n: ""
    }
    for ( let j = 1; j < sortedNums.length; j++){
        if( sortedNums[j] != sortedNums[j-1]+1){
            objectToAdd.i = j;
            objectToAdd.n = sortedNums[j];
            returnArr.push(objectToAdd);
        }   
    }
    return returnArr;

}
console.log(allNonConsecutive(sortedNums))

/* 
    You are given a list of integers. Find all the consecutive sets of 
    integers that adds up to the sum passed in as one of the inputs.

    EXAMPLE:
    let nums = [2, 5, 3, 6, 7, 23, 12] 
    let sum = 16

    findConsqSums(nums, sum) should return:
    [
        [2, 5, 3, 6],
        [3, 6, 7]
    ]

    because 2 + 5 + 3 + 6 = 16, and those numbers are all consecutive, and
    3 + 6 + 7 = 16, and those numbers are also all consecutive
*/
function findConsqSums(nums, targetSum){
    let ret = []

    for ( let x = 0; x < nums.length; x++){
        let sum = 0;
        let tempArr = [];
        let y = x;
        while( y < nums.length && sum < targetSum){
            sum += nums[y];
            tempArr.push(nums[y]);
            if(sum === targetSum){
                ret.push(tempArr);
                break;
            }
            y++
        }
    }
    return ret;

}
let num1 = [2,5,3,6,7,9,7]
let sum = 8;