import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUsers } from "../../Context/UserContext";
import Blogspost from "../Blogs/Blogspost";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import "./MySaves.css";

const MySaves = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [showGrid, setShowGrid] = useState(false); // State to track whether to show grid view
  const { user } = useUsers();

  useEffect(() => {
    const fetchBookmarkedPosts = async () => {
      try {
        if (user && user._id) {
          const response = await axios.get(
            `http://localhost:5000/api/bookMarks/${user._id}`
          );
          const fetchedBlogPosts = response.data.map((item) => item.blogPost);
          setBlogPosts(fetchedBlogPosts);
        }
      } catch (error) {
        console.error("Error fetching bookmarked posts:", error);
      }
    };

    fetchBookmarkedPosts();
  }, [user]);

  const handleToggleGrid = () => {
    setShowGrid(!showGrid); // Toggle the state when dropdown button is clicked
  };

  return (
    <div className="mySavesBody">
        


        <div className="mySaveBookMarksDiv">
          <div className="mySaveTags">
           Bookmarked Blogs <hr />
            <button onClick={handleToggleGrid} className="toggleButton">
              {showGrid ? <CIcon
                icon={icon.cilCaretTop}
                size=""
                style={{ "--ci-primary-color": "black" }}
                 className="dropdownIcon"
              /> : <CIcon
              icon={icon.cilCaretBottom}
              size=""
              style={{ "--ci-primary-color": "black" }}
               className="dropdownIcon"
            /> }
            </button>
          </div>
          {blogPosts.length === 0 ? (
            <p>No saved blog posts found.</p>
          ) : (
            <ul>
              {/* Conditionally render the first three blog posts or all blog posts */}
              {showGrid
                ? blogPosts.map((blogPost) => (
                    <Blogspost
                      style={{ textDecoration: "none" }}
                      key={blogPost._id}
                      blogPost={blogPost}
                    />
                  ))
                : blogPosts
                    .slice(0, 3)
                    .map((blogPost) => (
                      <Blogspost
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

export default MySaves;
