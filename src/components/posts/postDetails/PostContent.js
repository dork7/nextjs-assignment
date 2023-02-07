import React from "react";
import PostHeader from "./PostHeader";
import styles from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
const DUMMY_POST = {
  title: "test",
  image: "postImg.jpg",
  excerpt: "short description",
  date: "2022-02-20",
  slug: "getting-started",
  content: "# dis is a post",
};
const PostContent = (props) => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
