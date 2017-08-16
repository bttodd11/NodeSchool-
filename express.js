var express = require('express')
var app = express()
app.get('/home', function(req,res){
  res.end('Hello World!')
})
app.listen(process.argv[2])



app.set('views', path.join(__dirname,'templates')


app.use(express.static(process.argv[3] || path.join(__dirname,"public")))
