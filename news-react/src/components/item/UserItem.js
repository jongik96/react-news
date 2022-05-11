import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import allAction from "../../modules/actions";

function UserItem() {
  const params = useParams().id;
  console.log(params);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  console.log(userInfo);
  useEffect(() => {
    dispatch(allAction.getUserInfo(params));
  }, []);
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
