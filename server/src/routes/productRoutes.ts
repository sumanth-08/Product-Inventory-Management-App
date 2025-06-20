import express from "express";
import { addProducts, deleteProducts, listProducts, updateProduct } from "../controllers/product";
import { validateProductInput } from "../middlewares/validate";
const productRouter = express.Router();

productRouter.post("/create", validateProductInput, addProducts);
productRouter.get("/list", listProducts);
productRouter.put("/update/:id", validateProductInput, updateProduct);
productRouter.delete("/delete/:id", deleteProducts);

export default productRouter;
