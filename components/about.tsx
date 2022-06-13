import React from "react";
import Engineer from "./engineer";

const AboutUs: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>We will help you transform your car, better.</strong> Our team
          of experts will help you to find the best solution for your car.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>&ldquo;The Specialists&rdquo;</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-20">
          <Engineer
            id="loai"
            name="Loai"
            socialId="@loayei"
            link="https://instagram.com/loayei"
          />
          <Engineer
            id="moe"
            name="Moe"
            socialId=""
            link="https://twitter.com/moe"
          />
          <Engineer
            id="g"
            name="G"
            socialId=""
            link="https://twitter.com/g"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
