const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
	name: {
		firstName: {
			type: String,
			trim: true,
			required: [true, "El nombre del usuario es requerido."],
		},
		lastName: {
			type: String,
			required: true,
			trim: [true, "El apellido del usuario es requerido"],
		}
	},
	email: {
		type: String,
		required: true,
		trim: [true, "El correo es requerido."],
		unique: true,
		validate: {
			validator: function(email){
				return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)
			},
			message: 'El correo ingresado no es valido',
		},
	},
	admin: {
		type: Boolean,
		default: false,
	},
	password: {
		type: String,
		required: [true, "La contaseña es requerida."],
		trim: true
	},
	verifyHash: {
		type: String,
		required: false,
		trim: true,
		unique: true
	},
	created: {
		type: Date,
		default: Date.now
	}
})

const User = mongoose.model("User", userSchema)

module.exports = User