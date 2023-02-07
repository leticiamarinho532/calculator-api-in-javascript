const express = require('express');
const routes = express.Router();

const calculatorRoutes = require('./routes/CalculatorRoutes');
let calculator = new calculatorRoutes();

routes.get('/add', calculator.add);
routes.get('/subtract', calculator.subtract);
routes.get('/divide', calculator.divide);
routes.get('/multiply', calculator.multiply);
routes.get('/square-root', calculator.squareRoot);

module.exports = routes;