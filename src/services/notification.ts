import AxoisApi from "../api";
import { APIS } from "../api/api";

export const getNotification = () => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.USER}/notifications`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
