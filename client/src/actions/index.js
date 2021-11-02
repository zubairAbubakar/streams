import * as actionTypes from "actions/types";

export const signIn = (userId) => {
  return {
    type: actionTypes.SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: actionTypes.SIGN_OUT,
  };
};

// export const fetchPosts = () => async (dispatch) => {
//   const response = await jsonPlaceHolder.get("/posts");

//   dispatch({ type: "FETCH_POSTS", payload: response });
// };
