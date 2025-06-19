import express from "express";
import "dotenv/config";
import { getDbConnection } from "./configs/dbConnection";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
getDbConnection();

app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
