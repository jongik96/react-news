import { selector } from "recoil";
import { fetchAsk, fetchItem, fetchJobs, fetchNews, fetchUser } from "../api";
import { askIDState, pathNameState, userIDState } from "./atoms";

export const getItemList = selector({
  key: "getItemList",
  get: async ({ get }) => {
    let path = get(pathNameState);
    let response;
    if (path === "/news" || path === "/") {
      response = await fetchNews();
    } else if (path === "/ask") {
      response = await fetchAsk();
      console.log(response.data);
    } else if (path === "/jobs") {
      response = await fetchJobs();
    }
    return response.data;
  },
});

export const getAskInfo = selector({
  key: "getAskInfo",
  get: async ({ get }) => {
    let askId = get(askIDState);
    let response = await fetchItem(askId);
    return response.data;
  },
});

export const getUserInfo = selector({
  key: "getUserInfo",
  get: async ({ get }) => {
    let userId = get(userIDState);
    let response = await fetchUser(userId);
    return response.data;
  },
});
