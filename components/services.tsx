import React from "react";
import {
  ServiceBackground,
  ServiceContainer,
  ServiceLeft,
  ServiceRight,
} from "./service";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import Image from "next/image";

const Services = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <ServiceBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <ServiceContainer>
            <ServiceLeft progress={progress}>
              <div className="text-center text-lg md:text-5xl font-bold">Car Wraps </div>
              <div className="py-2 px-10 lg:px-10 text-xs text-center md:text-sm font-semibold tracking-tight">
                3M, Avery Dennison, and more. Car Wraps provide your
                vehicle a one-of-a-kind appearance with the highest level of craftsmanship. Do you
                want to give your car a fresh style while while conserving the OEM paint? Vinyl wraps from B7 Customs
                will protect the paint underneath and can be removed afterwards, leaving the paint in its original state.
              </div>
            </ServiceLeft>
            <ServiceRight progress={progress}>
              <Image
                src="/assets/test.JPG"
                layout="responsive"
                width={500}
                height={400}
                alt="Loayei"
                className="rounded-xl"
              />
              <div className=" py-2 text-black text-center text-sm font-bold md:text-sm tracking-tight">
                We have over 500 different finishes to pick from so you can get the precise look you want.
                Gloss, Matte, and Chrome vinyl are just a few of the options.
                Complete or partial wraps, and full graphics are all available. Your vehicle can be given a variety of looks with a vinyl wrap.
                A three-year warranty against bubbling and peeling is included. *** Your personalized wrap should last between 4 and 7 years.

              </div>

            </ServiceRight>
          </ServiceContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <ServiceContainer>
            <ServiceLeft progress={progress}>
              <div>We Tint</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                Cars
              </div>
            </ServiceLeft>
            <ServiceRight progress={progress}>
              <Image
                src="/assets/tint.jpeg"
                layout="responsive"
                width={1620}
                height={750}
                alt="Loayei"
              />
            </ServiceRight>
          </ServiceContainer>
        )}
      ></Tile>
    </TileContent>
    <TileContent>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <ServiceContainer>
            <ServiceLeft progress={progress}>
              <div>We Install</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                Aftermarket Parts
              </div>
            </ServiceLeft>
            <ServiceRight progress={progress}>
              <Image
                src="/assets/tint.jpeg"
                layout="responsive"
                width={1620}
                height={750}
                alt="Loayei"
              />
            </ServiceRight>
          </ServiceContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Services;
