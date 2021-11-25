const express = require("express")
const Routes = require("./Routes")
const app = express()

// Middelwares
app.use(express.json())

// Routes

app.get("/", (req, res) => {
	res.json({
		ok: true,
		msg: "Hola bienvenidos a mi api"
	})
})
Routes(app)

app.listen(8080, () => {
	console.log(`app server runing on port 8080`)
})

// Resources
// https://mongoosejs.com/docs/validation.html
// https://code.tutsplus.com/es/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527