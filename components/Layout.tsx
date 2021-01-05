import Link from "next/link";
import css from "../styles/Blog.module.css";
import Head from "next/head";
import styled from "styled-components";
import postBg from "../images/post-background.png";
import newBg from "../images/new-background.png";
import blogBg from "../images/background.png";
import logo from "../images/mail-app-removebg.png";

const Wrapper = styled.section<{ back: string }>`
  height: 400px;
  background-image: url(${(props) => props.back == "new" && newBg}
    ${(props) => props.back == "post" && postBg}
    ${(props) => props.back == "blog" && blogBg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function Layout({ title, back, about }) {
  return (
    <Wrapper back={back}>
      <Head>
        <title>{title} | App</title>
      </Head>
      <nav className={css.navbar}>
        <Link href="/">
          <a className={css.blog}>BLOG</a>
        </Link>
        <Link href="/new">
          <a className={css.newPost}>New Posts</a>
        </Link>
      </nav>
      <img className={css.logo} src={logo} />
      <div className={css.about}>{about}</div>
    </Wrapper>
  );
}
