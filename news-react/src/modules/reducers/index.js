import newsList from "./newsReducer";
import askList from "./askReducer";
import jobsList from "./jobsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  newsList,
  askList,
  jobsList,
});

export default rootReducer;
