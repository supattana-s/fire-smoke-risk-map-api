require("dotenv").config();

const express = require("express");
const cors = require("cors");
const error = require("./middleware/error");
const statusesRoute = require("./routes/statusesRoute");

// const { sequelize } = require("./models");
// sequelize.sync({ force: true });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/status", statusesRoute);

app.use(error);
const port = process.env.PORT || "8000";
app.listen(port, () => console.log(`server running on port: ${port}`));
