import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchAsk, fetchJobs, fetchNews } from "../../api";

export function ListItem() {
  const { pathname } = useLocation();
  const [ItemList, setItemList] = useState([]);

  const fetchList = async () => {
    if (pathname === "/news" || pathname === "/") {
      const newsList = await fetchNews();
      setItemList(newsList.data);
    } else if (pathname === "/ask") {
      const askList = await fetchAsk();
      setItemList(askList.data);
    } else if (pathname === "/jobs") {
      const jobsList = await fetchJobs();
      setItemList(jobsList.data);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <ul style={{ padding: "0", margin: "0" }}>
        {ItemList.map((Item) => (
          <li
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #eee",
            }}
            key={Item.id}
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
              {Item.points || 0}
            </div>
            <div>
              <p style={{ margin: "0" }}>
                {/* domain 있을 때 */}
                {Item.domain && (
                  <span>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href={Item.url}
                    >
                      {Item.title}
                    </a>
                    <small>{Item.domain}</small>
                  </span>
                )}
                {/* domain 없을 때 */}
                {!Item.domain && (
                  <span>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to={{ pathname: `/askInfo/${Item.id}` }}
                    >
                      {Item.title}
                    </Link>
                    <small>
                      <a href={Item.url}>{Item.domain}</a>
                    </small>
                  </span>
                )}
                {/* user 정보 있으면 표시 */}
                {Item.user && (
                  <small>
                    {" "}
                    by{" "}
                    <Link to={{ pathname: `/userInfo/${Item.user}` }}>
                      {Item.user}
                    </Link>
                  </small>
                )}
                {/* 작성시간 있으면 표시 */}
                {Item.time_ago && <small> {Item.time_ago}</small>}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
