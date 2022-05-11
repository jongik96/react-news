import { takeEvery, put, call } from "redux-saga/effects";
import {
  fetchNews,
  fetchAsk,
  fetchJobs,
  fetchItem,
  fetchUser,
} from "../../api";
import allAction from "../actions/index";

function* getUserInfo(action) {
  console.log("유저정보 불러오기 시도");
  try {
    const id = action.id;
    const { data } = yield call(fetchUser, id);
    console.log(data);
    yield put(allAction.getUserInfoSuccess(data));
  } catch (error) {
    yield put(allAction.getUserInfoFail(error));
  }
}

function* getNewsList() {
  console.log("뉴스리스트 불러오기 시도");
  try {
    const { data } = yield call(fetchNews);
    console.log(data);
    yield put(allAction.getNewsListSuccess(data));
  } catch (error) {
    yield put(allAction.getNewsListFail(error));
  }
}

function* getAskList() {
  console.log("질문리스트 불러오기 시도");
  try {
    const { data } = yield call(fetchAsk);
    console.log(data);
    yield put(allAction.getAskListSuccess(data));
  } catch (error) {
    yield put(allAction.getAskListFail(error));
  }
}

function* getAskInfo(action) {
  console.log(action);
  try {
    const { data } = yield call(fetchItem, action.meta);

    yield put(allAction.getAskInfoSuccess(data));
  } catch (error) {
    yield put(allAction.getAskInfoFail(error));
  }
}

function* getJobsList() {
  console.log("직업리스트 불러오기 시도");
  try {
    const { data } = yield call(fetchJobs);
    console.log(data);
    yield put(allAction.getJobsListSuccess(data));
  } catch (error) {
    yield put(allAction.getJobsListFail(error));
  }
}
function* rootSaga() {
  yield takeEvery("GET_ASKLIST", getAskList);
  yield takeEvery("GET_NEWSLIST", getNewsList);
  yield takeEvery("GET_JOBSLIST", getJobsList);
  yield takeEvery("GET_ASKINFO", getAskInfo);
  yield takeEvery("GET_USERINFO", getUserInfo);
}

export default rootSaga;
