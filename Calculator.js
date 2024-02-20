function solve(num1, operation, num2){
    let operationObj = {
        '+': num1 + num2,
        '-': num1 - num2,
        '/': num1 / num2,
        '*': num1 * num2,
    }

    console.log(operationObj[operation].toFixed(2));
}

solve(4, '+', 5);