import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { askIDState } from "../state/atoms";
import { getAskInfo } from "../state/selector";

function AskInfo() {
  const params = useParams().id;
  const [askId, setAskId] = useRecoilState(askIDState);
  const askInfo = useRecoilValue(getAskInfo);
  useEffect(() => {
    setAskId(params);
  });
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
