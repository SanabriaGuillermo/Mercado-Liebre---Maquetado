const express = require ("express");
const path = require ("path");

 let app = express();

/**Midleware */
app.use(express.static("public"))

/* Routing */
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

 const port = 3000  
 app.listen(port, ()=>{
     console.log(`servidor corriendo en el puerto ${port}\n http://localhost:${port}`)
 });
