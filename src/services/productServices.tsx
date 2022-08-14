import axios from "axios";
import React from "react";

export const PRODUCT_API = "https://fakestoreapi.com";

export default class ProductService {
  async getAllProducts() {
    let response = await axios.get(PRODUCT_API + "/products");
    return response.data;
  }
  async getSingleProduct(id: any) {
    let response = await axios.get(PRODUCT_API + "/products/" + id);
    return response.data;
  }
  async getProductsCode() {
    let response = await axios.get(PRODUCT_API + "/products");
    return response;
  }
}
