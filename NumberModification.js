function numberModification(number){

    function calculateAverage(num){
        let numberStr = String(num);

        let digitSum = [...numberStr].reduce((acc, digit) => acc + parseInt(digit), 0);

        return digitSum / numberStr.length;
    }

    

    while(calculateAverage(number) <= 5){
        number = parseInt(number.toString() + '9');
    }

    console.log(number);
}

numberModification(101);
numberModification(5835);