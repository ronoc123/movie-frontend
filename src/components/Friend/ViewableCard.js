import React, { useEffect } from "react";
import Wrapper from "../../assests/Wrappers/User";
import { useState } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { useAppContext } from "../../Context/appContext";

const ViewableCard = () => {
  const { friend, userFollowing, addFriend, deleteFriend, getFriends } =
    useAppContext();

  const handleFollow = () => {
    if (userFollowing.some((f) => f.id === friend.id)) {
      deleteFriend(friend?.id);
    } else {
      addFriend(friend?.id);
    }
  };

  const [imgUrl, setImgUrl] = useState(null);
  const userId = 1; // Replace with the actual user ID

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const response = await axios.get(
          `https://movie-hub-df7ac8f36032.herokuapp.com/api/users/${friend}/profile-picture/${friend?.profilePicture}`,
          {
            responseType: "blob", // Specify 'blob' to handle binary data
          }
        );

        const reader = new FileReader();

        reader.onloadend = () => {
          setImgUrl(reader.result);
        };

        reader.readAsDataURL(response.data); // Convert blob to data URL
      } catch (error) {
        console.error(error);
      }
    };

    fetchImg();
  }, [userId]);

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <Wrapper>
      <div className="img-con">
        {friend?.profilePicture ? (
          <img src={imgUrl} alt="picture" />
        ) : (
          <FaUserCircle />
        )}
      </div>
      <div className="info-con">
        <div className="capitalize">
          {friend?.firstname} {friend?.lastname}
        </div>
        <div>{friend?.motto ? friend?.motto : ""}</div>
      </div>
      <div className="stat-con">
        <button className="follow-btn" onClick={handleFollow}>
          {userFollowing.some((f) => f.id === friend?.id)
            ? "Unfollow"
            : "Follow"}
        </button>
        <div className="stacked-item">
          <span className="number">{friend?.followers}</span>
          <span className="title">followers</span>
        </div>
        <div className="stacked-item">
          <span className="number">{friend?.following}</span>
          <span className="title">following</span>
        </div>
        <div className="stacked-item end">
          <span className="number">{friend?.favorites}</span>
          <span className="title">favorites</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default ViewableCard;
