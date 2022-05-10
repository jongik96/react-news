import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allAction from "../../modules/actions/index.js";

function AskList() {
  const dispatch = useDispatch();
  const askList = useSelector((state) => state.askList);
  useEffect(() => {
    dispatch(allAction.getAskList());
  }, []);
  return (
    <ul style={{ padding: "0", margin: "0" }}>
      {askList &&
        askList.map((askItem) => (
          <li
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #eee",
            }}
            key={askItem.id}
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
              {askItem.points || 0}
            </div>
            <div>
              <p>
                {askItem.title}
                <span>
                  {askItem.domain} {askItem.user}
                </span>
              </p>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default AskList;

// import React, { useEffect, useState } from "react";
// import { fetchAsk } from "../../api/index.js";
// function AskList() {
//   const [askList, setAskList] = useState([]);
//   useEffect(() => {
//     async function getAskList() {
//       // You can await here
//       const response = await fetchAsk();
//       // ...
//       setAskList(response.data);
//     }
//     getAskList();
//   }, []);
//   return (
//     <ul style={{ padding: "0", margin: "0" }}>
//       {askList.map((askItem) => (
//         <li
//           style={{
//             listStyle: "none",
//             display: "flex",
//             alignItems: "center",
//             borderBottom: "1px solid #eee",
//           }}
//           key={askItem.id}
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
//             {askItem.points || 0}
//           </div>
//           <div>
//             <p>
//               {askItem.title}
//               <span>
//                 {askItem.domain} {askItem.user}
//               </span>
//             </p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default AskList;
