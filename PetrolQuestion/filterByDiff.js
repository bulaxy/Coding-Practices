let gas = [1, 5, 3, 3, 5, 3, 1, 3, 4, 5]
let cost = [5, 2, 2, 8, 2, 4, 2, 5, 1, 2]

const byRemains = (gas, cost) => {

    let candidate = 0
    let remains = 0
    for (let i = 0; i < gas.length; i++) {
        remains += gas[i] - cost[i]
        if (remains >= 0) continue
        candidate = i + 1
        remains = 0
    }

    let prevRemains = gas.slice(0, candidate - 1).reduce((prev, curr) => prev + curr, 0) - cost.slice(0, candidate - 1).reduce((prev, curr) => prev + curr, 0)
    if (candidate === gas.length || remains + prevRemains < 0) return -1
    return candidate
}

console.log(byRemains(gas, cost))