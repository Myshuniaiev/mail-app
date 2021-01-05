import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPostsThunkCreator, postType } from "../redux/reducers/postsReducer";
import { useState } from "react";
import Head from "next/head";
import { Posts } from "../components/blogPage/Posts";
import { RootState } from "../redux/store";
import {
  getLocalPosts,
  getServerPosts,
} from "../redux/selectors/posts-selector";
import Layout from "../components/Layout";
import Media from "react-media";

// HOME PAGE (BLOG)
interface PropsType {
  serverPosts: Array<postType> | null;
  localPosts: Array<postType>;
  getPostsThunkCreator: () => void;
}
function Blog({ serverPosts, localPosts, getPostsThunkCreator }: PropsType) {
  const [posts, setPosts] = useState(serverPosts);
  useEffect(() => {
    getPostsThunkCreator();
    setPosts(serverPosts);
  }, [serverPosts]);
  return (
    <>
      <Head>
        <title>Mail | App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        title={"Posts"}
        back={"blog"}
        about={
          "Real stories & opinions about running an independent membership business"
        }
      />
      {/* <Media queries={{ small: { minWidth: 599 } }}> */}
        {Posts(posts, localPosts)}
      {/* </Media> */}
    </>
  );
}

type mapStateToPropsType = {
  localPosts: Array<postType>;
  serverPosts: Array<postType> | null;
};

const mapStateToProps = (state: RootState): mapStateToPropsType => ({
  localPosts: getLocalPosts(state),
  serverPosts: getServerPosts(state),
});

export default connect(mapStateToProps, { getPostsThunkCreator })(Blog);
