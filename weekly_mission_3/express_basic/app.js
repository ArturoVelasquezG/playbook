//uso de objeto express
const express = require('express')
//app express
const app = express()
//puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//path inicial, responderá a la url localhost:3000
app.get('/',(req, res)=>{
    res.send('Hello World!')
});

//respondiendo texto
//localhost:3000/launchx
app.get("/launch", (req, res) => {
    res.send("Welcome launchX")
});

// Regresando un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
});

// Query Params: Recibir parametros por la url
// http://localhost:3000/explorers/carlo
// req.params = {"explorerName": "carlo"}
app.get("/explorers/:explorerName", (req, res) => {
    res.send(req.params);
})

//iniciar app
app.listen(port,() => {
   console.log(`Example app listening on port ${port}`)
});
