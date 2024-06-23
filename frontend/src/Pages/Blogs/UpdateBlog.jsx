import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { imageDb } from "../../firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const UpdateBlog = () => {
  const { id } = useParams(); // Extracting the id parameter from the URL
  const [blogPost, setBlogPost] = useState({
    id: id,
    title: "",
    description: "",
    image: "",
  });
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [downloadURL, setDownloadURL] = useState("");


  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/blogPosts/${id}`
        );
        // Update state with new values
        setBlogPost({
          ...blogPost,
          title: res.data.title,
          description: res.data.desc,
          image: res.data.photo,
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchPost();
  }, [id]);

// Function to handle image upload
const handleUpload = async (e) => {
  const file = e.target.files[0];
  setFile(file);
  const imgsBlog = ref(imageDb, `blogImages/${v4()}`);
  await uploadBytes(imgsBlog, file);
  const url = await getDownloadURL(imgsBlog);
  setDownloadURL(url);
  // Update blogPost state with the image URL
  setBlogPost(prevState => ({ ...prevState, image: url }));
};


  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmation = window.confirm("Are you sure you want to update the post?");
    if(confirmation){
      axios.put(`http://localhost:5000/api/blogPosts/${id}`, blogPost)
      .then((res) => {
        navigate(`/InsidePost/${id}`);
      })
      .catch((err) => {
        console.error(err);
      });
    }    
  };
 

  return (
    <div>
      <div className="createBlog">
        <div className="CreateBlogInnerdiv">
          <h1 className="createBlogTitle"> Update Blog Post </h1>

          <form className="createBlogFormBody" onSubmit={handleSubmit}>
            <label className="createBlogTextLabel"> Title: </label>
            <br />
            <input
              type="text"
              placeholder={blogPost.title}
              className="createBlogTextbox"
              value={blogPost.title}
              onChange={(e) =>
                setBlogPost({ ...blogPost, title: e.target.value })
              }
              required
            />
            <br />
            <label className="createBlogTextLabel"> Image: </label>
            <br />
            <br />
            {blogPost.image && (
              <img
                src={blogPost.image}
                alt="Blog Image"
                className="blogImage"
              />
            )}
            <br />
            <input
              type="file"
              className="createBlogEnterImage"
              accept="image/*"
              onChange={(e) => handleUpload(e)}
            />

            <br />
            <label className="createBlogTextLabel"> Blog Body: </label>
            <br />
            <ReactQuill
              value={blogPost.description}
              onChange={(value) =>
                setBlogPost({ ...blogPost, description: value })
              }
              className="createBlogTextArea"
              placeholder="Enter Post Description"
              required
            />
            <br />
            <button type="submit" className="createBlogSubmit">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;