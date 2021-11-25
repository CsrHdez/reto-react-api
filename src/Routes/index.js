const ProductsRouter = require("./ProductsRouter")
const AuthRouter = require("./AuthRouter")
const AccountRouter = require("./AccountRouter")

const Routes = app => {
	app.use("/", [AuthRouter])
	app.use("/account", AccountRouter)
	app.use("/products", ProductsRouter)
}

module.exports = Routes