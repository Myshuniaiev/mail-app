import { CombinedState } from "redux";

// GET LOCAL POSTS SELECTOR
export const getLocalPosts = (state) => {
  return state.postsPage.localPosts;
};
// GET SERVER POSTS SELECTOR
export const getServerPosts = (state) => {
  return state.postsPage.serverPosts;
};
// GET RESPONSE SELECTOR
export const getResponse = (state) => {
  return state.postsPage.response;
};
