import mongoose from "mongoose";

export const getDbConnection = () => {
  mongoose
    .connect(process.env.DATABASE_URL as string, {dbName: "inventory"})
    .then(() => {
      console.log("Database connected successful");
    })
    .catch((err) => {
      console.log("Database failed to connect", err);
    });
};
