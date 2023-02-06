import React from "react";
import PostGrid from "../posts/PostGrid";
import styles from "./featured-posts.module.css";
const FeaturePosts = () => {
  const posts = [
    {
      title: "test",
      image: "postImg.jpg",
      excerpt: "short description",
      date: "2022-02-20",
      slug: "getting-started",
    },
    {
      title: "test",
      image: "postImg.jpg",
      excerpt: "short description",
      date: "2022-02-20",
      slug: "getting-started",
    },
    {
      title: "test",
      image: "postImg.jpg",
      excerpt: "short description",
      date: "2022-02-20",
      slug: "getting-started",
    },
    {
      title: "test",
      image: "postImg.jpg",
      excerpt: "short description",
      date: "2022-02-20",
      slug: "getting-started",
    },
    {
      title: "test",
      image: "postImg.jpg",
      excerpt: "short description",
      date: "2022-02-20",
      slug: "getting-started",
    },
    {
      title: "test",
      image: "postImg.jpg",
      excerpt: "short description",
      date: "2022-02-20",
      slug: "getting-started",
    },
  ];
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostGrid {...{ posts }} />
    </section>
  );
};

export default FeaturePosts;
