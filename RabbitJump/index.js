let length = 100
let pos = Math.floor(Math.random() * 100)
const jump = () => {
    let prev = pos

    if (pos === length - 1) {
        pos--
    } else if (Math.random() > 0.5 || pos === 0) {
        pos++
    } else {
        pos--
    }
    console.log(`from ${prev} to ${pos}`)
}

const check = (i) => {
    if (pos == i) {
        console.log('found')
        return true
    }
    jump()
}
const loop = (even = true) => {
    for (let i = 0; i < length; i++) {
        if (check(i)) return `Rabbit at ${i}`
    }
}
if (!loop()) {
    // Must be misaligned, so waste 1 jump and check again
    check(0)
    loop(false)
}
