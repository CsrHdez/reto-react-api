const express = require("express")
const router = express.Router()

router.post("/login", (req, res) => {
	const { userDataLogin } = req.body
	res.json({
		ok: true,
		message: "Logged in",
		payload: {
			token: "fjsjfosfjldjfjl54sd4f"
		}
	})
})

router.post("/register", (req, res) => {
	const { userDataRegister } = req.body
	res.json({
		ok: true,
		message: "User created successfuly",
		payload: {
			id: 1,
			...userDataRegister
		}
	})
})

router.get("/verify/:hash", (req, res) => {
	const { hash } = req.params
	res.json({
		ok: true,
		message: "Account verify",
		payload: "start session"
	})
})

module.exports = router