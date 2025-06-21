import express, { Request, Response } from "express";
import "dotenv/config";
import { getDbConnection } from "./configs/dbConnection";
import routes from "./routes/index";
import cors from "cors";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
getDbConnection();
routes(app);

app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
