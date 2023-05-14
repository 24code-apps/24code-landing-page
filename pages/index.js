import Head from "next/head";
import Link from "next/link";
import {
  AiFillBulb,
  AiFillClockCircle,
  AiFillFire,
  AiOutlineCloudServer,
  AiOutlineMobile,
} from "react-icons/ai";

const App = () => {
  return (
    <div className="min-h-[70vh] bg-white flex flex-col">
      <Head>
        <title>24Code | Software Development Company</title>
        <meta
          name="description"
          content="Our company can help you save time by technology"
        ></meta>
        <meta
          name="keywords"
          content="24 Code, app development, software company, website maker"
        ></meta>

        <meta
          property="og:title"
          content="24Code | Software Development Company"
        />
        <meta
          property="og:description"
          content="Our company can help you save time by technology"
        />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta property="og:url" content="https://www.24code.in" />
      </Head>
      <div className="flex-1 bg-white text-black justify-center items-center flex flex-col">
        <h1 className="px-10 text-center text-4xl md:text-6xl lg:text-7xl max-w-[800px]">
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
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
