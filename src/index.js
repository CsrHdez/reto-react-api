const express = require("express")
const cors = require("cors")
const Routes = require("./Routes")
const db = require("./Libs/DB")
const app = express()
const port = process.env['PORT']

// Middelwares
app.use(cors())
app.use(express.json())

// Routes

app.get("/", (req, res) => {
	res.json({
		ok: true,
		msg: "Hola bienvenidos a mi api"
	})
})
Routes(app)

app.listen(port, () => {
	console.log(`app server runing on port ${port}`)
	db.connect()
        .then(() => {
            console.log("DB Connected")
        })
        .catch(err => {
            console.error("Connection refused ", err)
        })
})

// Resources
// https://mongoosejs.com/docs/validation.html
// https://code.tutsplus.com/es/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527
// https://stackoverflow.com/questions/11646107/you-have-not-concluded-your-merge-merge-head-exists
// https://yosoy.dev/deploy-de-github-a-heroku/