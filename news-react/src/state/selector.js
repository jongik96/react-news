import { selector } from "recoil";
import { fetchAsk, fetchJobs, fetchNews } from "../api";
import { pathNameState } from "./atoms";

export const getNewsList = selector({
  key: "getNewsList",
  get: async () => {
    const response = await fetchNews();
    return response.data;
  },
});

export const getAskList = selector({
  key: "getAskList",
  get: async () => {
    const response = await fetchAsk();
    return response.data;
  },
});

export const getJobsList = selector({
  key: "getJobsList",
  get: async () => {
    const response = await fetchJobs();
    return response.data;
  },
});

export const getItemList = selector({
  key: "getItemList",
  get: async ({ get }) => {
    let path = get(pathNameState);
    let response;
    if (path === "/news" || path === "/") {
      response = await fetchNews();
    } else if (path === "/ask") {
      response = await fetchAsk();
    } else if (path === "/jobs") {
      response = await fetchJobs();
    }
    return response.data;
  },
});
