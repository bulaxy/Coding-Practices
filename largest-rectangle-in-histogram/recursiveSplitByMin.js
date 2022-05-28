import { randomArrayOfNumber } from '../helpers.js'
// let arr = [4, 2, 3, 4]
let arr = randomArrayOfNumber(5, 20, 0)

const getSize = (arr) => {
    if (arr.length === 0) return 0
    let minHeight = Math.min(...arr)
    let minHeightIndex = arr.indexOf(minHeight)

    let recFromLeft = getSize(arr.slice(0, minHeightIndex))
    let recFromRight = getSize(arr.slice(minHeightIndex + 1, arr.length))

    return Math.max(recFromLeft, recFromRight, minHeight * arr.length)
}

console.log(arr, getSize(arr))
