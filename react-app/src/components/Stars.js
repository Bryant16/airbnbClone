import { FaStar } from 'react-icons/fa';

const Stars = ({ rating }) => {
  const averageRating = Math.round(rating);
  const stars = [];

  for (let i = 0; i < 5; i++) stars.push(<FaStar key={i} style={i < averageRating && { color: '#f8395c' }} />);

  return (
    <span>
      {stars} {`(${parseFloat(rating)})`}
    </span>
  );
};

export default Stars;
