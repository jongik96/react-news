import React from "react";
import { Link } from "react-router-dom";
function ToolBar() {
  return (
    <div
      style={{
        backgroundColor: "#61DBFB",
        padding: "8px 8px 8px 25px",
        fontWeight: "700",
      }}
    >
      <Link to="/news" style={{ textDecoration: "none", margin: "0 5px" }}>
        News
      </Link>{" "}
      |{" "}
      <Link to="/ask" style={{ textDecoration: "none", margin: "0 5px" }}>
        Ask
      </Link>{" "}
      |
      <Link to="/jobs" style={{ textDecoration: "none", margin: "0 5px" }}>
        {" "}
        Jobs
      </Link>
    </div>
  );
}

export default ToolBar;
