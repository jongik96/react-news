import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItem } from "../api";

function AskInfo() {
  const params = useParams().id;
  const [askInfo, setAskInfo] = useState();
  const fetchAskInfo = async () => {
    const response = await fetchItem(params);
    setAskInfo(response.data);
  };
  useEffect(() => {
    fetchAskInfo();
  }, []);
  return (
    <>
      {askInfo && (
        <div>
          <section>
            <p>{askInfo.user}</p>
          </section>
          <section>
            <h2>{askInfo.title}</h2>
            <div
              style={{ border: "ridge", fontSize: "1.3rem", padding: "0.5rem" }}
              dangerouslySetInnerHTML={{ __html: askInfo.content }}
            ></div>
          </section>
          <section>
            <h3>Comments {askInfo.comments_count}</h3>
            {askInfo.comments.map((item) => (
              <li
                style={{
                  listStyle: "none",
                  border: "ridge",
                  padding: "0.5rem",
                }}
                key={item.id}
              >
                <div>{item.user}</div>
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                <div>{item.time_ago}</div>
              </li>
            ))}
          </section>
        </div>
      )}
    </>
  );
}

export default AskInfo;
