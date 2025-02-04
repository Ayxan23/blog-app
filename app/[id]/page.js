import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";

import styles from "./styles.module.css";

async function GetPost(id) {
  const url = `https://dummyjson.com/posts/${id}`;
  try {
    const res = await fetch(url);
    return res.json();
  } catch (error) {
    throw new Error(error)
  }
}

const BlogDetailPage = async ({ params }) => {
  //const { id: postId, title, body } = await GetPost(params.id);
  const { id } = await params;
  const { id: postId, title, body } = await GetPost(id);

  if (!title) {
    return notFound();
  }

  return (
    <div className={styles.blogContainer}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/1920/1080?random=${postId}`}
          alt={title}
          fill={true}
        />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p>{body}</p>
    </div>
  );
};

export default BlogDetailPage;
