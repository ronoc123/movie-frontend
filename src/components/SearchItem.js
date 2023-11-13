import React from "react";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/appContext";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const SearchItem = ({ id, firstname, lastname, profilePicture }) => {
  const navigate = useNavigate();
  const { user } = useAppContext();
  const handleClick = () => {
    if (user.id === id) {
      navigate("/profile");
    } else {
      navigate(`/user/${id}`);
    }
  };

  const [imgUrl, setImgUrl] = useState(null);
  const userId = 1; // Replace with the actual user ID

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const response = await axios.get(
          `https://movie-hub-df7ac8f36032.herokuapp.com/api/users/${id}/profile-picture/${profilePicture}`,
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

  return (
    <button className="person-container" onMouseDown={handleClick}>
      {profilePicture ? (
        <img src={imgUrl} alt="picture" />
      ) : (
        <div className="icon">
          <CgProfile />
        </div>
      )}
      <div className="text-container">
        {firstname} {lastname}
      </div>
    </button>
  );
};

export default SearchItem;
