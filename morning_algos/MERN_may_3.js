/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort

    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/
function bubbleSort(nums){
    if( nums =  nums.sort) return nums;
    for( var i = 0; i < nums.length; i++){
        for(var j = 1; j< nums.length; j++){
            if(nums[j] < nums[j-1]){
                var swap = nums[j];
                nums[j] = nums[j-1];
                nums[j-1] = swap;
            }
        }
    }
    return nums;
}


function bubbleSort(nums){
    let isSorted = false; //herer's out flag to check if things are sorted or now

    while(isSorted === false){// we wasnt to run the bubble process as long as out flag says the array is not sorted yet
        isSorted = true; //we will flip our flag to true... changing it to true because its easier to say we had to make a swap so its not sorted

        for(let i = 0; i < nums.length - 1; i++){ //loop through the array. notice i < nums.length - 1. you will see why on the next line
            const j = i +1; // we want to check the current value at the current index in the array with the next index

            if(nums[i] > nums[j]){// if the current indexs value is greater than the next value
                isSorted = false;// flip our flag to false
                const temp = nums[i]; // and swap
                nums[i] = nums[j]; //those
                nums[j] = nums[i]; //elements
            }
        }
    }

    return nums; // by the time you are here it should be sorted
}
/* 
    https://visualgo.net/en/sorting

    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.

    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items.
*/
function selectionSort(nums){
    for (var i = 0; i < nums.length; i++){
        var min = nums[i];
        var minIdx - i;
        for(var j - i; j < nums.length; j+-1){
            if(nums[j] < min){
                min = nums[j];
                minIdx = j;
            }
        }
    }
    return nums;
}

var newArr = [1,3,6,4,6,8]

console.log(selectionSort(newArr))