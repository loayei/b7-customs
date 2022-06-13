import React from 'react';
import Carousel from './carousel';
import CarouselItem from './carousel-item';
import Review from './review';

const Reviews: React.FC = () => {
    return (
        <Carousel className="bg-black text-white py-10 lg:py-20">
            <CarouselItem index={0}>
                <Review by="Saina Ahadi (⭐⭐⭐⭐⭐)">
                    I got my windows tinted here and by far the best service
                    I've had out of all the shops I've been to.
                    Staff was super friendly and helpful,
                    They were so quick and finished before the time stated,
                    and prices are reasonable especially for their speed and quality!
                </Review>
            </CarouselItem>
            <CarouselItem index={1}>
                <Review by="Ghaleb Algamish (⭐⭐⭐⭐⭐)">
                    Brought my C63s 2019 in for full tint and Chrome delete they
                    did an excellent job would highly recommend
                </Review>
            </CarouselItem>
            <CarouselItem index={2}>
                <Review by="tony loney (⭐⭐⭐⭐⭐)">
                    Got my s1000rr wrapped quick and easy! If you have a vehicle you need wrapped come check these guys out!
                </Review>
            </CarouselItem>
            <CarouselItem index={3}>
                <Review by="Sarah Zaid (⭐⭐⭐⭐⭐)">
                    Amazing job done on my car Mohd !! Love the new spoiler and the louvers!! Coming back for more😇😇😇😇😇
                </Review>
            </CarouselItem>
        </Carousel>
    )
}

export default Reviews;