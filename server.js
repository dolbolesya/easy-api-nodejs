var bp = require('body-parser');
var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var db;

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

const PORT = 3000;

var list = [
    {
        id: 1,
        name: 'Alex',
    },
    {
        id: 2,
        name: 'Mick',
    },
    {
        id: 3,
        name: 'Nick',
    }
]

app.get('/', function(req, res) {
    res.redirect('/api');
});

app.get('/api', function(req,res) {
    res.send(list);
});

app.get('/api/:id', function(req,res) {
    var info = list.find(function(info){
        return info.id === Number(req.params.id);
    })
    res.send(info);
});

app.post('/api', function(req,res) {
    var value = {
        id: Date.now(),
        name: req.body.name
    };

    list.push(value);
    res.send(value);
});

app.put('/api/:id', function(req, res){
    var info = list.find(function(info){
        return info.id === Number(req.params.id);
    });
    info.name = req.body.name;
    res.sendStatus(200);
});

app.delete('/api/:id', function(req, res){
    list = list.filter(function(info){
        return info.id !== Number(req.params.id);
    }) 
    res.sendStatus(200);
});

app.listen(PORT, function(){
    console.clear();
    console.log(`API start on PORT: ${PORT}`);
});
/*
MongoClient.connect('mongodb://localhost:27017/my-api', function(err, database){
    if (err) { return console.log(err)};
    db = database;

})*/

