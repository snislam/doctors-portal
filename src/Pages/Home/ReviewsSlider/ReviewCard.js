import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className='px-5 py-10 rounded-md shadow'>
            <div>
                <p>{review.review}</p>
            </div>
            <div className='flex flex-row items-center mt-5'>
                <div className="avatar mr-5">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.img} alt={review.name} />
                    </div>
                </div>
                <div>
                    <h3>{review.name}</h3>
                    <p>{review.location}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;