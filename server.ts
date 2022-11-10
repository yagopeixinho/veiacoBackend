import "express-async-errors";
import express from "express";
import { errorMiddleware } from "./src/middlewares/error";
import { router } from "./src/routes";

const cors = require("cors");

require("dotenv").config();

const app = express();

// App config
app.use(express.json());
app.use(cors());
app.use(router);

// Global middlewares
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${process.env.PORT}`);
});
