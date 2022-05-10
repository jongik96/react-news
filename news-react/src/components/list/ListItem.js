import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { pathNameState } from "../../state/atoms";
import { getItemList } from "../../state/selector";

export function ListItem() {
  const { pathname } = useLocation();
  const [pathName, setPathName] = useRecoilState(pathNameState);
  const ItemList = useRecoilValue(getItemList);
  useEffect(() => {
    setPathName(pathname);
  });
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
