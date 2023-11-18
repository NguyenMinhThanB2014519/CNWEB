const express = require("express");
const cors = require("cors");
const contactsRouter = require("./routes/contacts.router");
const {
  resourceNotFound,
  handleError,
} = require("./controllers/errors.controller");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Application contactBooks",
  });
});
app.use("/api/contacts", contactsRouter);
app.use(resourceNotFound);
app.use(handleError);

module.exports = app;
