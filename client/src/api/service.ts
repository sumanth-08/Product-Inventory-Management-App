import axios from "axios";
import { API_CONFIG } from "./config";
import type { Product } from "./types";
const url = API_CONFIG.BASE_URL;

class ProductAPI {
  public async postService(endpoint: string, data: Product) {
    try {
      const res = await axios.post(`${url}${endpoint}`, data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  public async getService(endpoint: string) {
    try {
      const res = await axios.get(`${url}${endpoint}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  public async putService(endpoint: string, data: Product) {
    try {
      const res = await axios.put(`${url}${endpoint}`, data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  public async deleteService(endpoint: string) {
    try {
      const res = await axios.delete(`${url}${endpoint}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export const productAPI = new ProductAPI();
