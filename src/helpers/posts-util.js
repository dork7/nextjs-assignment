import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postDirectory = path.join(process.cwd(), "src", "data", "posts");

export function getAllPosts() {
  const postFiles = fs.readdirSync(postDirectory);
  console.log(`postFiles`, postFiles);
  return postFiles
    .map((postFile) => getPostsData(postFile))
    .sort((postA, postB) => (postA.data > postB.data ? -1 : 1));
}

function getPostsData(filePath) {
  const fileName = path.join(postDirectory, filePath);
  const fileContent = fs.readFileSync(fileName, "utf-8");
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, "");
  return {
    // slug: postSlug,
    ...data,
    content,
  };
}

export function getFeaturedPosts() {
  return getAllPosts().filter((post) => post?.isFeatured);
}
