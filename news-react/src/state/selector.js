import { selector } from "recoil";
import { fetchAsk, fetchJobs, fetchNews } from "../api";
import { pathNameState } from "./atoms";

// });

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
