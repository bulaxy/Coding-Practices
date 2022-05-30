let n = 5, k = 12

const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1)
}

const mathOutRecursive = (arr, k, partLength, value = []) => {
    let group = Math.floor(k / partLength) //Math.floor( / factorial(arr.length))
    value.push(...arr.splice(group, 1))
    if (arr.length === 0) return value
    return mathOutRecursive(arr, k % partLength, partLength / arr.length, value)
}

const mathOut = (n, k) => {
    let arr = Array(n).fill().map((_, i) => i + 1)
    return mathOutRecursive(arr, k - 1, factorial(n) / arr.length)
}

console.time('math')
console.log(mathOut(n, k))
console.timeEnd('math') 