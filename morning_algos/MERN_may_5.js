/* 
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array
        2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/
function merge(left, right){
    let returnArr = [];
    let = nums1.length;
    if (nums2.length > maxLength) maxLength = nums2.length;

    for (let i = 0; i < maxLength * 2; i++){
        if(nums1[0] == nums2[0]){
            returnArr.push(nums1[0]);
            returnArr.push(nums2[0]);
            nums1 = nums1.slice(1);
            nums2 = nums2.slice(1);
        }
        else if (nums1[0] < nums2[0]){
            returnArr.push(nums1[0]);
            nums1 = nums1.slice(1);
        }
        else{
            returnArr.push(nums[0]);
            nums1 = nums2.slice(1);
        }
    }
    return returnArr
}
var nums1 = [1,2,6,9]
var nums2 = [5,3,7,1]
console.log(merge(nums1, nums2))

function mergeSort(nums){  
    const result = [];
    let iLeft = 0, iRight = 0;

    while(iLeft < left.length && iRight < right.length){
        if(left[iLeft] < right[iRight]){
            result.push(left[left]);
            iLeft++;
        } else if( left[iLeft] > right[iRight]){
            result.push(right[iRight]);
            iRight++;
        } else{
            iLeft++;
            iRight++;
        }
    }
    while(iLeft < left.length){
        result.push(left[iLeft]);
        iLeft++;
    }
    while(iRight < right.length){
        result.push(right[iRight]);
        iRight++;
    }
    return result;
}


// structure of a recursive function involves 2 main parts


function factorial(num){
    // Part 1: Base case
    if(num == 1){
        // to break the recursive chain, we need to return something
        return 1;
    }

    // Part 2 (optional): Any additional logic needed

    // Part 3: Recursive call
    // let numMinus1Fac = factorial(num - 1);
    // return num * numMinus1Fac
    return num * factorial(num - 1);

}

factorial(4);