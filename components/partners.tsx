import React from "react";
import Logos from "./logos";
import Reviews from "./reviews";
import s from "../styles/partners.module.css";

const Partners: React.FC = () => {
  return (
    <section
      className={`bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 ${s.bg}`}
    >
      \
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl mb-10 font-bold text-center">
          <span className="whitespace-nowrap">We only work with </span>{" "}
          <span className="whitespace-nowrap">the best suppliers</span>
        </h3>
        <Logos />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto lg:max-w-[70%] lg:px-10">
          <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]">
            Don&apos;t Just Take It From Us, <br />{" "}
            <span className="text-2xl">
              {" "}
              See What Our Customers Say About Us{" "}
            </span>
          </h3>
        </div>
      </div>
      <Reviews />
      <div className="flex-1 bg-black"></div>
    </section>
  );
};

export default Partners;
