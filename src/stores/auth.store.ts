import { create } from "zustand";

type AuthStore = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
};

export const useAuthStore = create<AuthStore>()((set) => ({
  email: "",
  setEmail: (email) => set({ email }),
  password: "",
  setPassword: (password) => set({ password }),
}));
