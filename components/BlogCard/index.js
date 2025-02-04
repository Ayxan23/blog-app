import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

const BlogCard = ({ title, body, id }) => {
  return (
    <>
      <Link href={`/${id}`}>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src={`https://picsum.photos/1920/1080?random=${id}`}
              alt="Blog Card Image"
              fill={true}
            />
          </div>
          <div className={styles.cardBody}>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
