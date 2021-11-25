const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
	res.json({
		ok: true,
		message: "All info user",
		payload: {
			name: "User 1",
			email: "solosemesourrioesto@gmail.com",	
		}
	})
})

router.post("/change-password/:hash", (req, res) => {
	const { hash } = req.params
	res.json({
		ok: true,
		message: "Changed password",
		payload: {}
	})
})

router.patch("/:id", (req, res) => {
	const { id } = req.params
	const { userDataUpdate } = req.body
	res.json({
		ok: true,
		message: "User updated successfuly",
		payload: {
			id,
			...userDataUpdate
		}
	})
})

router.delete("/:id", (req, res) => {
	const { id } = req.body
	res.json({
		ok: true,
		message: "User deleted successfuly",
		payload: {id}
	})
})

module.exports = router