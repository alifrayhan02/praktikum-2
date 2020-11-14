const express = require("express") // memanggil library
const bodyParser = require("body-parser") // memanggil library
const cors = require("cors") // memanggil library
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.get("/test",( req,res) =>{

    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)


})

app.get("/profil/:name/:age", (req,res) => {

    let name = req.params.name // mengambil nilai pada parameter name
    let age = req.params.age // mengambil nilai pada parameter age

    let response = {
        nama: name,
        umur: age
    }

    res.json(response)

})

app.post("/bujur_sangkar", (req,res) => {
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body

    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }

    res.json(response)
})


app.listen(8000, () => {
    console.log("Server run on port 8000");
})
