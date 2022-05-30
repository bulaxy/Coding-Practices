let n = 5, k = 12

const recursiveMemo = (bag, preArr = [], memo = {}) => {
    if (bag.length === 1) return [[...preArr, ...bag]]
    let key = preArr.join(',') + bag.join(',')
    if (key in memo) return memo[bag.join(',')]
    memo[key] = bag.reduce((prev, curr) => [
        ...prev,
        ...recursiveMemo(bag.filter(v => v !== curr), [...preArr, curr], memo)
    ], [])

    return memo[key]
}

const bruteForceGenerateArrayWithMem = (n, k) => {
    let arr = Array(n).fill().map((_, i) => i + 1)
    return recursiveMemo(arr)[k - 1]
}

// Since every one are unique, this isnt faster..
console.time('Memo')
console.log(bruteForceGenerateArrayWithMem(n, k))
console.timeEnd('Memo')
