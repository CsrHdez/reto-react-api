const User = require("../Schemas/UserSchema")
const { encryptPass } = require("../Libs/Encryption")

const getParams = async params =>  {
    if (typeof params != "object") return false
    return await User.findOne(params).exec()
}

const create = async dataUser => {
	dataUser.password = await encryptPass.hashPassword(dataUser.password)
	const newUser = new User(dataUser)
	return await newUser.save()
}

module.exports = {
	create,
	getParams,
}