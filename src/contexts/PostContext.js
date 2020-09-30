import React, { createContext, useReducer, useEffect } from "react";
import { PostReducer } from "../reducers/PostReducer";

const initialState = {
  post: JSON.parse(localStorage.getItem("post")) || [],
};

export const PostContext = createContext(initialState);

export const PostContextProvider = (props) => {
  const [state, dispatch] = useReducer(PostReducer, initialState);

  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(state.post));
  }, [state]);

  console.log(state);
  function addPost(post) {
    dispatch({
      type: "ADD_POST",
      payload: post,
    });
  }

  function editPost(post) {
    dispatch({
      type: "EDIT_POST",
      payload: post,
    });
  }

  function removePost(id) {
    dispatch({
      type: "REMOVE_POST",
      payload: id,
    });
  }

  return (
    <PostContext.Provider
      value={{ post: state.post, dispatch, addPost, editPost, removePost }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
