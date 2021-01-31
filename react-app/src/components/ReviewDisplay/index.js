import React from "react";


const ReviewDisplay = ({review})=>{
    return (
        <div className='singleproperty_container_single_review'>
            
            <div className='singleproperty_review_usertext'>
                <p><i class="far fa-user-circle"></i> {review[0].reviewer_id}</p>
                <p id='review_text'>{review[0].review}</p>
            </div>
        </div>
    )
};

export default ReviewDisplay;