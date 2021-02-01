import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { FaStar } from 'react-icons/fa';

export default function RadioSelector ({ label, count, checked, onChange }) {
  const [ratings, setRatings] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className='review_container_category_stars'>
      <div>
        <label>{label}</label>
      </div>
      <div className='stars_and_input'>
        {[...Array(5)].map((star, i) => {
          return (
            <label key={nanoid()}>
              <input
                type='radio'
                value={i + 1}
                checked={checked === `${i + 1}`}
                onClick={({ target: { value } }) => onChange(value)}
                onChange={({ target: { value } }) => setRatings(value)}
              />
              <FaStar
                className='stars_stars'
                onMouseEnter={() => setHover(i + 1)}
                onMouseLeave={() => setHover(null)}
                color={i + 1 <= (hover || ratings) ? 'yellow' : 'grey'}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
