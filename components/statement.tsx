import React, { useContext, useRef } from "react";
import s from "../styles/statement.module.css";
import { ScrollContext } from "../utilities/scroll";

const opacityForStatement = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Statement: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 4;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenHeight = window.innerHeight;
    const halfScreenHeight = screenHeight / 2;
    const percentY =
      Math.min(
        clientHeight + halfScreenHeight,
        Math.max(-screenHeight, scrollY - offsetTop) + halfScreenHeight
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }
  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div
            className={s.statementText}
            style={{
              opacity: opacityForStatement(progress, 0),
            }}
          >
            We know how to make your car look better.
          </div>
          <span
            className={`${s.statementText} inline-block after:content-['_']`}
            style={{
              opacity: opacityForStatement(progress, 1),
            }}
          >
            Our team has customized over 50 different cars, transforming looks
            of several cars
          </span>
          <span
            className={`${s.statementText} inline-block after:content-['_']`}
            style={{
              opacity: opacityForStatement(progress, 2),
            }}
          >
            to the best of their ability.
          </span>
          <span
            className={`${s.statementText} inline-block`}
            style={{
              opacity: opacityForStatement(progress, 3),
            }}
          >
            We are here to help you transform your car, better.
          </span>
        </div>
      </div>
    </div>
  );
};
export default Statement;
