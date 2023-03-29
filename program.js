const express = require("express");
const res = require("express/lib/response"); // need a response from express
const app= express();
  
const add = function(n1,n2){
    return n1+n2;
}

const subtract = function(n1,n2){
    return n1-n2;
}

const divide = function(n1,n2){
    return n1/n2;
}

const multiply = function(n1,n2){
    return n1*n2;
}

const checkNumbers = function(n1,n2){

    if(isNaN(n1)) {
        throw new Error("n1 incorrectly defined");
    }
    
    if(isNaN(n2)) {
        throw new Error("n2 incorrectly defined");
    }
    
    if (n1 === NaN || n2 === NaN) {
        throw new Error("Parsing Error");
    }
}

const calculator = function(req,operation){
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    checkNumbers(n1,n2);
    const result = operation(n1,n2);
    return result;
}


//http://localhost:3040/add?n1=2&n2=10
//Invoke-RestMethod -Uri http://localhost:3040/add?n1=2"&"n2=10 -Method Get -Headers @{"Content-Type"="application/json"}
app.get("/add", (req,res)=>{
    try{
        const result = calculator(req, add);
        res.status(200).json({statuscode:200, data: result }); 
    } catch(error) { 
        res.status(500).json({statuscode:500, msg: error.toString() })
      }
});

//http://localhost:3040/subtract?n1=2&n2=10
//Invoke-RestMethod -Uri http://localhost:3040/subtract?n1=2"&"n2=10 -Method Get -Headers @{"Content-Type"="application/json"}
app.get("/subtract", (req,res)=>{
    try{
        const result = calculator(req, subtract);
        res.status(200).json({statuscode:200, data: result }); 
    } catch(error) { 
        res.status(500).json({statuscode:500, msg: error.toString() })
      }
});

//http://localhost:3040/multiply?n1=2&n2=10
//Invoke-RestMethod -Uri http://localhost:3040/multiply?n1=2"&"n2=10 -Method Get -Headers @{"Content-Type"="application/json"}
app.get("/multiply", (req,res)=>{
    try{
        const result = calculator(req, multiply);
        res.status(200).json({statuscode:200, data: result }); 
    } catch(error) { 
        res.status(500).json({statuscode:500, msg: error.toString() })
      }
});

//http://localhost:3040/divide?n1=2&n2=10
//Invoke-RestMethod -Uri http://localhost:3040/divide?n1=2"&"n2=10 -Method Get -Headers @{"Content-Type"="application/json"}
app.get("/divide", (req,res)=>{
    try{
        const result = calculator(req, divide);
        res.status(200).json({statuscode:200, data: result }); 
    } catch(error) { 
        res.status(500).json({statuscode:500, msg: error.toString() })
      }
});

const port=3040;
app.listen(port,()=> {
    console.log("Listening to port: " +port);
})