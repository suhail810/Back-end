const express = require("express")
const app = express()
const connection = require("./config/mongoose.connection.js")
const ownersRouter = require("./routes/ownersRouter.js")
const productsRouter = require("./routes/productsRouter.js")
const usersRouter = require("./routes/usersRouter.js")

const cookieParser = require("cookie-parser");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs")

app.get("/owner", ownersRouter)
app.get("/products", productsRouter)
app.get("/user", usersRouter)

app.listen(8000);