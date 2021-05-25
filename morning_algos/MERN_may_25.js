/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true
*/
// const nums1 = [1, 4, 3, 6, 9, 3];
// const callback1 = (elem) => {
//     return elem > 5;
// };
// const expected1 = [6, 9, 3];

// const nums2 = [1, 4, 3, 6, 9, 3];
// const callback2 = (elem) => {
//     return elem > 2;
// };
// const expected2 = [4, 3, 6, 9, 3];

// const nums3 = [1, 4, 3, 6, 9, 3];
// const callback3 = (elem) => false;
// const expected3 = [];


const nums1 = [1, 4, 3, 6, 9, 3];

// const callBack1 = e => {
//     return e < 4;
// }
const callback1 = (elem) => {
    if( elem < 4 ){
        return true
    }else{
        return false
    }
    // return elem < 4;
};

function dropIt(arr, callback){
    newArr = [];
    console.log('new variable')
    for( i = 0; i < arr.length; i++){
    console.log('for loop')
        if(callback = true){
        console.log('if statement')
            newArr.push(arr[i])
        console.log('pushed')
        }
        else{
            return
        }
    }
    return newArr
}

console.log(dropIt(nums1, callback1))