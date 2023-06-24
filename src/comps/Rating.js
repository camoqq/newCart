import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rate, click }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span onClick={() => click(i)}>
          {rate > i ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </div>
  );
};

export default Rating;
