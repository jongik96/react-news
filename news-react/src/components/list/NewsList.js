import React from "react";
import { useRecoilValue } from "recoil";
import { getNewsList } from "../../state/selector.js";
function NewsList() {
  const newsList = useRecoilValue(getNewsList);

  return (
    <ul style={{ padding: "0", margin: "0" }}>
      {newsList.map((newsItem) => (
        <li
          style={{
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #eee",
          }}
          key={newsItem.id}
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
