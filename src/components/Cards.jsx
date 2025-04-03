import React from "react";
import { CARDS_DATA } from "../utils/helper";
import slugify from "slugify";

const Cards = () => {
  return (
    <div className="container max-w-[1164px] mx-auto py-20 px-3">
      <h1 className="text-center text-5xl font-semibold text-green-600 tracking-wider pb-12">
        Cards
      </h1>
      <div className="flex flex-row flex-wrap">
        {CARDS_DATA.map((obj, index) => (
          <a
            href={`/data/${slugify(obj.title, { lower: true })}`}
            key={index}
            className="w-full sm:w-6/12 md:w-4/12"
          >
            <div className="bg-white p-3 rounded-xl border border-solid border-black max-w-[360px]">
              <img
                src={obj.image}
                alt="card-image"
                className="w-full max-w-[364px] h-[274px] rounded-xl"
              />
              <p className="text-2xl font-bold text-black leading-normal py-3">
                {obj.title}
              </p>
              <p className="text-base font-bold text-black leading-normal">
                {obj.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Cards;
