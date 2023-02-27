import apiClient from "../apiClient";

//MEMO: 프로덕트 여러개(리스트)
export const getProducts = () => {
  return apiClient.get("/products");
};

//MEMO: 프로덕트 하나 (상세)
export const getProduct = (id) => {
  return apiClient.get(`/products/${id}`);
};

export const searchProduct = (params) => {
  return apiClient.get("/products/search", {
    params,
  });
};

export const createProduct = (body) => {
  return apiClient.post("/products/add", body);
};
