import axios from "axios";
import { refreshToken } from "../services/auth";

function getToken() {
  let token = localStorage.getItem("_ship_n_logic") ?? null;
  return token;
}

let AxiosApi = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
});

AxiosApi.defaults.headers.common = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
};

AxiosApi.interceptors.response.use(
  function (response) {
    console.log(" ==>", response.status);

    let datares = response.data;
    if (typeof datares == "object") {
      if (
        Number(datares?.status) === 400 ||
        Number(datares?.status) === 401 ||
        Number(datares?.status) === 500
      ) {
        return Promise.reject(response);
      }
    }

    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const _refreshToken = localStorage.getItem("_ship_n_logic_refresh");

      refreshToken({ refresh_token: _refreshToken }).then((res: any) => {
        const newAccessToken = res.data.data.access_token;

        AxiosApi.defaults.headers["Authorization"] =
          "Bearer " + res.data.data.access_token;
        window.localStorage.setItem(
          "_ship_n_logic",
          res.data.data.access_token
        );

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        // Retry the original request with the new token
        return AxiosApi(originalRequest);
      });
    }
    return Promise.reject(error);
  }
);

AxiosApi.interceptors.request.use(function (config) {
  if (getToken()) {
    config.headers.Authorization = `Bearer ${getToken()}`;
  }

  return config;
});

export default AxiosApi;
