import React, { useEffect, useState } from "react";
import BlogCard from "./blogCard/blogCard";
import axios from "axios";
import { useUsers } from "../../Context/UserContext";
import "./MySaves.css";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

const MyCollections = () => {
  const [blogPost, setPost] = useState([]);
  const [showGrid, setShowGrid] = useState(false);
  const { user } = useUsers();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/blogPosts/user/${user._id}`
        );
        setPost(res.data);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
      }
    };
    fetchBlogPosts();
  }, [user]);

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogPosts/${postId}`);
      setPost((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    } catch (err) {
      console.error("Error deleting blog post:", err);
    }
  };

  if (!user) {
    // Handle case where user data is not available
    return <div> User data not found! </div>;
  }

  const handleToggleGrid = () => {
    setShowGrid(!showGrid); // Toggle the state when dropdown button is clicked
  };

  return (
    <div className={`mySavesBody`}>
      <div className="UserDetailsDiv">
        <div className="UserInfo">
          {user ? (
            <>
              <p className="UserName">{user.username}</p>
              <p className="UserEmail">Email: {user.email}</p>
            </>
          ) : (
            <p>Loading user details...</p>
          )}
        </div>
        <div className="UserProfilePicture">
          {user && (
            <img
              src={user.profilePicture}
              alt={`${user.username}`}
              className="UserImage"
            />
          )}
        </div>
      </div>
<hr/>
      <div className="mySaveBookMarksDiv">
       
      <div className="mySaveBookMarksSubDiv">
        <div className="mySaveTags">
          Blogs
          {"   "}
          <button onClick={handleToggleGrid} className="toggleButton">
            {showGrid ? (
              <CIcon
                icon={icon.cilCaretTop}
                size=""
                style={{ "--ci-primary-color": "black" }}
                className="dropdownIcon"
              />
            ) : (
              <CIcon
                icon={icon.cilCaretBottom}
                size=""
                style={{ "--ci-primary-color": "black" }}
                className="dropdownIcon"
              />
            )}
          </button>
        </div>
        <p className="UserBlogsCount">
          {" "}
          No of Blogs: {"   "} {blogPost.length}{" "}
        </p>
      </div>

        {blogPost.length === 0 ? (
          <p>No saved blog posts found.</p>
        ) : (
          <ul>
            {/* Render all blog posts */}
            {showGrid
              ? blogPost.map((blogPost) => (
                  <BlogCard
                    style={{ textDecoration: "none" }}
                    key={blogPost._id}
                    blogPost={blogPost}
                  />
                ))
              : blogPost
                  .slice(0, 3)
                  .map((blogPost) => (
                    <BlogCard
                      style={{ textDecoration: "none" }}
                      key={blogPost._id}
                      blogPost={blogPost}
                    />
                  ))}
          </ul>
        )}
      </div>



     


    </div>
  );
};

export default MyCollections;
