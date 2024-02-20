function solve(inputData){
    let words = inputData.match(/\w+/g);

    let wordsToUpper = words.map(word => word.toUpperCase());

    console.log(wordsToUpper.join(', '));
}

solve('Words in uppercase');