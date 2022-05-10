export const getJobsList = () => {
  return {
    type: "GET_JOBSLIST",
  };
};

export const getJobsListSuccess = (jobsList) => {
  return {
    type: "GET_JOBSLIST_SUCCESS",
    jobsList: jobsList,
  };
};

export const getJobsListFail = (error) => {
  return {
    type: "GET_JOBSLIST_FAIL",
    error,
  };
};
