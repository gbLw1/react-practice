import api from "./api-client";

export const getUserRepos = async (userName: string) =>
  api.get(`/users/${userName}/repos`);
