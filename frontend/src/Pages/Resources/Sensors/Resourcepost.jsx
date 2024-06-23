import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Resourcepost = () => {
  const postId = useParams().id;
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`); 
        console.log(res.data);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPost();
  }, [postId]);

  console.log('Post State:', post);

  return (
    <div className="res-post">
      <img src={post.photo} alt="" className="res-post img" />
      <h3>{post.title}</h3>
      <p>{post.desc + '...Read more'}</p>
    </div>
  );
};

export default Resourcepost;
