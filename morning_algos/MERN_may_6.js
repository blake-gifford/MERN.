/* 
    Params: nums, left, right
        - left and right are indexes, for now, left will be 0, and right will be
            the last idx.
        - later these params will be used to specify a sub section of the array to
            partition.
    Steps:
    1. Pick an number out of the arr to be your pivot value
        - usually the middle idx but can be any.
    2. Partition the array IN PLACE such that all values less than the pivot
        value are to the left of it and all values greater than the pivot value
        are to the right (not perfectly sorted).
    3. return: the index where the left section of smaller items ends.
    "Choosing a random pivot minimizes the chance that you will encounter
    worst-case O(n^2) performance (always choosing first or last would cause
    worst-case performance for nearly-sorted or nearly-reverse-sorted data).
    Choosing the middle element would also be acceptable in the majority of
    cases."
    https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/
function partition(nums = [], left = 0, right = nums.length-1) {
    let midIdx = Math.floor(nums.length/2);
    const pivot = nums[midIdx];

    let iLeft = left, iRight = right;

    while(iLeft <= iRight){
        while(nums[iLeft] < pivot){
            iLeft++;
        }

        while(nums[iRight] >= pivot){
            iRight--;
        }
        if(iLeft <= iRight){
            [nums[iLeft], nums[iRight]] = [nums[iRight], nums[iLeft]];
            iLeft++;
            iRight--;
        }
    }
    [nums[midIdx], nums[iLeft]] = [nums[iLeft], nums[midIdx]];

    return iLeft;
}
const nums1 = [6,3,5,7,8,4];

console.log(leftArr, rightArr);

// console.log(partition(nums1));