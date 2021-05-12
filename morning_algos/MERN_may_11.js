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
    let arr = [];
    let rows = matrix.length;
    for ( let i = 0; i < rows; i++){
        arr[i] = [];
        for(let j = 0; j < rows; j++){

        }
    }
}
diagonalDifference()

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

}