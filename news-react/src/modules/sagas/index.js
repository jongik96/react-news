import { takeEvery, put, call } from "redux-saga/effects";
import { fetchNews, fetchAsk, fetchJobs } from "../../api";
import allAction from "../actions/index";

function* getNewsList() {
  console.log("뉴스리스트 불러오기 성공");
  try {
    const { data } = yield call(fetchNews);
    console.log(data);
    yield put(allAction.getNewsListSuccess(data));
  } catch (error) {
    yield put(allAction.getNewsListFail(error));
  }
}

function* getAskList() {
  console.log("질문리스트 불러오기 성공");
  try {
    const { data } = yield call(fetchAsk);
    console.log(data);
    yield put(allAction.getAskListSuccess(data));
  } catch (error) {
    yield put(allAction.getAskListFail(error));
  }
}

function* getJobsList() {
  console.log("직업리스트 불러오기 성공");
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
}

export default rootSaga;
