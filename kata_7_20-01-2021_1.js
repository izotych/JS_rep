function calc(x){
    let total1 = '';
    for (let i = 0; i < x.length; i++){
        total1 += x.charCodeAt(i);
    }
    let total2 = total1.replace(/7/gi, '1');
    let arr1 =  total1.split('').map(parseFloat);
    let numArr1 = arr1.reduce(function(a, b) {
        return a + b;
    });
    let arr2 = total2.split('').map(parseFloat);
    let numArr2 = arr2.reduce(function(a, b) {
        return a + b;
    });
    return numArr1 - numArr2;
}
