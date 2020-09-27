import React, { createContext, useReducer, useEffect } from "react";
import { PostReducer } from "../reducers/PostReducer";

const initialState = {
  post: [],
};

export const PostContext = createContext(initialState);

export const PostContextProvider = (props) => {
  const [state, dispatch] = useReducer(PostReducer, initialState, () => {
    const localData = localStorage.getItem("posts");

    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(state));
  }, [state]);

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
