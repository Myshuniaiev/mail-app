import axios from "axios";
import React, { Component, useEffect } from "react";
import Layout from "../../components/Layout";
import css from "../../components/createPostPage/CreatePost.module.css";
import about from "../../images/about-post.png";
import { NextPageContext } from "next";

// ONE POST
export default function Post({ post }) {
  return (
    <div>
      <Layout
        title={"Post"}
        back={"post"}
        about={"View all posts with My App to save your time"}
      />
      <div className={css.firstPost}>
        <img className={css.paycheque} src={about} />
        <div className={css.data}>
          <h2 className={css.title}>{post.title}</h2>
          <p className={css.body}>{post.body}</p>
          <p className={css.author}>Post id: {post.id}</p>
        </div>
      </div>
    </div>
  );
}

// GET POST (FETCH)
Post.getInitialProps = async ({ query }: NextPageContext) => {
  const res = await fetch(`https://simple-blog-api.crew.red/posts/${query.id}`);
  const post = await res.json();
  debugger;
  return { post };
};
