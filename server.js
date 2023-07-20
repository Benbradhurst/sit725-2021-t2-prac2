var express = require('express')
var bodyParser = require('body-parser')



var app = express()
var port = process.env.port || 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(request,response)=>{
    response.sendFile(__dirname +'/public/index.html');
});

app.post('/confirm', function(request,response){

    let html = " ";
    let name = request.body.name;
    let email = request.body.email;
    let dob = request.body.DoB;

    html += "<h1>Your account details </h1>";
    html += "<h2> Name: </h2>" + name;
    html += "<h2> Email: </h2>" + email;
    html += "<h2> Date of Birth</h2>" + dob;

    response.send(html);

});

app.post('/add', function(req, res){
    let html = " ";
    let firstInt = req.body.number1;
    let secondInt = req.body.number2;
    let sum = parseInt(firstInt) + parseInt(secondInt);
    
    html+= `<h1> the sum of ${firstInt} and ${secondInt} is <strong> ${sum}</strong></h1> `
    res.send(html);

})


app.listen(port,()=>{
    console.log("app listening to: "+ port)
    console.log("server active on http://localhost:3000/")
    console.log("shut down server with Ctrl+C")
})