const RatingBar = ({ title, rating }) => (
  <div>
    <p>{title} </p>
    <span className='bar'><span style={{ width: `${rating / 5 * 100}%` }} className='bar_progress' /></span>
    <span>{rating}</span>
  </div>
);

export default RatingBar;
