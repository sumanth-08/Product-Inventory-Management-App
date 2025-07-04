import express from "express";
import { addProducts, deleteProducts, listProducts, updateProduct } from "../controllers/product";
import { validateProductInput } from "../middlewares/validate";
import { posthogBulkDelete } from "../controllers/posthogBulkDelete";
const productRouter = express.Router();

productRouter.post("/create", validateProductInput, addProducts);
productRouter.get("/list", listProducts);
productRouter.put("/update/:id", validateProductInput, updateProduct);
productRouter.delete("/delete/:id", deleteProducts);

// posthog test
productRouter.delete("/posthog/delete", posthogBulkDelete)

export default productRouter;
