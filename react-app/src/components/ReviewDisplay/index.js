import React from "react";


const ReviewDisplay = ({review})=>{
    console.log('review', review)
    return (
        <div className='singleproperty_container_single_review'>
            <div className='singleproperty_review_stats'>
            </div>
            <div className='singleproperty_review_usertext'>
                <p>USER: {review[0].reviewer_id}</p>
                <p>Review: {review[0].review}</p>
            </div>
        </div>
    )
};

export default ReviewDisplay;