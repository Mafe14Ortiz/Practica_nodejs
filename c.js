const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/spanish', function (req, res) {
    res.send('Hola mundo')
  })

app.get('/Korean', function (req, res) {
    res.send('홀라 문도')
  })

app.get('/Persian', function (req, res) {
    res.send('هولا موندو')
  })

  app.get('/Swedish', function (req, res) {
    res.send('Hej Mundo')
  })  
  app.get('/Tailandes', function (req, res) {
    res.send('สวัสดีชาวโลก')
  })  
  
app.listen(3000)