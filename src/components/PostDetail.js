import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../contexts/PostContext";

export const PostDetail = (route) => {
  const [data, setData] = useState("");
  const { post } = useContext(PostContext);
  const currentPostId = route.match.params.id;

  useEffect(() => {
    const postId = currentPostId;
    const selectedPost = post.find((article) => article.id === postId);
    setData(selectedPost);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="post">
      <div className="post__row">
        <div className="post__row__left">
          <h4>{data.userName}</h4>
        </div>
      </div>
      <div className="post__text">
        <p>{data.text}</p>
      </div>
      <Link to="/">Back</Link>
    </div>
  );
};

export default PostDetail;
