const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
	res.json({
		ok: true,
		message: "All products",
		payload: [
			{name: "Proucto 1"}
		]
	})
})

router.get("/atoles", (req, res) => {
	res.json({
		ok: true,
		message: "All atoles",
		payload: [
			{name: "atole"},
			{name: "atole 2"}
		]
	})
})

router.get("/tamales", (req, res) => {
	res.json({
		ok: true,
		message: "All tamales",
		payload: [
			{name: "Tamal verde"},
			{name: "Tamlal rojo"}
		]
	})
})

router.post("/", (req, res) => {
	const { productData } = req.body
	res.json({
		ok: true,
		message: "Product add successfuly",
		payload: {
			id: 1,
			...productData
		}
	})
})

router.patch("/:id", (req, res) => {
	const { id } = req.params
	const { productDataUpdate } = req.body
	res.json({
		ok: true,
		message: "Product updated successfuly",
		payload: {
			id,
			...productDataUpdate
		}
	})
})

router.delete("/:id", (req, res) => {
	const { id } = req.params
	res.json({
		ok: true,
		message: "Product deleted successfuly",
		payload: {
			id
		}
	})
})


module.exports = router