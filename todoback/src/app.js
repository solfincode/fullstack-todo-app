const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//port
const port = process.env.PORT || 8000;
//app
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
dotenv.config();

//routes
app.use("/", require("./routes/HomeRoutes"));
app.use("/api/v1/todolist", require("./routes/TodoPostRoutes"));

//mongoose
const uri = process.env.URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`serve is listening at ${port}`));
