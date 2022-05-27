import { randomArrayOfNumber } from '../helpers.js'
// let arr = [1, 2, 3, 4]
let arr = randomArrayOfNumber(5, 20, 0)
let area = 0

let stack = [{ index: -1, value: -1 }]

// Loop last item as -1 to clear the stack
arr.push(-1)

for (let i in arr) {
    i = Number(i)
    let start = i
    while (stack[0].value > arr[i]) {
        let curr = stack.shift()
        area = Math.max(area, curr.value * (i - curr.index))
        start = curr.index
    }
    stack.unshift({ index: start, value: arr[i] })
}

console.log(arr, area)