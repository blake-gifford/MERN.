/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.
    Output: only the shared values between the two arrays (deduped).
    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

    EXAMPLE:
    let nums1 = [0, 1, 2, 2, 2, 7];
    let nums2 = [2, 2, 6, 6, 7];

    orderedIntersection(nums1, nums2) should return [2, 7]
*/

// let nums1 = [0,2,3,5,8];
// let nums1 = [1,3,4,5,8];

// function orderedIntersection(sortedA, sortedB){
//     if( nums1[i] == nums2[i]){
//         return nums1[i];
//     }
//     const newNums = nums.map (nums1[i]);
    
// }
// console.log( newNums );

let sortedA = [0,2,3,5,8];
let sortedB = [1,3,4,5,8];

function orderedIntersection(sortedA, sortedB){
    let i = 0;
    let j = 0;

    let intersection = [];

    while(i < sortedA.length && j < sortedB.length){
        if (sortedA[i] === sortedB[j]){
            if(intersection[intersection.length-1] !== sortedA[i]){
                intersection.push(sortedA[i]);
            }
            i++;
            j++;
        }else if(sortedA[i < sortedB[j]]){
            i++;
        }else{
            j++;
        }
    }
    return intersection;
}

orderedIntersection(nsortedAms1, sortedB);