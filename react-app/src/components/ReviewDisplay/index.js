import React from "react";


const ReviewDisplay = ({review})=>{
    console.log('review', review)
    return (
        <div className='singleproperty_container_single_review'>
            <div className='singleproperty_review_stats'>
            </div>
            <div className='singleproperty_review_usertext'>
                <p><i class="far fa-user-circle"></i> {review[0].reviewer_id}</p>
                <p>{review[0].review}</p>
            </div>
        </div>
    )
};

export default ReviewDisplay;