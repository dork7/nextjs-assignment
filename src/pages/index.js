import { Inter } from "@next/font/google";
import Hero from "@/components/homepage/Hero";
import FeaturePosts from "@/components/homepage/FeaturePosts";
import { getFeaturedPosts, getAllPosts } from "./../helpers/posts-util";
export default function HomePage(props) {
  const { posts } = props;
  return (
    <>
      <Hero />
      <FeaturePosts {...{ posts }} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  console.log(`featuredPosts`, featuredPosts);
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 100,
  };
}
