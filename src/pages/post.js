import React, { useContext, useState, useEffect } from "react";
import PostDetails from "../components/PostList";
import NewPostForm from "../components/NewPostForm";
import { PostContext } from "../contexts/PostContext";
import Search from "../components/Search";

const PostList = () => {
  const { post } = useContext(PostContext);

    const [search, setSearch] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
      setFilteredPosts(
        post.filter((post) => {
          return post.userName.includes(search);
        })
      );
    }, [search, post]);

  return (
    <>

    <Search setSearch={setSearch} />

      {post.length ? (
        <div className="book-list">
          <ul>
            {filteredPosts.map((post) => {
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
