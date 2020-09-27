import React, { useContext, useState } from "react";
import { PostContext } from "../contexts/PostContext";

const NewPostForm = () => {
  const { dispatch } = useContext(PostContext);
  const [userName, setUserName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "ADD_POST", post: { userName, text } });
    setUserName("");
    setText("");
    console.log("post added");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User Name"
        required
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Text"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="button">
        Add Post
      </button>
    </form>
  );
};

export default NewPostForm;
