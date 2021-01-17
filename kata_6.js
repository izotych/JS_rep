function isAValidMessage(message){
    let arr = ['1','2','3','4','5','6','7','8','9','0'];
    let x = '';
    let y = '';
    let z = [];

    for (i = 0; i < message.length; i++){
        if (arr.includes(message[i]) == true){
            x += message[i];
        }
        else {
            y += message[i];
        }
    }
    return z;
}
console.log(isAValidMessage("3hey5hello2hi"));