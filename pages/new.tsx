import { connect } from "react-redux";
import Layout from "../components/Layout";
// import css from "../components/BlogPage.module.css";
import {
  createPostThunkCreator,
} from "../redux/reducers/postsReducer";
import NewPostForm from "../components/createPostPage/CreatePostForm";
import React, { Component } from "react";
import css from "../components/createPostPage/CreatePost.module.css";
import motivation from "../images/motivation.png";
import coffee from "../images/coffee.png";

type dataType = {
  title: string | any;
  body: string | any;
  id: string | any;
};
class NewPost extends Component {
  submit = (values: dataType): void => {
    const data = createPostThunkCreator(values.title, values.body, values.id);
    // BAG _ ERROR (ALL WORKS)
    data(values.title, values.body, values.id);
  };
  render(): JSX.Element {
    return (
      <>
        <Layout
          title={"New Post"}
          back={"new"}
          about={"Write your own post describing your emotions and knowledge"}
        />
        <div className={css.firstPost}>
          <div className={css.data}>
            <h2 className={css.title}>
              Try to create your first post: your first impressions and the
              first people to watch it
            </h2>
            <p className={css.body}>
              Reprehenderit mollit dolor irure magna aute consequat sint ea eu.
              Labore nostrud adipisicing tempor aute nisi quis nulla id anim
              cupidatat ullamco est. Aute et incididunt sunt duis in consectetur
              ipsum consequat officia aliquip proident sit ad. Irure ullamco
              magna et aliqua officia cupidatat amet eiusmod et.
            </p>
            <p className={css.author}>MY APP STAFF</p>
          </div>
          <img className={css.paycheque} src={motivation} />
        </div>
        <div className={css.firstPost}>
          <img className={css.paycheque} src={coffee} />
          <div className={css.data}>
            <h1 className={css.title}>Create post</h1>
            <p className={css.body}>
              Ea tempor dolore ut officia adipisicing ad eu sunt consequat aute
              ea mollit voluptate. Amet officia ad officia labore in magna
              Lorem.
            </p>
            <NewPostForm onSubmit={this.submit} />
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, { createPostThunkCreator })(NewPost);
