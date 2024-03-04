import { create } from "zustand";

type MultiStepForm = {
  name: string;
  email: string;
  age: number;
};

export const useMultiStepFormStore = create<MultiStepForm>()((set) => ({
  name: "",
  email: "",
  age: 0,
}));
