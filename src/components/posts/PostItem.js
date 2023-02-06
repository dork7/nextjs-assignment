import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./post-item.module.css";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <div className={styles.image}>
          <Image
            src={imagePath}
            alt="img"
            layout="responsive"
            width={300}
            height={200}
          />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{date}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
