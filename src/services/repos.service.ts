import { RepoModel } from "../interfaces/repo.model";
import api from "./api-client";

export const getUserRepos = async (userName: string) =>
  api.get<RepoModel[]>(`/users/${userName}/repos`);
