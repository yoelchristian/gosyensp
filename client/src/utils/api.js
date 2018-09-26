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
      console.log(category)
      return axios.get("/api/products/" + category);
    }
}

export default API;