var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));




app.listen(process.argv[2])
app.listen(process.argv[3])
