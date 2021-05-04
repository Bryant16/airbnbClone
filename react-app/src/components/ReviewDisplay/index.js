const ReviewDisplay = ({ review }) => (
  <div className='singleproperty_container_single_review'>
    <div className='singleproperty_review_usertext'>
      <p>
        <i className='far fa-user-circle' />{review[0].reviewer_id}
      </p>
      <p id='review_text'>
        {review[0].review}
      </p>
    </div>
  </div>
);

export default ReviewDisplay;
