import React from "react";
import SliderContainer, { SliderItem } from "./slider";
import Image from "next/image";

const Logos: React.FC = () => (
    <>
        <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
            <SliderItem width={150}>
                <Image src="/assets/3m.png" width={150} height={50} alt="Logo" objectFit="contain" />
            </SliderItem>
            <SliderItem width={150}>
                <Image src="/assets/avery.png" width={150} height={50} alt="Logo" objectFit="contain" />
            </SliderItem>
            <SliderItem width={150}>
                <Image src="/assets/bosch.png" width={150} height={50} alt="Logo" objectFit="contain" />
            </SliderItem>
            <SliderItem width={150}>
                <Image src="/assets/cheetah.webp" width={150} height={50} alt="Logo" objectFit="contain" />
            </SliderItem>
            <SliderItem width={150}>
                <Image src="/assets/llumar.png" width={150} height={50} alt="Logo" objectFit="contain" />
            </SliderItem>
            <SliderItem width={150}>
                <Image src="/assets/XPEL.png" width={150} height={50} alt="Logo" objectFit="contain" />
            </SliderItem>
            <SliderItem width={150}>
                <Image src="/assets/suntek.png" width={150} height={50} alt="Logo" objectFit="contain" />
            </SliderItem>
            <SliderItem width={150}>
                <Image src="/assets/akrapovic.png" width={150} height={50} alt="Logo" objectFit="contain" />
            </SliderItem>
            <SliderItem width={150}>
                <Image src="/assets/renegade.webp" width={150} height={50} alt="Logo" objectFit="contain" />
            </SliderItem>
        </SliderContainer>

    </>
)

export default Logos; 