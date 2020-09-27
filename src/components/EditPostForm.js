import React, { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { PostContext } from "../contexts/PostContext";

export const EditPostForm = (route) => {
  let history = useHistory();
  const { post, editPost } = useContext(PostContext);
  const [selectedPost, setSelectedPost] = useState({
    id: null,
    userName: "",
    text: "",
  });
  const currentPostId = route.match.params.id;

  useEffect(() => {
    const postId = currentPostId;
    const selectedPost = post.find((article) => article.id === postId);
    setSelectedPost(selectedPost);
    // eslint-disable-next-line
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    editPost(selectedPost);
    history.push("/");
  };

  const handleOnChange = (articleKey, val) => {
    setSelectedPost({ ...selectedPost, [articleKey]: val });
  };

  console.log(selectedPost);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="title"
        required
        value={selectedPost.userName}
        onChange={(e) => handleOnChange("userName", e.target.value)}
      />
      <input
        type="title"
        id="text"
        required
        value={selectedPost.text}
        onChange={(e) => handleOnChange("text", e.target.value)}
      />
      <button type="submit" className="button">
        Edit Book
      </button>
      <button type="button" className="button">
        <Link to="/">Cancel</Link>
      </button>
    </form>
  );
};

export default EditPostForm;
