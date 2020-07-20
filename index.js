require('dotenv').config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const { red } = require("./chalk_variables/chalk_variables")


const app = express()
const port = PROCESS.ENV.SERVER_POST || 3000

//importing Routes
const userRouter = require("./Routes/userRoutes")

//middlewares
app.use(cors())
app.use(json.express())
app.use(morgan("dev"))
app.use(cookieParser())

//Using Routes
app.use("/api", userRouter)

app.listen(port, console.log(red(`Port is running on port ${port}`)))