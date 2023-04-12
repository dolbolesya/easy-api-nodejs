const { json } = require('express');
var express = require('express');

var app = express();

const PORT = 3000;

var db = [
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
    res.send(db);
});

app.get('/api/:id', function(req,res) {
    var info = db.find(function(info){
        return info.id === Number(req.params.id);
    })
    res.send(info);
});

app.listen(PORT, function(){
    console.log(`API start on PORT: ${PORT}`)
});