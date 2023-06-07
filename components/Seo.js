import { NextSeo, ArticleJsonLd } from "next-seo";
import { useRouter } from "next/router";

function Seo({
  title = "24Code | Software Development Company",
  description = "24Code is a leading software company that specializes in building high-quality SaaS and PaaS products. Our team of experienced developers and designers are committed to delivering innovative, reliable, and efficient software solutions that meet the unique needs of our customers. With a focus on quality, value, and customer satisfaction, 24code is the ideal partner for your software needs.",
  url = "https://www.24code.in",
  imageUrl = "/android-chrome-512x512.png",
  imageAlt = "",
  blog = false,
  date = new Date(),
}) {
  const router = useRouter();
  const SEO = {
    title,
    description,
    canonical: url + router.asPath,
    openGraph: {
      url,
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
      site_name: "24Code",
    },
    additionalLinkTags: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "favicon.ico",
      },
    ],
    // twitter: {
    //   handle: "@mytwitterhandle",
    //   site: "@mysitename",
    //   cardType: "summary_large_image",
    // },
  };

  return (
    <>
      <NextSeo {...SEO} />
      {true ? (
        <ArticleJsonLd
          useAppDir={true}
          type="BlogPosting"
          url={url + router.asPath}
          title={title}
          images={[imageUrl]}
          datePublished={new Date(date)}
          dateModified={new Date(date)}
          authorName="Benzigar Codes"
          description={description}
        />
      ) : null}
    </>
  );
}

export default Seo;
