import apiClient from "../apiClient";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJreW9vbmdkZXYifQ.iNm6l02_kISnz2dVON6M0x3mvSZaB3KBAYB8EUe1vKM";
const refreshToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJreW9vbmdkZXYifQ.EbK_HszlJ3spZYYXzeC1DHpddO3QF1XXudd2dRKwvEU";

//MEMO: 프로덕트 여러개(리스트)
export const getProducts = () => {
  return apiClient.get("/products", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

//MEMO: 프로덕트 하나 (상세)
export const getProduct = (id) => {
  return apiClient.get(`/products/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const refresh = () => {
  return apiClient.post("/auth/refresh", {
    accessToken,
    refreshToken,
  });
};

export const login = (userId, password) => {
  return apiClient.post(`/auth/login`, {
    userId,
    password,
  });
};
