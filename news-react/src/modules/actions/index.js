import {
  getNewsList,
  getNewsListSuccess,
  getNewsListFail,
} from "./newsActions";

import {
  getAskListSuccess,
  getAskListFail,
  getAskList,
  getAskInfoSuccess,
  getAskInfoFail,
  getAskInfo,
} from "./askAction";

import { getJobsListSuccess, getJobsListFail, getJobsList } from "./jobsAction";

import { getUserInfoSuccess, getUserInfo, getUserInfoFail } from "./userAction";

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
  getAskInfoSuccess,
  getAskInfoFail,
  getAskInfo,
  getUserInfoSuccess,
  getUserInfo,
  getUserInfoFail,
};

export default allAction;
