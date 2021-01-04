function range(startNum, endNum) {
    let arr = [];
    for (let i = startNum + 1; i < endNum; i++){
        arr.push(i);
    }
    return arr;
}
let x = 2;
let y = 3;
console.log(range(x, y));
