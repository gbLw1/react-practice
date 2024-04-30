import { create } from "zustand";

type RouteHistoryStore = {
  redirect: string | null;
  setRedirect: (redirect: string | null) => void;
};

export const useRouteHistoryStore = create<RouteHistoryStore>()((set) => ({
  redirect: null,
  setRedirect: (redirect) => set({ redirect }),
}));
