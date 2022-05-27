export const randomArrayOfNumber = (n = 20, max = 20, min = 0) => {
    return Array(n).fill().map(() => Math.floor(Math.random() * (max - min) + min))
}