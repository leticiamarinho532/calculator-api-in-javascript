class calculatorService {
    add(firstNumber, secondNumber) 
    {
        let result = firstNumber + secondNumber;

        return result;
    }

    subtract(firstNumber, secondNumber) 
    {
        let result = firstNumber - secondNumber;

        return result;
    }

    divide(firstNumber, secondNumber) 
    {
        let result = firstNumber / secondNumber;

        return result;
    }

    multiply(firstNumber, secondNumber)
    {
        let result = firstNumber * secondNumber;

        return result;
    }
}

module.exports = calculatorService;
