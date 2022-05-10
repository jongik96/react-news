import { selector } from "recoil";
import { fetchAsk, fetchJobs, fetchNews } from "../api";

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
