const express = require("express")
const User = require("../Models/UserModel")
const { encryptPass } = require("../Libs/Encryption")
const router = express.Router()

router.post("/login", async (req, res, next) => {
	const { userDataLogin } = req.body
    const user = await User.getParams({username: userDataLogin.username})
    const isMatch = await encryptPass.verifyPassword(userDataLogin.password, user.password)
	if ( isMatch ) {
		const token = "lsfshfs38947nnn#$h3hsfh"
		res.status(200).json({
            ok: true,
            message: "Sign in successful",
            payload: {token}
        })
	} else {
        res.status(401).json({
            ok: false,
            message: "Credentials invalidates"
        })
    }
})

router.post("/register", async (req, res, next) => {
	const { userDataRegister } = req.body
	try {
		const newUser = await User.create(userDataRegister)
		res.status(201).json({
			ok: true,
			message: "User created successfuly",
			payload: newUser
		})
	} catch (err) {
		next(err)
	}
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