import Image from "next/image";
import React from "react";
import styles from "./hero.module.css";
const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.image}>
          <Image
            src="/images/site/coding-img.jpg"
            alt="an image"
            width={300}
            height={300}
          />
        </div>
        <h1>Hi, max</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          quis possimus aperiam deleniti, ipsa est ratione neque voluptate
          praesentium facere commodi accusamus numquam odit nam, velit incidunt
          hic ipsam. Voluptatem.
        </p>
      </section>
    </>
  );
};

export default Hero;
