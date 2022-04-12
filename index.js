const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mogoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();
const app = express();

mogoose.connect(process.env.MONGODB_URL, () => {
    console.log("CONNECTED TO MONGO DB");
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);

app.listen(8000, () => {
    console.log("Sever is running")
})