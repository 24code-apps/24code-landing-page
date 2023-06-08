import Link from "next/link";
import React from "react";
import Seo from "../../components/Seo";
import Blog from "../../components/Blog";
import { getPosts } from "../../utils/getPosts";

export default function Blogs({ posts }) {
  return (
    <>
      <Seo
        title="24Code - Blogs"
        description="Stay up-to-date with the latest in technology trends and insights. Our tech blog features expert opinions, in-depth analysis, and practical tips on everything from software development to cybersecurity. Join the conversation and learn from our knowledgeable writers. Browse our collection of informative articles and stay ahead of the curve in the fast-paced world of tech."
      />
      <h1 className="mt-10 mb-10 font-bold text-5xl text-center">
        Our Tech Blogs
      </h1>
      <div className="mx-auto flex flex-wrap max-w-[1200px]">
        {posts?.map((each) => (
          <Link href={"/p/" + each.slug} className="w-full md:w-1/2 lg:w-1/3">
            <Blog each={each} />
          </Link>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getPosts();

  return {
    props: {
      posts: posts?.filter((each) => each.blog === true)?.slice(0, 6),
    },
  };
}
