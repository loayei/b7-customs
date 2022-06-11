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
              <div>We Give Your Vehicle a </div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                New LOOK
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
