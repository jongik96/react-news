export const getAskList = () => {
  return {
    type: "GET_ASKLIST",
  };
};

export const getAskListSuccess = (askList) => {
  return {
    type: "GET_ASKLIST_SUCCESS",
    askList: askList,
  };
};

export const getAskListFail = (error) => {
  return {
    type: "GET_ASKLIST_FAIL",
    error,
  };
};
