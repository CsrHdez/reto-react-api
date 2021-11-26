const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = {
	name: {
		type: String,
		required: true,
		trim: [true, "El nombre del producto es requerido."],
	},
	image: {
		type: String,
		required: false,
		default: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png"
	},
	type: {
		type: String,
		enum: {
			values: ["Atole", "Tamal"],
			message: 'El {VALUE} no es valido.'
		},
		required: [true, 'Es necesario el tipo de producto.']
	},
	properties: [Schema.Types.Mixed],
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
}

const Product = mongoose.model("Product", productSchema)

module.exports = Product