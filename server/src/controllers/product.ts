import { Request, Response } from "express";
import ProductService from "../services/productService";
import { ProductType } from "../utils/types";
import { send, setResponseMsg } from "../utils/responseUtils";
import { RESPONSE } from "../utils/responseMsg";
import { validationResult } from "express-validator";

export const addProducts = async (req: Request, res: Response): Promise<any> => {
  try {
    const products: ProductType = req.body;

    const inputError = validationResult(req);
    if (!inputError.isEmpty()) {
      return send(res, setResponseMsg(RESPONSE.VALIDATOR, inputError.array()[0].msg));
    }

    await ProductService.addProduct(products);
    return send(res, RESPONSE.SUCCESS);
  } catch (err) {
    return send(res, RESPONSE.UNKNOWN);
  }
};

export const listProducts = async (req: Request, res: Response): Promise<any> => {
  try {
    const data = await ProductService.listProduct();
    return send(res, RESPONSE.SUCCESS, data);
  } catch (err) {
    return send(res, RESPONSE.UNKNOWN);
  }
};

export const updateProduct = async (req: Request, res: Response): Promise<any> => {
  try {
    const products: ProductType = req.body;
    const id: string = req.params.id;

    const inputError = validationResult(req);
    if (!inputError.isEmpty()) {
      return send(res, setResponseMsg(RESPONSE.VALIDATOR, inputError.array()[0].msg));
    }

    await ProductService.updateProduct(id, products);
    return send(res, RESPONSE.SUCCESS);
  } catch (err) {
    return send(res, RESPONSE.UNKNOWN);
  }
};

export const deleteProducts = async (req: Request, res: Response): Promise<any> => {
  try {
    const id: string = req.params.id;

    await ProductService.deleteProduct(id);
    return send(res, RESPONSE.SUCCESS);
  } catch (err) {
    return send(res, RESPONSE.UNKNOWN);
  }
};
