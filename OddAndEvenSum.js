function OddEvenSum(num){
    let numberArr = String(num).split('');
    let oddNumbersSum = numberArr.reduce((acc, curr) => Number(curr) % 2 !== 0 ? Number(acc) + Number(curr) : acc, 0);
    let evenNumbersSum = numberArr.reduce((acc, curr) => Number(curr) % 2 === 0 ? Number(acc) + Number(curr) : Number(acc), 0);

    console.log(`Odd sum = ${oddNumbersSum}, Even sum = ${evenNumbersSum}`);



}

OddEvenSum(1000435);