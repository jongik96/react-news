import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allAction from "../../modules/actions/index.js";

function NewsList() {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.newsList);
  useEffect(() => {
    dispatch(allAction.getNewsList());
  }, []);
  return (
    <ul style={{ padding: "0", margin: "0" }}>
      {newsList &&
        newsList.map((newsItem, index) => (
          <li
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #eee",
            }}
            // key={newsItem.id}
            key={index}
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
              {newsItem.points || 0}
            </div>
            <div>
              <p>
                {newsItem.title}
                <span>
                  {newsItem.domain} {newsItem.user}
                </span>
              </p>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default NewsList;

// import React, { useEffect, useState } from "react";

// import { fetchNews } from "../../api/index.js";
// function NewsList() {
//   const [newsList, setNewsList] = useState([]);

//   useEffect(() => {
//     async function getNewsList() {
//       // You can await here
//       const response = await fetchNews();
//       // ...
//       setNewsList(response.data);
//     }
//     getNewsList();
//   }, []);
//   return (
//     <ul style={{ padding: "0", margin: "0" }}>
//       {newsList.map((newsItem) => (
//         <li
//           style={{
//             listStyle: "none",
//             display: "flex",
//             alignItems: "center",
//             borderBottom: "1px solid #eee",
//           }}
//           key={newsItem.id}
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
//             {newsItem.points || 0}
//           </div>
//           <div>
//             <p>
//               {newsItem.title}
//               <span>
//                 {newsItem.domain} {newsItem.user}
//               </span>
//             </p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default NewsList;
