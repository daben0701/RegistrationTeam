var express = require("express")
var path = require("path")
var ejs = require("ejs")

var app = express()

app.get("/", function(req, res){
    res.render('index');
});

app.set('views', '../')
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

console.log(path.join(__dirname, "../build"));

app.use('/build', express.static(path.join(__dirname, "../build")));

var server = app.listen(8000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
}); 