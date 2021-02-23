function calculateWinners(snapshot, penguins) {
    function getMinOfArray(arr) {
        return Math.min.apply(null, arr);
    }
    let raceMap = snapshot.split(' ');
    let findPenguin = false;
    let distance = 0;
    let distanceArr = [];
    for (track of raceMap) {
        //ОБХОД ОСНОВНОГО МАССИВА
        distance = 0;
        findPenguin = false;
        for (step of track) {
            //ОБХОД ЭЛЕМЕНТОВ МАССИВА
            if (step == 'p' || step == 'P') {
                findPenguin = true;
            }
            if (findPenguin == true){
                if (step == '-') {
                    distance += 1;
                }
                if (step == '~') {
                    distance += 2;
                }
            }
        }
        distanceArr.push(distance);
    }
    // Выяснение призовых мест
    for (let i = 0; i < penguins.length; i++) {
        console.log(penguins[i] + ' ' + distanceArr[i]);
        
    }



   return distanceArr;
}



let test1 ='|-~~------------~--P-------| |~~--~P------------~-------| |--------~-P---------------| |--------~-P----~~~--------|';
let test2 = ["Joline", "Abigail", "Jane", "Gerry"];

console.log(calculateWinners(test1, test2));