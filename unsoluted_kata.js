function numberOfCarries(a, b) {
    a = String(a);
    b = String(b);

    a - b > 0 ? i = a.length : i = b.length;

    let overloads = 0;
    //console.log(i);
    let overNumber = 0;

    while (i > 0) {
        
        if (+a[i] + +b[i] + overNumber >= 10){
            overloads += 1;
            overNumber = (+a[i] + +b[i]) - 10;
        }
        i--;
        console.log(overNumber);

    }
    return overloads;
}

let test1 = 1;
let test2 = 9999;

console.log(numberOfCarries(test1, test2));