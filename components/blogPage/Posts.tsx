import React from "react";
import css from "./BlogPage.module.css";
import paycheque from "../../images/after-the-paycheque.png";
import Link from "next/link";
import axios from "axios";
import { Button } from "../../elements/styles";

export function Posts(posts, localPosts) {
  return (
    <div>
      <div className={css.firstPost}>
        <img className={css.paycheque} src={paycheque} />
        <div className={css.data}>
          <h2 className={css.title}>
            After the paycheque is gone: Successful solo writers share their
            secrets
          </h2>
          <p className={css.body}>
            As journalism slims down after two decades of digital disruption,
            writers are choosing an independent route. Discover their secrets to
            success within!
          </p>
          <p className={css.author}>ROBERT ANDREWS</p>
        </div>
      </div>
      <hr className={css.postHr} />
      <div className={css.posts}>
        {posts.map((post) => (
          <div className={css.post} key={post.id}>
            <p className={css.class}>MEMBERSHIP</p>
            <p className={css.title}>{post.title}</p>
            <p className={css.body}>{post.body}</p>
            <Link href={`/posts/${post.id}`}>
              <Button alert={false}>View post</Button>
            </Link>
            <Button
              alert={true}
              onClick={() =>
                axios.delete(
                  `https://simple-blog-api.crew.red/posts/${post.id}`
                )
              }
            >
              DELETE
            </Button>
          </div>
        ))}
        {localPosts.map((post) => (
          <div className={css.post} key={post.id}>
            <p className={css.class}>REDUX POST</p>
            <p className={css.title}>{post.title}</p>
            <p className={css.body}>{post.body}</p>
            <Link href={`/posts/${post.id}`}>
              <Button alert={false}>View post</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
