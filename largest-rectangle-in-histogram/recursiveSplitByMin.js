// import { randomArrayOfNumber } from '../helpers.js'
// let arr = [1, 2, 3, 4]
// // let arr = randomArrayOfNumber(5, 20, 0)

// const getSize = (arr, low, high) => {
//     if (low > high) return 0
//     if (low == high) return arr[low]
//     let minHeight = [...arr].slice(low, high + 1).sort()[0]
//     let minHeightIndex = [...arr].slice(low, high + 1).findIndex(val => val == 1)
//     console.log(minHeight, minHeightIndex, [...arr].slice(low, high + 1))
//     let recFromLeft = 0, recFromRight = 0
//     if (minHeightIndex + 1 !== high) {
//         recFromLeft = getSize(arr, low, minHeightIndex + 1)
//     }
//     if (minHeightIndex + 1 !== low) {
//         recFromRight = getSize(arr, minHeightIndex + 1, high)
//     }
//     //    console.log(minHeight * (high - low + 1), high, low, minHeight, arr, [...arr].slice(low, high))
//     console.log(recFromLeft, recFromRight)
//     return Math.max(recFromLeft, recFromRight, minHeight * (high - low + 1))
// }

// console.log(arr, getSize(arr, 0, arr.length - 1))