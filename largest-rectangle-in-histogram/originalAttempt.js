import { randomArrayOfNumber } from '../helpers.js'
let arr = randomArrayOfNumber(5, 20, 0)
let maxArea = 0
// arr.forEach((value,index)=>{
//     arr.forEach((subVal,subInd)=>{

//     })
// })
for (let i in arr) {
    let itemsToLeft = 0, itemsToRight = 0
    let curVal = arr[i]
    let leftArrReversed = arr.slice(0, i).reverse()
    let rightArr = arr.slice(0, i).reverse()

    // Loop before, check backwards
    for (let l in leftArrReversed) {
        l = Number(l)
        if (leftArrReversed[l] < curVal) {
            // it breaks, so get last item
            itemsToLeft = l
            break;
        };
        if (l + 1 == leftArrReversed.length) itemsToLeft = l + 1
    }

    // Loop after (skip current value), so +2 instead of +1
    for (let r in rightArr) {
        r = Number(r)
        if (rightArr[r] < curVal) {
            // Prevent Negative
            itemsToRight = r
            break;
        };
        if (r + 1 == rightArr.length) rightArr = r + 1
    }
    let curArea = curVal * (1 + itemsToLeft + itemsToRight)
    if (maxArea < curArea) maxArea = curArea
}

console.log(arr, maxArea)