import newsList from "./newsReducer";
import { askList, askInfo } from "./askReducer";
import jobsList from "./jobsReducer";
import userInfo from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  newsList,
  askList,
  jobsList,
  askInfo,
  userInfo,
});

export default rootReducer;
