const api: string = import.meta.env.VITE_APP_API!;

export const APIS = {
  ADMIN: `${api}/admins`,
  USER: `${api}/users`,
};
