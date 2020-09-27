import { v4 as uuidv4 } from "uuid";

export const PostReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        post: [
          ...state.post,
          {
            userName: action.post.userName,
            text: action.post.text,
            id: uuidv4().slice(0, 4),
          },
        ],
      };

    case "EDIT_POST":
      const updatedPost = action.payload;

      const updatedPosts = state.post.map((post) => {
        if (post.id === updatedPost.id) {
          return updatedPost;
        }
        return post;
      });

      return {
        ...state,
        post: updatedPosts,
      };

    case "REMOVE_POST":
      return {
        ...state,
        post: state.post.filter((post) => post.id !== action.payload),
      };

    default:
      return state;
  }
};
