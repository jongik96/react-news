import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import allAction from "../modules/actions";

function AskInfo() {
  const params = useParams().id;
  console.log(params);
  const dispatch = useDispatch();
  const askInfo = useSelector((state) => state.askInfo);
  console.log(askInfo);
  useEffect(() => {
    dispatch(allAction.getAskInfo(params));
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
            {askInfo.comments &&
              askInfo.comments.map((item) => (
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
