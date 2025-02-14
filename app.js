const express = require("express");
const path = require("node:path");
const app = express();

const indexRouter = require("./routes/indexRouter");
const moviesRouter = require("./routes/moviesRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/movies", moviesRouter);
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
