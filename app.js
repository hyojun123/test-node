const express = require('express')
const app = express()
const port = 3000

app.get('/user-service/', (req, res) => {
    console.log("request success");
    res.send({name:'a',age:10});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})