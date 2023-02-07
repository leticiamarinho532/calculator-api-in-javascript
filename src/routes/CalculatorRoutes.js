const calculatorService = require('../services/CalculatorService');

class CalculatorRoutes {

    async add(request, response)
    {
        const calculator = new calculatorService();
        const { firstNumber, secondNumber } = request.query;

        const result = await calculator.add(Number(firstNumber), Number(secondNumber));

        return response.json(result);
    }

    async subtract(request, response) 
    {
        const calculator = new calculatorService();
        const { firstNumber, secondNumber } = request.query;

        const result = calculator.subtract(Number(firstNumber), Number(secondNumber));

        return response.json(result);
    }

    async divide(request, response)
    {
        const calculator = new calculatorService();
        const { firstNumber, secondNumber } = request.query;

        const result = calculator.divide(Number(firstNumber), Number(secondNumber));

        return response.json(result);
    }

    async multiply(request, response)
    {
        const calculator = new calculatorService();
        const { firstNumber, secondNumber } = request.query;

        const result = calculator.multiply(Number(firstNumber), Number(secondNumber));

        return response.json(result);
    }

    async squareRoot(request, response) {
        const calculator = new calculatorService();
        const { number } = request.query;

        const result = calculator.squareRoot(Number(number));

        return response.json(result);
    }

}

module.exports = CalculatorRoutes;