import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../api/index";

function UserItem() {
  const params = useParams().id;
  const [userInfo, setUserInfo] = useState();

  const fetchUserInfo = async () => {
    const response = await fetchUser(params);
    setUserInfo(response.data);
  };

  useEffect(() => {
    fetchUserInfo();
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
