import axios from "axios";

// CUANDO TENGA LA API LISTA DE LA CONEXION A LA BASE DE DATOS CONECTO AQUI LA RUTA DEL BACKEND
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("AUTH_TOKEN"); //TODOO: CUANDO VAYA A GUARDAR EL TOKEN TENGO QUE CAMBIARLO AL LOCAL STORAGE EN EL BACKEND
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});



// Create separate axios instances for different API endpoints
// export const apiUser = axios.create({
//   baseURL: import.meta.env.VITE_API_User_URL,
// });
// export const apiProdBot = axios.create({
//   baseURL: import.meta.env.VITE_API_Prod_Bot_URL,
// });
// export const apiProdRepu = axios.create({
//   baseURL: import.meta.env.VITE_API_Prod_Repu_URL,
// });