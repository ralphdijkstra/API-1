const express = require('express')
const app = express()
app.get('/',function(req, res){
    console.log("GET request op home page")
    res.send('Get op root')
})
app.get('/contact/',function(req, res){
    console.log("GET request op contact page")
    res.send('Get op contact')
})
app.post('/',function(req, res){
    console.log("POST request op home page")
    res.send('Post op root');   
})
const server = app.listen(8081,function(){
    const host = server.address().address
    const port = server.address().port
  console.log("Luister op http://%s%s", host, port)
})
