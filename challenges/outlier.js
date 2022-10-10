// const outlier = (arr) => {
//     let arr1 = [];
//     let arr2 = [];
//     for (num of arr) {
//         if (num % 2 === 0) {
//             arr1.push(num);
//         } else {
//             arr2.push(num);
//         }
//     } 
//     if (arr1.length === 1) {
//         return Number(arr1);
//     }
//     return Number(arr2);
// };

const outlier = (arr) => {
    let arr1 = [];
    let arr2 = [];
    for (num of arr) {
        num % 2 === 0 ? arr1.push(num): arr2.push(num);
    } 
    return arr1.length === 1 ? Number(arr1): Number(arr2);
};

console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(outlier([160, 3, 1719, 19, 11, 13, -21]));

// console.log([20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]>[21, 4, 0, 100, 4, 11, 2602, 36]);