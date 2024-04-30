import { AuthModel } from "../interfaces/auth.model";

export interface AuthValidation {
  hasToken: boolean;
  expired: boolean;
}

function tokenIsExpired(tokenExpirationDate: string): boolean {
  const currentDate = new Date();
  const expiredDate = new Date(tokenExpirationDate);
  return currentDate > expiredDate;
}

export const useAuthCheck = (): AuthValidation => {
  const data: AuthValidation = { expired: false, hasToken: false };
  const authCache: string | null = sessionStorage.getItem("auth");

  if (!authCache) {
    data.hasToken = false;
    data.expired = true;
    return data;
  }

  data.hasToken = true;

  const token: AuthModel = JSON.parse(authCache);
  const expired: boolean = tokenIsExpired(token.expiresIn);

  if (expired) {
    sessionStorage.clear();
    data.expired = true;
    return data;
  } else {
    data.expired = false;
    return data;
  }
};