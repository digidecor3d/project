var express = require('express');
var app = express()


app.listen('8000',function () {
    console.log("server runing at http://localhost:7000")
})
app.use('/',function (req,res,next) {
   console.log('hello world999')
    next()
})
app.use('/',function (req,res,next) {
    console.log('hello world3133')
     next()
 })
app.get('/',function (req,res) {
    res.send('hello world')
})