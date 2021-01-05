import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

// TYPES
const SET_POSTS = "SET-POST";
const SET_RESPONSE = "SET-RESPONSE";

// POSTS TYPE
export type postType = {
  title: string;
  body: string;
  id: string | number;
};

// INITIAL STATE
let initialState = {
  localPosts: [
    {
      title: "Officia nisi veniam pariatur velit proident incididunt proident.",
      body:
        "Aute voluptate tempor proident consequat sit veniam aliqua amet in. Aliqua dolor nisi eiusmod nisi officia incididunt velit labore consectetur Lorem.",
      id: 1,
    },
    {
      title: "Excepteur elit elit ea tempor deserunt excepteur labore.",
      body:
        "Commodo fugiat ex sit officia nostrud velit cillum ad. Ut cillum officia eu sunt commodo duis pariatur proident commodo eu cupidatat. ",
      id: 2,
    },
    {
      title: "Anim voluptate eiusmod cupidatat ipsum ad ipsum.",
      body:
        "Culpa dolore Lorem do commodo minim duis irure sit adipisicing sit dolore.",
      id: 3,
    },
    {
      title: "Proident commodo consectetur elit ipsum culpa cupidatat nisi.",
      body:
        "Minim nostrud labore et dolor nostrud anim ut pariatur. Esse ut incididunt quis dolore",
      id: 4,
    },
  ] as Array<postType>,
  serverPosts: [] as Array<postType> | null,
  response: "" as string,
};

// TYPE FOR INITIAL STATE
type initialStateType = typeof initialState;

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const postsReducer = (
  state: initialStateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    // SET POSTS
    case SET_POSTS: {
      return { ...state, serverPosts: action.posts };
    }
    // SET RESPONSE
    case SET_RESPONSE: {
      return { ...state, response: action.response };
    }
    default:
      return state;
  }
};

// ACTIONS
type ActionType = setPostsType | setResponseType;

// SET POSTS FROM SERVER ACTION CREATOR TYPE
type setPostsType = {
  type: typeof SET_POSTS;
  posts: Array<postType>;
};
// SET POSTS FROM SERVER ACTION CREATOR
export const setPosts = (posts: Array<postType>): setPostsType => ({
  type: SET_POSTS,
  posts,
});
// SET POSTS FROM SERVER ACTION CREATOR TYPE
type setResponseType = {
  type: typeof SET_RESPONSE;
  response: string;
};
// SET POSTS FROM SERVER ACTION CREATOR
export const setResponse = (response: string): setResponseType => ({
  type: SET_RESPONSE,
  response,
});

// THUNKS
type ThunkType = ThunkAction<void, RootState, unknown, ActionType>;

export const getPostsThunkCreator = (): ThunkType => {
  return async (dispatch) => {
    try {
      let data = await axios
        .get("https://simple-blog-api.crew.red/posts")
        .then((res) => res.data);
      dispatch(setPosts(data));
    } catch (error) {
      console.log("Something goes wrong");
    }
  };
};

//
type getPostsType = {
  posts: Array<postType>;
};
export const createPostThunkCreator = (
  title: string,
  body: string,
  id: string | number
): ThunkType => {
  return async (dispatch) => {
    debugger;
    try {
      let data = await axios.post<getPostsType>(
        "https://simple-blog-api.crew.red/posts",
        {
          title,
          body,
          id,
        }
      );
      dispatch(setResponse("Success"));
      console.log(data);
    } catch (error) {
      dispatch(setResponse("Something goes wrong"));
      console.log("Something goes wrong");
    }
  };
};
export default postsReducer;
