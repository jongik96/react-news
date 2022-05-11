const userInfo = (state = [], action) => {
  switch (action.type) {
    case "GET_USERINFO_SUCCESS":
      return { ...state, ...action.userInfo };
    case "GET_USERINFO_FAIL":
      return [...state, action.error];
    default:
      return state;
  }
};

export default userInfo;
