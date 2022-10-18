# calculator-api-in-javascript
### In progress ![50%](https://progress-bar.dev/50)

A simple API calculator with base operations avaible (add, subtract, divide and multiply).

## Sumary
1. Tecnologies
2. Architecture Used
3. How to Use on Your Machine
4. Routes

## 1. Tecnologies
- Node.js
- Express
- Docker

## 2. Architecture Used
```
Notice: This topic will have increments!
```
The architecture was done with focus on be uncoupled but using YAGNI. 

On service folder there are only bussines logic and can be moved to any other type of architecture.

On routes and end-points the app is coupled with express, and the reason on this layer be like that is that the project is small, and apply robust architectures (clean architecture as exemple) would be too much for this project (considering the size).
## 3. How to Use on Your Machine
#### Cloning
- Install Docker locally [Docker site](https://docs.docker.com/desktop/).
- Clone this repository.
#### Runing
```
Notice: It's not needed to run command to install dependencies because there is a configuration to do it automatially.
```

- Run command `docker compose up` in root folder (where docker-compose.yaml file is).
- Use your local IP (ex: localhost), port 8081 and the routes describred in the API Routes Implementation.
## 4. Routes

- GET /add
    
    **Query Params Explanation**
    - firstNumber = number
    - secondNumber = number

    **Exemple request**

    http://localhost:8081/add?firstNumber=1&secondNumber=2

    **Responses**

    In Success

    ```
    3
    ```
- GET /subtract
    
    **Query Params Explanation**
    - firstNumber = number
    - secondNumber = number

    **Exemple request**

    http://localhost:8081/subtract?firstNumber=5&secondNumber=1

    **Responses**

    In Success

    ```
    4
    ```
- GET /divide
    
    **Query Params Explanation**
    - firstNumber = number
    - secondNumber = number

    **Exemple request**

    http://localhost:8081/divide?firstNumber=2&secondNumber=2

    **Responses**

    In Success

    ```
    1
    ```
- GET /multiply
    
    **Query Params Explanation**
    - firstNumber = number
    - secondNumber = number

    **Exemple request**

    http://localhost:8081/multiply?firstNumber=4&secondNumber=4

    **Responses**

    In Success

    ```
    16
    ```
