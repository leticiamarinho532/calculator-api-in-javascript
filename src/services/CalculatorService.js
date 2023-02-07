class CalculatorService {
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

    squareRoot(number) 
    {
        let result = Math.sqrt(number);

        return result;
    }
}

module.exports = CalculatorService;
