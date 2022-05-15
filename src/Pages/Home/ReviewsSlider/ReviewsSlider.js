import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import quote from '../../../assets/icons/quote.svg'
import ReviewCard from './ReviewCard';

const ReviewsSlider = () => {
    const reviews = [
        {
            _id: 101,
            name: "Winson Herry",
            location: "California",
            img: people1,
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: 102,
            name: "Telson Herry",
            location: "California",
            img: people2,
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: 103,
            name: "Jojo Herry",
            location: "California",
            img: people3,
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        }
    ]
    return (
        <div className='container mx-auto px-12 py-10 lg:px-0'>
            <div className='flex flex-row justify-between items-center py-10'>
                <div>
                    <h3 className='text-primary text-left mb-3 text-lg font-bold'>Testimonial</h3>
                    <h1 className="text-3xl font-semibold">What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48 ' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
        </div>
    );
};

export default ReviewsSlider;