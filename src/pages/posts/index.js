import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/data/posts";
import React from "react";

const AllPostsPage = () => {
  const allPosts = getAllPosts();
  return <AllPosts posts={allPosts} />;
};

export default AllPostsPage;
