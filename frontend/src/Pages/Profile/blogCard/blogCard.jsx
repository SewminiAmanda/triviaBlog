import React, { useState, useEffect } from "react";
import "./blogCard.css";
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { Button } from "@mui/material";

const BlogCard = ({ blogPost, onDelete }) => {
  // Check if blogPost is available, if not return null
  const [author, setAuthor] = useState(null);

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/details/${userId}`
      );
      return response;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await fetchUserData(blogPost.postedBy);
        const userData = await response.json();
        setAuthor(userData); // Set author data
        console.log("the author is", userData); // Log userData instead of author
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };

    fetchAuthor();
  }, [blogPost.postedBy]);

  if (!blogPost) {
    return null;
  }

  const createdAtDate = new Date(blogPost.createdAt);
  const createdDate = createdAtDate.toDateString();

  const handleDelete = () => {
    const confirmation = window.confirm("Are you sure you want to delete the post?");
    if (confirmation) {
      onDelete(blogPost._id);
    }
  };

  // Rendering the component
  return (
    <div className="mainpostcard">
    <div className="postCard">
      {/* Link to view full blog post */}
      <Link
        style={{ textDecoration: "none" }}
        to={`/InsidePost/${blogPost._id}`}
        key={blogPost.id}
      >
        <img src={blogPost.photo} alt="" className="blogPostImage" />
        <div className="blogPostText">
          <div className="blogPostTitle">{blogPost.title}</div>
          <br />
          <div className="blogPostostDetails">
            <div className="blogPostDescription">
              {blogPost.desc.split(" ").slice(0, 60).join(" ") + "... See more"}
            </div>
            <br />
          </div>
        </div>
      </Link>
      </div>
      <div className='blogCardFooter'>
        {author && (
          <div className="authorInfo">
            <img
              src={author.profilePicture}
              alt=""
              className="authorProfilePicture"
            />
          </div>
        )}
        <div className="blogPostdate">{createdDate}</div>
     
      <Link style={{ marginTop: '12px' }} className="editButton"  to={`/UpdateBlog/${blogPost._id}`}  key={blogPost.id}>
              <CIcon
                icon={icon.cilPen}
                size=""
                style={{ "--ci-primary-color": "black" }}
                 
              />
              
      </Link>

      <button onClick={handleDelete} className="editButton">
              <CIcon
                icon={icon.cilTrash}
                size=""
                style={{ "--ci-primary-color": "black" }}
              />
      </button>

      </div>
    </div>
  );
};

export default BlogCard;
