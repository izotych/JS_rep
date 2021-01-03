let x = 2017;
function arrayOfNum (num) {
    x = x + '';
    console.log(x);
    let arr = [];
    for (let i = 1, y; i <= x.length; i++ ){
        y = x.substring(0, i);
        console.log(y);
        arr.push(y);
    }
    return arr;
}
console.log(arrayOfNum(x));