const expr  = require('express');
const bp    = require('body-parser');
const PORT  = process.env.PORT || 5000;
let app = expr();


app.get("/",function(req,res){
    console.log("New Connection");
    res.sendFile(__dirname + "/index.html");

})
app.get("/bmicalc",function (req,res){
    res.sendFile(__dirname + "/inside/main.html");
})

app.use(bp.urlencoded({extended:true}));
app.use(expr.static(__dirname + "/indexFiles"));
app.use(expr.static(__dirname + "/inside"));

app.post("/bmicalc",function(req,res){
    console.log(req.body);
    let h = Number(req.body.height)/100;
    let w = Number(req.body.weight);

    let bmi = w/(h*h);
    bmi = bmi.toFixed(2);
    res.send("<p style = 'padding-top:20%;color:#ffabab;text-align:center;font-family:Product Sans Regular;font-size:100px'> Your BMI is " + bmi + "</p>");
    
});

app.listen(PORT, function(){
    console.log("Server is listening at port 8000");
});
