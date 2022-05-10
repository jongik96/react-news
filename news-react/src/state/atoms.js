import { atom } from "recoil";

export const newsListState = atom({
  key: "newsListState",
  default: [],
});

export const askListState = atom({
  key: "askListState",
  default: [],
});

export const jobsListState = atom({
  key: "jobsListState",
  default: [],
});
