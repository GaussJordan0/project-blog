import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";

async function Home() {
  const BLOGS = await getBlogPostList();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {BLOGS.map((blog) => (
        <BlogSummaryCard
          key={blog.slug}
          {...blog}
        />
      ))}
    </div>
  );
}

export default Home;
