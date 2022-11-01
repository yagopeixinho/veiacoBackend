import express from "express";
import { router } from "./src/routes";
require("dotenv").config();

const app = express();
app.use(express.json());

// Router config
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${process.env.PORT}`);
});
