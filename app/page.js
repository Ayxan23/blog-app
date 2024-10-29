import React from "react";
import BlogCard from "@/components/BlogCard";

import styles from "./styles.module.css";

async function GetPosts() {
  const url = "https://dummyjson.com/posts?limit=10";
  const res = await fetch(url);
  return res.json();
}

export default async function Home() {
  const { posts } = await GetPosts();

  return (
    <div className={styles.blogsContainer}>
      {posts.map((post) => {
        return <BlogCard key={post.id} {...post} />;
      })}
    </div>
  );
}
