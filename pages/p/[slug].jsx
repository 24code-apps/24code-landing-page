import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Seo from "../../components/Seo";
import Blog from "../../components/Blog";
import { getPosts } from "../../utils/getPosts";

export default function PostPage({
  frontmatter: { title, description, date, image, blog },
  slug,
  content,
  mdxSource,
  posts,
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
      <div className="flex flex-col xl:flex-row lg:px-10 xl:px-20">
        <div className="order-2 xl:order-1 flex p-5 py-10 flex-col xl:w-2/6 mx-auto overflow-hidden">
          <h1 className="font-bold text-4xl">Also Read</h1>
          {posts
            ?.filter((e) => e.slug !== slug)
            ?.map((each) => (
              <Link key={each.slug} href={"/p/" + each.slug} className="">
                <div className="max-w-[600px] hover:underline my-2">
                  <div className="hover:bg-white object-cover flex transition-all">
                    <img
                      className="h-[100px] rounded-md aspect-square object-cover"
                      src={each.image}
                      alt=""
                    />
                    <div className="pl-2 flex flex-col">
                      <h1 className="hover:underline cursor-pointer font-bold text-lg">
                        {each.title}
                      </h1>
                      <p className="text-xs">{each.date}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <div
          className={`order-1 xl:order-2 xl:w-4/6 mx-auto min-h-[400px] dark:bg-black prose dark:prose-invert p-3 text-md lg:text-lg`}
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
        <div className="order-3 w-1/6"></div>
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
  const posts = getPosts();
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
      posts: posts?.filter((each) => each.blog),
    },
  };
}
