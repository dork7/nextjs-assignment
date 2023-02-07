import React from "react";
import PostGrid from "../posts/PostGrid";
import styles from "./featured-posts.module.css";
const FeaturePosts = (props) => {
  const { posts } = props;
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostGrid {...{ posts }} />
    </section>
  );
};

export default FeaturePosts;
