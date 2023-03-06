import axios from "axios";
import config from "../config";

//axios 인스턴스 => 이름 : apiClient, BaseURL : config.API_URL
const apiClient = axios.create({
  baseURL: config.API_URL, // https://codestates.kyoongdev.com
  timeout: 5_000,
});

//request 중간에 가로채는 역할
// apiClient.interceptors.request.use((req) => {
//   return req;
// });

export default apiClient;
