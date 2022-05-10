import { atom } from "recoil";

export const pathNameState = atom({
  key: "pathNameState",
  default: "/",
});

export const askIDState = atom({
  key: "askIDState",
  default: 0,
});

export const userIDState = atom({
  key: "userIDState",
  default: 0,
});
