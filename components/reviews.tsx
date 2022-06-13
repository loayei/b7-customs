import React from 'react';
import Carousel from './carousel';
import CarouselItem from './carousel-item';
import Review from './review';

const Reviews: React.FC = () => {
    return (
        <Carousel className="bg-black text-white py-10 lg:py-20">
            <CarouselItem index={0}>
                <Review by="John Doe">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Review>
            </CarouselItem>
            <CarouselItem index={1}>
                <Review by="John Doe">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Then the other day, I was walking down the street and I saw a
                </Review>
            </CarouselItem>
            <CarouselItem index={2}>
                <Review by="John Doe">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Review>
            </CarouselItem>
            <CarouselItem index={3}>
                <Review by="John Doe">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Review>
            </CarouselItem>
        </Carousel>
    )
}

export default Reviews;