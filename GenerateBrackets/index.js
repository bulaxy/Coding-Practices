let n = 6
const loop = (n, diff = 0, subset = []) => {
    if (diff < 0 || diff > n) return []
    if (n === 0) return [subset]

    return [
        ...loop(n - 1, diff + 1, [...subset, '(']),
        ...loop(n - 1, diff - 1, [...subset, ')'])
    ]
}

console.time()
console.log(loop(n))
console.timeLog()
