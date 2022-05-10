export const getNewsList = () => {
  return {
    type: "GET_NEWSLIST",
  };
};

export const getNewsListSuccess = (newsList) => {
  return {
    type: "GET_NEWSLIST_SUCCESS",
    newsList: newsList,
  };
};

export const getNewsListFail = (error) => {
  return {
    type: "GET_NEWSLIST_FAIL",
    error,
  };
};
