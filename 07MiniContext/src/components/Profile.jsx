import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return (
    <div>
      username: {user.username} || password: {user.password}
    </div>
  );
};

export default Profile;
