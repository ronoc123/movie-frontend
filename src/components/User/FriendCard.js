import React from "react";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { CgUserRemove } from "react-icons/cg";
import { useAppContext } from "../../Context/appContext";
import { useNavigate } from "react-router-dom";
const FriendCard = ({ firstname, lastname, motto, id }) => {
  const { deleteFriend } = useAppContext();
  const [popup, setPopup] = useState(false);

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/user/${id}`);
  };
  return (
    <div className="friend-container">
      <div className="info-container" onClick={handleClick}>
        <div className="profile-icon">
          <CgProfile />
        </div>
        <div>
          <div className="name-container">
            <span className="first-name capitalize">{firstname}</span>{" "}
            <span className="last-name capitalize">{lastname}</span>
          </div>
          {/* <div className="description">{motto}</div> */}
        </div>
      </div>
      <div className="buttons">
        <div className="icon" onClick={() => deleteFriend(id)}>
          Unfollow
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
