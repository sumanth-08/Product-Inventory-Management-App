import { Product } from "../models/productModel";
import { ProductType } from "../utils/types";

class ProductService {
  public static async addProduct(product: ProductType) {
    return await Product.create({
      name: product.name,
      price: product.price,
      category: product.category,
      stock: product.stock,
    });
  }

  public static async listProduct() {
    return await Product.find().sort({ name: 1 });
  }

  public static async updateProduct(id: string, product: ProductType) {
    return await Product.updateOne(
      { _id: id },
      {
        $set: {
          name: product.name,
          price: product.price,
          category: product.category,
          stock: product.stock,
        },
      }
    );
  }

  public static async deleteProduct(id: string) {
    return await Product.deleteOne({ _id: id });
  }
}

export default ProductService;
