const askList = (state = [], action) => {
  switch (action.type) {
    case "GET_ASKLIST_SUCCESS":
      return [...state, ...action.askList];
    case "GET_ASKLIST_FAIL":
      return [...state, action.error];
    default:
      return state;
  }
};

const askInfo = (state = "", action) => {
  switch (action.type) {
    case "GET_ASKINFO_SUCCESS":
      return { ...state, ...action.askInfo };
    case "GET_ASKINFO_FAIL":
      return [...state, action.error];
    default:
      return state;
  }
};

export { askList, askInfo };
