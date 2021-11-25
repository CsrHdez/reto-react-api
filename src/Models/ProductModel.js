const Product = require("../Schemas/ProductSchema")

const getAll = async () => {
	return await Product.find({})
}

const getByType = async type => {
	return await Product.find({type}).exec()
}

const create = async productData => {
	const newProduct = new Product(productData)
	return await newProduct.save()
}

const update = async (id, productData) => {
	if ( !id || !productData ) return false
	return await Product.findByIdAndUpdate(id, productData).exec()
}

const del = async id => await Product.findByIdAndDelete(id).exec()

const search = async filters => {
	if ( typeof filters != "object" ) return false
	return await Product().find(filters).exec()
}

module.exports = {
	getAll,
	getByType,
	create,
	update,
	del,
	search
}