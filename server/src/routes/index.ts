import express from "express";
import productRouter from "./productRoutes";

const routes = (app: express.Application) => {
  app.use(express.json());
  app.use("/product", productRouter);
};

export default routes;
