require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000; 
const server = process.env.SERVER || 'google.com'; 
console.log(process.env.SERVER)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
  
app.listen(port, () => {
  console.log(`Example app listening at http://${server}:${port}`)
})