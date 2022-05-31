let gas = [1, 5, 3, 3, 5, 3, 1, 3, 4, 5]
let cost = [5, 2, 2, 8, 2, 4, 2, 5, 1, 2]

const attempt = (start) => {
    let remains = 0
    for (let i = 0; i < gas.length; i++) {
        if (remains < 0) return false
        remains += gas[(i + start) % gas.length]
        remains -= cost[(i + start) % cost.length]
    }
    return true
}

for (let i = 0; i < gas.length; i++) {
    if (!attempt(i)) continue
    console.log('Solution', i)
    break
}

