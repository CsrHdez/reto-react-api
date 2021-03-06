const express = require("express")
const User = require("../Models/UserModel")
const { encryptPass } = require("../Libs/Encryption")
const { sign } = require("../Libs/JWT")

const router = express.Router()

router.post("/login", async (req, res, next) => {
	const { userDataLogin } = req.body
    const user = await User.getParams({username: userDataLogin.username})
    const isMatch = await encryptPass.verifyPassword(userDataLogin.password, user.password)
	if ( isMatch ) {
		const payload = {
            sub: user._id,
            role: user.admin,
            exp: (Date.now() / 1000) + (60 * 60)
        }
        const token = await sign(payload)
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
		const payload = {
            sub: userDataRegister.email,
            exp: (Date.now() / 1000) + (60 * 60)
        }
        userDataRegister.verifyHash= await sign(payload)
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