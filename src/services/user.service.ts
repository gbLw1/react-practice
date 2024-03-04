import api from "./api-client";

export const getUser = async (userName: string) =>
  api.get(`/users/${userName}`);
