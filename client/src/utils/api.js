import axios from "axios";

const API = {
    getProductDetails: (id) => {
      console.log(id)
      return axios.get("/api/products/" + id);
    },

    getAllProducts: () => {
      return axios.get("/api/products")
    },

    getProductByCategory: (category) => {
      return axios.get("/api/products/category/" + category);
    },

    getProductBySubcategory: (subcategory) => {
      return axios.get("/api/products/subcategory/" + subcategory);
    }
}

export default API;