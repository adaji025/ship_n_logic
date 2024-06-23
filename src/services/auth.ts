import axios from "axios";
import AxoisApi from "../api";
import { APIS } from "../api/api";

export const userSignUp = (data: any) => {
  return new Promise((resolve, reject) => {
    AxoisApi.post(`${APIS.USER}`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const userLogin = (data: any) => {
  return new Promise((resolve, reject) => {
    AxoisApi.post(`${APIS.USER}/login`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const refreshToken = (data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${APIS.USER}/token`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const adminLogin = (data: any) => {
  return new Promise((resolve, reject) => {
    AxoisApi.post(`${APIS.ADMIN}/login`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
