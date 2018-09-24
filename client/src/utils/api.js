import axios from "axios";

const API = {
    getProductDetails: (id) => {
      return axios.get("/api/products/" + id);
    },

    getAllProducts: () => {
      return axios.get("/api/products")
    }
}

export default API;