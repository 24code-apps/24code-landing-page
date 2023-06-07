import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Seo from "../../components/Seo";

export default function PostPage({
  frontmatter: { title, description, date, image, blog },
  slug,
  content,
  mdxSource,
}) {
  return (
    <>
      <Seo
        title={title}
        description={description}
        imageUrl={image}
        blog={blog}
        date={date}
      />
      <div
        className={`min-h-[400px] dark:bg-black prose dark:prose-invert p-3 text-md lg:text-lg mx-auto`}
      >
        <div className="flex">
          <div className="mt-3 flex flex-col justify-center">
            {image ? (
              <div className="flex">
                <img
                  className="aspect-video rounded-md w-full object-cover"
                  src={image}
                  alt=""
                />
              </div>
            ) : null}
            <h1 className="text-5xl mb-0">{title}</h1>
            <p className="text-md my-3 opacity-50">{date}</p>
          </div>
        </div>
        <hr className="m-0 mb-5" />
        <MDXRemote {...mdxSource} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      slug,
      content,
      mdxSource,
    },
  };
}
