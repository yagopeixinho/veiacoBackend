import "express-async-errors";
import express from "express";
import { errorMiddleware } from "./src/middlewares/error";
import { router } from "./src/routes";

require("dotenv").config();

const app = express();
app.use(express.json());

// Router config
app.use(router);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${process.env.PORT}`);
});
