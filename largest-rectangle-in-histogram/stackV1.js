import { randomArrayOfNumber } from '../helpers.js'
// let arr = [12, 7, 7, 17, 10]
let arr = randomArrayOfNumber(5, 20, 0)

const buildFromArr = (tempArr) => {
    let buildingArr = []
    let stack = [-1]
    for (let i in tempArr) {
        i = Number(i)
        while (tempArr[i] < tempArr[stack[0]]) {
            stack.shift()
        }
        if (tempArr[i] != tempArr[stack[0]]) {
            buildingArr.push(stack[0])
        } else {
            // if previous value is the same, get last result
            buildingArr.push(buildingArr[i - 1])
        }
        stack.unshift(i)
    }
    return buildingArr
}
let fromLeft = buildFromArr(arr).map(val => val + 1) // remapping starting position
let fromRight = buildFromArr([...arr].reverse())
    .reverse()
    .map(val => (arr.length - val) - 1) // Math.Abs to arr.length-value to get the correct index (flipping it), then -1 to adjust for starting position

console.log(arr, fromLeft, fromRight, Math.max(...arr.map((height, index) => height * (fromRight[index] - fromLeft[index]))))


