import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Reviews: React.FC = () => {
  return (
    <Carousel className="bg-black text-white py-10 lg:py-20">
      <CarouselItem index={0}>
        <Review by="Saina Ahadi (⭐⭐⭐⭐⭐)">
          I got my windows tinted here and by far the best service I&apos;ve had
          out of all the shops I&apos;ve been to. Staff was super friendly and
          helpful, They were so quick and finished before the time stated, and
          prices are reasonable especially for their speed and quality!
        </Review>
      </CarouselItem>
      <CarouselItem index={1}>
        <Review by="Ghaleb Algamish (⭐⭐⭐⭐⭐)">
          Brought my C63s 2019 in for full tint and Chrome delete they did an
          excellent job would highly recommend
        </Review>
      </CarouselItem>
      <CarouselItem index={2}>
        <Review by="tony loney (⭐⭐⭐⭐⭐)">
          Got my s1000rr wrapped quick and easy! If you have a vehicle you need
          wrapped come check these guys out!
        </Review>
      </CarouselItem>
      <CarouselItem index={3}>
        <Review by="Sarah Zaid (⭐⭐⭐⭐⭐)">
          Amazing job done on my car Mohd !! Love the new spoiler and the
          louvers!! Coming back for more😇😇😇😇😇
        </Review>
      </CarouselItem>
      <CarouselItem index={4}>
        <Review by="Justin C (⭐⭐⭐⭐⭐)">
          These guys were awesome throughout the quoting and scheduling process.
          Responded after hours at ease. Honest - Responsive - Highly recommend.
          Thanks again guys!!
        </Review>
      </CarouselItem>
      <CarouselItem index={5}>
        <Review by="Steve S (⭐⭐⭐⭐⭐)">
          Thank you to B7 Customs for the Tint & tail lights. Service was
          amazing and treated me like family. Definitely Recommend Them & I See
          Myself Coming Here Again.
        </Review>
      </CarouselItem>
      <CarouselItem index={6}>
        <Review by="Alec A. (⭐⭐⭐⭐⭐)">
          Shout out to these guys , they know what they&apos;re doing. Came in
          for a chrome delete and it was turned around the same day . Thank you
          Mo & MJ ! Will definitely be doing more business with you guys in the
          future.
        </Review>
      </CarouselItem>
    </Carousel>
  );
};

export default Reviews;
