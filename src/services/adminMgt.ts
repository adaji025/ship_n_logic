import AxiosApi from "../api";
import { APIS } from "../api/api";
import { CreateAdminsProps } from "../types/admins";

export const createAdmin = (data: CreateAdminsProps) => {
  return new Promise((resolve, reject) => {
    AxiosApi.post(APIS.ADMIN, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getAdmins = (page: number, size: number) => {
  return new Promise((resolve, reject) => {
    AxiosApi.get(`${APIS.ADMIN}?page=${page}&size=${size}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getUsers = (page: number, size: number) => {
  return new Promise((resolve, reject) => {
    AxiosApi.get(`${APIS.ADMIN}/users?page=${page}&size=${size}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
