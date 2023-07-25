const express = require("express");
const dbConnection = require("./Database/index.js");
const { PORT } = require("./config/index.js");
const router = require("./routes/index.js");
const errorHandler = require("./middlewares/errorHandler.js");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

dbConnection();

app.use(express.json());

app.use(router);

app.use(errorHandler);

app.listen(PORT, console.log(`Backend is running on port: ${PORT}`));
