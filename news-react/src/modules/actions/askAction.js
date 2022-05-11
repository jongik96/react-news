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

export const getAskInfo = (id) => {
  return {
    type: "GET_ASKINFO",
    meta: id,
  };
};

export const getAskInfoFail = (error) => {
  return {
    type: "GET_ASKINFO_FAIL",
    error,
  };
};

export const getAskInfoSuccess = (askInfo) => {
  return {
    type: "GET_ASKINFO_SUCCESS",
    askInfo: askInfo,
  };
};
