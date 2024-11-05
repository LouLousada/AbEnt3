const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3001;

app.listen(port, () => {
    console.log(`este é o link usado pra acessar o site = http://localhost:${port}/`);
});

//soma
function soma(a, b) {
    return a + b;
}

app.post('/soma', function (req, res) {
    const body = req.body;
    const result = soma(Number(body.a), Number(body.b)); 
    res.send(`resultado da soma de ${body.a} e ${body.b} é ${result}`);
});

//subtração
function sub(a, b) {
    return a - b;
}

app.post('/sub', function (req, res) {
    const body = req.body;
    const result = sub(Number(body.a), Number(body.b));
    res.send(`resultado da sub de ${body.a} menos ${body.b} é ${result}`);
});

//multiplicação
function times(a, b) {
    return a * b;
}

app.post('/multi', function (req, res) {
    const body = req.body;
    const result = times(Number(body.a), Number(body.b));
    res.send(`resultado da multiplicação de ${body.a} vezes ${body.b} é ${result}`);
});

// divisão
function divs(a, b) {
    return a / b;
}

app.post('/divs', function (req, res) {
    const body = req.body;
    const result = divs(Number(body.a), Number(body.b));
    res.send(`resultado da divisão de ${body.a} por ${body.b} é ${result}`);
})



app.get('/', function(req, res) {
    res.send('=)');
});