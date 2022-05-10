const jobsList = (state = [], action) => {
  switch (action.type) {
    case "GET_JOBSLIST_SUCCESS":
      return [...state, ...action.jobsList];
    case "GET_JOBSLIST_FAIL":
      return [...state, action.error];
    default:
      return state;
  }
};

export default jobsList;
