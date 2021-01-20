function solve(a,b){
    let concidenceNumber = 0;
    let arr = [];
    for (let i = 0; i < b.length; i++){
        concidenceNumber = 0;
        for (let j = 0; j < a.length; j++){
            if (b[i] == a[j]){
                concidenceNumber++;
            }
        }
        arr.push(concidenceNumber);
    }
    return arr;
}