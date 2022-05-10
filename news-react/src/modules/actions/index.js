import {
  getNewsList,
  getNewsListSuccess,
  getNewsListFail,
} from "./newsActions";

import { getAskListSuccess, getAskListFail, getAskList } from "./askAction";

import { getJobsListSuccess, getJobsListFail, getJobsList } from "./jobsAction";

const allAction = {
  getNewsList,
  getNewsListFail,
  getNewsListSuccess,
  getAskList,
  getAskListFail,
  getAskListSuccess,
  getJobsList,
  getJobsListFail,
  getJobsListSuccess,
};

export default allAction;
