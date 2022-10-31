import express from "express";
require("dotenv").config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${process.env.PORT}`);
});
