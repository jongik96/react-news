import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AskView from "./pages/AskView";
import NewsView from "./pages/NewsView";
import JobsView from "./pages/JobsView";
import ToolBar from "./components/ToolBar";
import UserInfo from "./pages/UserInfo";
import AskInfo from "./pages/AskInfo";

function App(props) {
  return (
    <>
      <Router>
        <ToolBar />
        <Routes>
          <Route exact path="/" element={<NewsView />} />
          <Route path="/news" element={<NewsView />} />
          <Route path="/ask" element={<AskView />} />
          <Route path="/jobs" element={<JobsView />} />
          <Route path="/userInfo/:id" element={<UserInfo />} />
          <Route path="/askInfo/:id" element={<AskInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
