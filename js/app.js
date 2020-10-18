const express = require('express')

const app = express()

const PORT = 3000
const TIMEOUT = 3*1000
const ID = Math.floor(Math.random()*1000)

app.get('/', (req,res) =>{
    res.status(200).send("ping - node" + ID)
})

app.get('/sleep', (req,res) =>{
    setTimeout(() => {
        res.status(200).send("Sleep")
    }, TIMEOUT)
})

app.get('/timeout', (req,res) => {
    let start = new Date()
    
    while (new Date() - start <= TIMEOUT){
    }
    res.status(200).send("timeout - node " + ID)
})

app.listen(PORT, () =>  {
    console.log("Listening on port", PORT)
})