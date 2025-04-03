import React from "react";
import { CARDS_DATA } from "../utils/helper";
import slugify from "slugify";
import { useParams } from "react-router-dom";

const CardDetail = () => {
  const { slug } = useParams();
  const filteredData = CARDS_DATA?.filter(
    (obj) => slugify(obj.title, { lower: true }) === slug
  );
  if (filteredData.length === 0) {
    return <p>Blog post not found</p>;
  }
  return (
    <div>
      {filteredData.map((obj, index) => (
        <div key={index} className="container max-w-[1164px] mx-auto py-20">
          <div className="bg-white p-3 rounded-xl border-[2px] border-solid border-black max-w-[360px]">
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
        </div>
      ))}
    </div>
  );
};

export default CardDetail;
