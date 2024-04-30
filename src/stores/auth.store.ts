import { create } from "zustand";

type AuthStore = {
  user: string;
  password: string;
  step: number;
};

export const useAuthStore = create<AuthStore>()((set) => ({
  user: "",
  password: "",
  step: 0,
  setUser: (user: string) => set({ user }),
  setPassword: (password: string) => set({ password }),
  setStep: (step: number) => set({ step }),
}));
