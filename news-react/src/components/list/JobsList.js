import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allAction from "../../modules/actions/index.js";

function JobsList() {
  const dispatch = useDispatch();
  const jobsList = useSelector((state) => state.jobsList);
  useEffect(() => {
    dispatch(allAction.getJobsList());
  }, []);
  return (
    <ul style={{ padding: "0", margin: "0" }}>
      {jobsList &&
        jobsList.map((jobsItem) => (
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

// import React, { useEffect, useState } from "react";
// import { fetchJobs } from "../../api/index";
// function JobsList() {
//   const [jobsList, setJobsList] = useState([]);
//   useEffect(() => {
//     async function getJobsList() {
//       // You can await here
//       const response = await fetchJobs();
//       // ...
//       setJobsList(response.data);
//     }
//     getJobsList();
//   }, []);
//   return (
//     <ul style={{ padding: "0", margin: "0" }}>
//       {jobsList.map((jobsItem) => (
//         <li
//           style={{
//             listStyle: "none",
//             display: "flex",
//             alignItems: "center",
//             borderBottom: "1px solid #eee",
//           }}
//           key={jobsItem.id}
//         >
//           <div
//             style={{
//               width: "80px",
//               height: "60px",
//               color: "#61DBFB",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             {jobsItem.points || 0}
//           </div>
//           <div>
//             <p>
//               {jobsItem.title}
//               <span>
//                 {jobsItem.domain} {jobsItem.user}
//               </span>
//             </p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default JobsList;
