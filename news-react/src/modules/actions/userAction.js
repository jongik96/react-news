export const getUserInfo = (id) => {
  return {
    type: "GET_USERINFO",
    id: id,
  };
};

export const getUserInfoSuccess = (userInfo) => {
  return {
    type: "GET_USERINFO_SUCCESS",
    userInfo: userInfo,
  };
};

export const getUserInfoFail = (error) => {
  return {
    type: "GET_USERINFO_FAIL",
    error,
  };
};
