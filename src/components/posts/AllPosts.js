import React from "react";
import styles from "./all-posts.module.css";
import PostGrid from "./PostGrid";
const AllPosts = (props) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;
