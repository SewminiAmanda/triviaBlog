import React, { useEffect, useState } from "react";
import { useUsers } from "../../Context/UserContext";
import axios from "axios";
import "./EditProfile.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { imageDb } from "../../firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import editProfileImage from './Assets/editProfileImage.png'

const EditProfile = () => {
  const { user } = useUsers();
  const id = user._id;
  const [author, setAuthor] = useState(user);
  const [file, setFile] = useState("");
  const [downloadURL, setDownloadURL] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthor({
      ...author,
      [name]: value // Use the name of the input field as key
    });
  };
  

  // Function to handle image upload
const handleUpload = async (e) => {
    const file = e.target.files[0];
    setFile(file);
    const imgsProfile = ref(imageDb, `profileImages/${v4()}`);
    await uploadBytes(imgsProfile, file);
    const url = await getDownloadURL(imgsProfile);
    setDownloadURL(url);
    // Update blogPost state with the image URL
    setAuthor(prevState => ({ ...prevState, image: url }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, author);
      alert("Profile updated successfully!");
      navigate('/home');
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="editProfileMainDiv">
      <div className="editProfileimg">
      <img src={editProfileImage} alt=''/>

      </div>
      <div className="secondDivEditProfile">
      <h2 className="editProfilemainText">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={author.username}
            placeholder={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={author.email}
            placeholder={author.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="createBlogTextLabel"> Image: </label>
          <br />
          <br />
          {author.profilePicture && (
            <img src={author.profilePicture} alt="Blog Image" className="blogImage" />
          )}
          <br />
          <input
            type="file"
            className="createBlogEnterImage"
            accept="image/*"
            onChange={(e) => handleUpload(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Profile
        </button>
      </form>
      </div>
    </div>
  );
};

export default EditProfile;
