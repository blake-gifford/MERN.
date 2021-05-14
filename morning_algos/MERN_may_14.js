/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

// const nums1 = [1, 1, 1, 2, 2, 3];
// const k1 = 2;
// const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
const expected3 = [1, 2, 3];
/* 
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/


function kMostFrequent(nums, k) {
    // let newArr = [];
    // let temp = 0;
    // let counter = 0;

    // for(let i = 0; i < nums.length; i++){
    //     temp = [i]
    //     console.log('for loop')
    //     if(temp == nums[i]+1){
    //         console.log('if statement')
    //         newArr.push(temp[i])
    //         console.log('pushing temp')
    //         counter++;
    //         console.log('++ count')
    //         temp++;
    //         console.log('++ temp')
    //     }else{
    //         console.log('else statement')
    //         temp++;
    //     }
    // }
    // return counter;
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in obj){
            obj[nums[i]] += 1;
        }else{
            obj[nums[i]] = 1;
        }
    }
    var kArray = [];
    for(i = 1; i < k; i++){
        var max = 0;
        var objKey;
        for(var key in obj){
            if(obj[key] > max){
                max = obj[key]
                objKey = key;
            }
            
        }
        kArray.push(objKey);
        delete obk[objKey];
    }
    return kArray
}


const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];


console.log(kMostFrequent(nums1, k1))



/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

// const nums1 = [2, 11, 7, 15];
// const targetSum1 = 9;

// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
// const expected1 = [0, 2];


function twoSum(nums, targetSum) {
    for(let i = 0; i < nums.length; i++){
        let j = i + 1
        while(j < nums.length){
            if(nums[i] == targetSum){
                return[i, j]
            }else{
                j++
            }
        }
    }
}