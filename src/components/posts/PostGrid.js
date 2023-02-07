import React from "react";
import PostItem from "./PostItem";
import styles from "./postgrid.module.css";
const PostGrid = (props) => {
  const { posts } = props;
  return (
    <section>
      <ul className={styles.grid}>
        {posts?.map((post) => (
          <PostItem {...{ post }} />
        ))}
      </ul>
    </section>
  );
};

export default PostGrid;
