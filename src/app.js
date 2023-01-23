require("dotenv").config();

const express = require("express");
const cors = require("cors");
const error = require("./middleware/error");

const app = express();

app.use(cors);
app.use(express.json);
app.use(express.urlencoded({ extended: false }));

app.use(error);
const port = process.env.PORT || "8000";
app.listen(port, () => console.log(`server running on port: ${port}`));
