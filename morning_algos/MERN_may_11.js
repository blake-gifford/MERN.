/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
        - top left to bottom right diagonal
        - top right to bottom left diagonal

    EXAMPLE:
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9]
    ]

    diagonalDifference(matrix) should return 2, because (1 + 5 + 9) - (3 + 5 + 9) has an absolute value of 2
*/

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]

function diagonalDifference(sqrMatrix) {
    let d1 = 0;
    let d2 = 0;
    for(let i = 0, j =  sqrMatrix.length-1; i < matrix.length; i++, j--){
        d1 += matrix[i][i];
        d2 += matrix[i][j];
    }
    return Math.abs(b1 - d2);
}
diagonalDifference(sqrMatrix)

/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.
    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

    EXAMPLE:
    const nums1 = [1, 2, 2, 2, 7];
    const nums2 = [2, 2, 6, 6, 7];

    orderedMultiSetUnion(nums1, nums2) should return [1,2,2,2,6,6,7]
*/
function orderedMultiSetUnion(sortedA, sortedB){
    const union = [];

    while(i < sortedA.length){
        while(j < sortedB.length){
            if (sortedA[iA] === sortedB[iB]){
                union.push(sortedA[iA]);
                i++;
            }else if(sortedA[i] > sortedB[j]){
                newArr.push(sortedA[i]);
                j++;
            }else {
                newArr.push(sortedA[i]);
                i++;
                j++;
            }
            break;
        }
    }
    return newArr;
}

const nums1 = [1,2,2,2,7];
const nums2 = [2,2,6,6,7];

console.log(orderedMultiSetUnion(nums1, nums2));