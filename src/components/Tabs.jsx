import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Tabs = () => {
  const Location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(Location.search);
  const initialTab = parseInt(queryParams.get("tab")) || 1;
  const [openTab, setOpenTab] = useState(initialTab);
  useEffect(() => {
    setOpenTab(initialTab);
  }, [initialTab]);
  const handleTabClick = (tabIndex) => {
    setOpenTab(tabIndex);
    navigate(`?tab=${tabIndex}`);
  };
  return (
    <div className="container mx-auto xl:max-w-[1164px] pt-20 px-3">
      <h1 className="text-center text-5xl font-semibold text-green-600 tracking-wider">
        Tabs
      </h1>
      <ul className="py-12 sm:py-16 flex gap-10 sm:gap-12 md:gap-20 justify-center flex-wrap">
        <li>
          <Link
            onClick={(e) => {
              e.preventDefault();
              handleTabClick(1);
            }}
            className={`${
              openTab === 1 ? "text-cyan-600" : "text-black"
            } text-3xl font-bold`}
            to="/"
          >
            Tab-1
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) => {
              e.preventDefault();
              handleTabClick(2);
            }}
            className={`${
              openTab === 2 ? " text-cyan-600" : "text-black"
            } text-3xl font-bold`}
            to="/"
          >
            Tab-2
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) => {
              e.preventDefault();
              handleTabClick(3);
            }}
            className={`${
              openTab === 3 ? " text-cyan-600" : "text-black"
            } text-3xl font-bold`}
            to="/"
          >
            Tab-3
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) => {
              e.preventDefault();
              handleTabClick(4);
            }}
            className={`${
              openTab === 4 ? " text-cyan-600" : "text-black"
            } text-3xl font-bold`}
            to="/"
          >
            Tab-4
          </Link>
        </li>
      </ul>
      <div className={openTab === 1 ? "block" : "hidden"}>
        <div className="w-full h-[100px] bg-gray-300 rounded-xl flex items-center justify-center">
          <p className="text-xl font-semibold text-black">Tab-1</p>
        </div>
      </div>
      <div className={openTab === 2 ? "block" : "hidden"}>
        <div className="w-full h-[100px] bg-gray-300 rounded-xl flex items-center justify-center">
          <p className="text-xl font-semibold text-black">Tab-2</p>
        </div>
      </div>
      <div className={openTab === 3 ? "block" : "hidden"}>
        <div className="w-full h-[100px] bg-gray-300 rounded-xl flex items-center justify-center">
          <p className="text-xl font-semibold text-black">Tab-3</p>
        </div>
      </div>
      <div className={openTab === 4 ? "block" : "hidden"}>
        <div className="w-full h-[100px] bg-gray-300 rounded-xl flex items-center justify-center">
          <p className="text-xl font-semibold text-black">Tab-4</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
