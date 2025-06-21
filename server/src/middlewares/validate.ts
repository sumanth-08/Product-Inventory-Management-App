import { body } from "express-validator";

export const validateProductInput = [
  body("name").notEmpty().withMessage("Product name is required").isLength({ min: 3 }).withMessage("Name length should be at least 3 char"),
  body("price").notEmpty().withMessage("Price is required").isFloat({ min: 1 }).withMessage("Amount must be postive number"),
  body("category").notEmpty().withMessage("Category is required"),
  body("stock").notEmpty().withMessage("Stock is required").isInt({ min: 0 }).withMessage("Stcok is incorrect"),
];
