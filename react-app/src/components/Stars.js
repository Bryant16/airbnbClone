import React from "react";
import { FaStar } from "react-icons/fa";

const Stars = ({ rating }) => {
  const averageRating = Math.round(rating);
  const stars = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];

  const mappedStars = stars.map((star, i) => {
    if (i < averageRating) {
      return <FaStar style={{ color: "#f8395c" }} />;
    } else {
      return star;
    }
  });

  return (
    <span>
      {mappedStars} {"(" + parseFloat(rating) + ")"}
    </span>
  );
};

export default Stars;
