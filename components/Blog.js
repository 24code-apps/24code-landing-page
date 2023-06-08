import React from "react";

export default function Blog({ each = {} }) {
  return (
    <div className="hover:bg-white hover:-translate-y-3 transition-all flex flex-col m-2">
      <img
        className="rounded-md aspect-video object-cover"
        src={each.image}
        alt=""
      />
      <div className="p-2 mt-2 flex flex-col">
        <h1 className="hover:underline cursor-pointer font-bold text-xl">
          {each.title}
        </h1>
        <p>{each.date}</p>
      </div>
    </div>
  );
}
