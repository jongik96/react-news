const newsList = (state = [], action) => {
  switch (action.type) {
    case "GET_NEWSLIST_SUCCESS":
      return [...state, ...action.newsList];
    case "GET_NEWSLIST_FAIL":
      return [...state, action.error];
    default:
      return state;
  }
};

export default newsList;
