import PostContent from "@/components/posts/postDetails/PostContent";
import { useRouter } from "next/router";
import React from "react";

const PostDetailsPage = () => {
  const router = useRouter();
  return <PostContent />;
};

export default PostDetailsPage;
