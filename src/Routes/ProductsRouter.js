const express = require("express")
const Product = require("../Models/ProductModel")
const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		const allProducts = await Product.getAll()
		res.json({
			ok: true,
			message: "All products",
			payload: allProducts
		})
	} catch (err) {
		next(err)
	}
})

router.get("/atoles", async (req, res, next) => {
	try {
		const allAtoles = await Product.getByType('Atole')
		res.json({
			ok: true,
			message: "all atoles",
			payload: allAtoles
		})
	} catch (err) {
		next(err)
	}
})

router.get("/tamales", async (req, res, next) => {
	try {
		const allAtoles = await Product.getByType('Tamal')
		res.json({
			ok: true,
			message: "all atoles",
			payload: allAtoles
		})
	} catch (err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	const { id } = req.params
	try {
		const product = await Product.getById(id)
		res.json({
			ok: true,
			message: "Product find",
			payload: product
		})
	} catch (err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	const { productData } = req.body
	productData.createdBy = "619fda67a455b496579f075a"
	try {
		const newProduct = await Product.create(productData)
		res.json({
			ok: true,
			message: "Product created",
			payload: newProduct,
		})
	} catch (err) {
		next(err)
	}
})

router.patch("/:id", async (req, res, next) => {
	const { id } = req.params
	const { productDataUpdate } = req.body
	try {
		const productUpdate = await Product.update(id, productDataUpdate)
		res.json({
			ok: true,
			message: "Product updated",
			payload: productUpdate
		})
	} catch (err) {
		next(err)
	}
})

router.delete("/:id", async (req, res, next) => {
	const { id } = req.params
	try {
		const productDelete = await Product.del(id)
		res.json({
			ok: true,
			message: "Product deleted",
			payload: productDelete
		})
	} catch (err) {
		next(err)
	}
})


module.exports = router