const express = require('express')

const app = express()

const PORT = 3000
const TIMEOUT = 3*1000
const ID = Math.floor(Math.random()*1000)

app.get('/', (req,res) =>{
    res.status(200).send("node - ping " + ID)
})

app.get('/sleep', (req,res) =>{
    setTimeout(() => {
        res.status(200).send("node - timeout " + ID)
    }, TIMEOUT)
})

app.get('/heavy', (req,res) => {
    let start = new Date()
    
    while (new Date() - start <= TIMEOUT){
    }
    res.status(200).send("node - heavy " + ID)
})

app.listen(PORT, () =>  {
    console.log("Listening on port", PORT)
})