import React, { useContext } from "react";
import PostDetails from "../components/PostList";
import NewPostForm from "../components/NewPostForm";
import { PostContext } from "../contexts/PostContext";

const PostList = () => {
  const { post } = useContext(PostContext);

  return (
    <>
      {post.length ? (
        <div className="book-list">
          <ul>
            {post.map((post) => {
              return <PostDetails post={post} key={post.id} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="empty">No posts.</div>
      )}

      <NewPostForm />
    </>
  );
};

export default PostList;
