import Head from "next/head";
import Link from "next/link";
import {
  AiFillBulb,
  AiFillClockCircle,
  AiFillFire,
  AiOutlineCloudServer,
  AiOutlineMobile,
} from "react-icons/ai";

import Seo from "../components/Seo";
import Blog from "../components/Blog";
import { getPosts } from "../utils/getPosts";

const App = ({ posts }) => {
  const techs = [
    {
      name: "Google Cloud",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
    },
    {
      name: "Vercel",
      image:
        "https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png",
    },
    {
      name: "Digital Ocean",
      image:
        "https://companieslogo.com/img/orig/DOCN-6eec72eb.png?t=1660638083",
    },
    {
      name: "AWS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      name: "Planet Scale",
      image:
        "https://seeklogo.com/images/P/planetscale-logo-0EEA8CAEB4-seeklogo.com.png",
    },
  ];

  return (
    <div className="min-h-[70vh] bg-white flex flex-col">
      <Seo />
      <div className="mt-10 flex-1 bg-white text-black justify-center items-center flex flex-col">
        {/* <h1 className="px-10 text-center text-4xl md:text-6xl lg:text-7xl max-w-[800px]">
          <span className="items-center flex flex-wrap">
            <img
              className="hidden md:flex h-14 w-15 mr-2"
              src="https://em-content.zobj.net/thumbs/240/whatsapp/352/rocket_1f680.png"
              alt=""
            />
            <p className="text-center">
              Creating <span className="ml-2 robo">Software </span>
            </p>
          </span>
          is <span className="robo text-[#0173C6]">easy</span> with us.
        </h1> */}
        <h1 className="px-10 text-center text-4xl md:text-6xl lg:text-7xl max-w-[800px]">
          <span className="items-center flex flex-wrap">
            {/* <img
              className="hidden md:flex h-14 w-15 mr-2"
              src="https://em-content.zobj.net/thumbs/240/whatsapp/352/rocket_1f680.png"
              alt=""
            /> */}
            <p className="mt-10 text-center">
              <span className="font-bold">Grow</span> Your{" "}
              <span className="robo text-[#0173C6]">Business</span> With{" "}
              <span className="font-bold">Technology</span>
            </p>
          </span>
          {/* is <span className="robo text-[#0173C6]">easy</span> with us. */}
        </h1>
        <p className="flex items-center text-lg mt-10">
          Your Idea <AiFillBulb className="text-yellow-500" /> + Our Technology{" "}
          = <AiFillFire className="text-red-500" />
        </p>
        <div className="flex">
          {/* <button
            className="hover:bg-zinc-100 border-2 text-black px-6 text-black py-3 rounded-md mt-5"
            href="mailto:24code.apps@gmail.com"
          >
            <p>See Pricing</p>
          </button> */}
          <a
            target={"_blank"}
            className="hover:bg-zinc-100 border-2 text-black px-6 text-black py-3 rounded-md mt-5"
            href="https://forms.gle/tNqYzXqhQaZAdsmN7"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="mt-24 justify-center flex-col flex items-center">
        <h2 className="font-bold text-md">
          OUR <span className="font-bold text-[#0173C6]">TECH</span> PARTNERS
        </h2>
        <div className="mt-5 flex items-center">
          {techs?.map((each) => (
            <Link
              target={"_blank"}
              href={"https://www.google.com/search?q=" + each.name}
            >
              <img
                className="grayscale h-10 mx-5"
                src={each.image}
                alt={each.name}
              />
            </Link>
          ))}
          {/* <img
            className="h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/2560px-Vercel_logo_black.svg.png"
            alt=""
          />
          <img
            className="h-10"
            src="https://consent.trustarc.com/v2/asset/20:55:23.714y33gof_DO_Logo-Blue.png"
            alt=""
          />
          <img
            className="h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            alt=""
          />
          <img
            className="h-10"
            src="https://mms.businesswire.com/media/20220524005472/en/1465062/5/planetscale-logo-full-black.jpg"
            alt=""
          /> */}
        </div>
      </div>
      {posts ? (
        <div className="mt-24 py-10 flex flex-col bg-zinc-50 text-black justify-center items-center">
          <h1 className="text-center text-4xl font-bold">
            Some of our <span className="text-[#0173C6]">Articles</span>
          </h1>
          <p className="text-center text-sm px-10 sm:text-lg mt-2 opacity-50">
            Here are some articles by us that could value your time
          </p>
          <div className="mt-5 max-w-[1200px] px-4 lg:px-8 mx-auto overflow-x-scroll">
            <div className="flex flex-wrap">
              {posts?.map((each) => (
                <Link
                  href={"/p/" + each.slug}
                  className="w-full md:w-1/2 lg:w-1/3"
                >
                  <Blog each={each} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}
      <div className="flex-col justify-center items-center mt-10 pt-10 flex">
        <h1
          style={{
            lineHeight: 1.5,
          }}
          className="max-w-[70vw] lg:max-w-[50vw] text-center font-bold text-4xl lg:text-5xl"
        >
          Our Technology scales for 1{" "}
          <span className="text-[#0173C6] text-6xl uppercase">Million</span>{" "}
          users
        </h1>
        <p className="text-center mt-5 max-w-[60vw] md:max-w-[50vw] lg:max-w-[30vw]">
          Our Tech is well built to scale more than 1 million users both
          websites and mobile apps.
        </p>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = getPosts();

  return {
    props: {
      posts: posts?.filter((each) => each.blog === true)?.slice(0, 6),
    },
  };
}

export default App;
