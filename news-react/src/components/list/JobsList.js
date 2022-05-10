import React from "react";
import { useRecoilValue } from "recoil";
import { getJobsList } from "../../state/selector";

function JobsList() {
  const jobsList = useRecoilValue(getJobsList);
  return (
    <ul style={{ padding: "0", margin: "0" }}>
      {jobsList.map((jobsItem) => (
        <li
          style={{
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #eee",
          }}
          key={jobsItem.id}
        >
          <div
            style={{
              width: "80px",
              height: "60px",
              color: "#61DBFB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {jobsItem.points || 0}
          </div>
          <div>
            <p>
              {jobsItem.title}
              <span>
                {jobsItem.domain} {jobsItem.user}
              </span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default JobsList;
