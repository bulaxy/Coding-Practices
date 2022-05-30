let n = 5, k = 12


const recursive = (bag, preArr = []) => {
    if (bag.length === 1) return [[...preArr, ...bag]]

    return bag.reduce((prev, curr) => [
        ...prev,
        ...recursive(bag.filter(v => v !== curr), [...preArr, curr])
    ], [])
}

const bruteForce = (n, k) => {
    let arr = Array(n).fill().map((_, i) => i + 1)
    return recursive(arr)[k - 1]
}

console.time('normal')
console.log(bruteForce(n, k))
console.timeEnd('normal')