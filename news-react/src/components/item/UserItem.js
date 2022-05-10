import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userIDState } from "../../state/atoms";
import { getUserInfo } from "../../state/selector";

function UserItem() {
  const params = useParams().id;
  const [userId, setUserId] = useRecoilState(userIDState);
  const userInfo = useRecoilValue(getUserInfo);
  useEffect(() => {
    setUserId(params);
  });
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ paddingLeft: "8px" }}>
          {userInfo && <p>{userInfo.id}</p>}
          <div style={{ fontSize: "0.7rem" }}>
            {userInfo && <p>{userInfo.created}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserItem;
