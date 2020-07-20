require('dotenv').config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const { red } = require("./chalk_variables/chalk_variables")

const app = express()
const port = process.env.SERVER_PORT || 3000

//importing Routes
const userRouter = require("./Routes/userRoutes")
const indexRouter = require("./Routes/indexRoute")

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))
app.use(cookieParser())

//Using Routes
app.use("/api", userRouter)

app.get("/", (req, res) => {
    res.send
        ("Express Template - Git repo: https://github.com/blanck1945/express_template.git")
})

app.listen(port, console.log(red(`Port is running on port ${port}`)))