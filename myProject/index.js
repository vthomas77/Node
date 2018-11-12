const express = require('express')
const app = express()

app.use('/assets',express.static('./public'))

app.get('/', function (req, res) {
  res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Node</title>
        <meta charset="utf-8">
      </head>
      <body>
        <script type="text/javascript" src="./assets/script.js"></script>
      </body>
      </html>
    `)
})

app.get('/home', function (req, res) {
  res.send({"data":"ResultOK"})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
