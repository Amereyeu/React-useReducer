import React, { useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import { VscEdit, VscTrash } from "react-icons/vsc";
import { Link } from "react-router-dom";

const PostDetails = ({ post }) => {
  const { removePost, editPost } = useContext(PostContext);

  return (
    <li>
      <div className="post">
        <div className="post__row">
          <div className="post__row__left">
            <small>{post.id}</small>
            <Link to={`/detail/${post.id}`}>
              <h4>{post.userName}</h4>
            </Link>
          </div>
          <div className="post__row__right">
            <Link to={`/edit/${post.id}`}>
              <VscEdit onClick={() => editPost(post.id)} />
            </Link>
            <VscTrash onClick={() => removePost(post.id)} />
          </div>
        </div>
        <div className="post__text">
          <p>{post.text}</p>
        </div>
      </div>
    </li>
  );
};

export default PostDetails;
