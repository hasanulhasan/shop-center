import Image from "next/image";
import React from "react";

const Ratings = ({ star, rating }) => {
  let content = null;
  if (rating == 5) {
    content = (
      <div className="mt-3 flex items-center justify-start gap-1">
        <Image src={star} width="20px" alt="" />
        <Image src={star} width="20px" alt="" />
        <Image src={star} width="20px" alt="" />
        <Image src={star} width="20px" alt="" />
        <Image src={star} width="20px" alt="" />
      </div>
    );
  } 
  else if(rating < 5) {
    content = (
      <div className="mt-3 flex items-center justify-start gap-1">
        <Image src={star} width="20px" alt="" />
        <Image src={star} width="20px" alt="" />
        <Image src={star} width="20px" alt="" />
        <Image src={star} width="20px" alt="" />
      </div>
    )
  }
  else if(rating < 4) {
    content = (
      <div className="mt-3 flex items-center justify-start gap-1">
        <Image src={star} width="20px" alt="" />
        <Image src={star} width="20px" alt="" />
        <Image src={star} width="20px" alt="" />
      </div>
    )
  }
  else if(rating < 3) {
    content = (
      <div className="mt-3 flex items-center justify-start gap-1">
        <Image src={star} width="20px" alt="" />
        <Image src={star} width="20px" alt="" />
      </div>
    )
  }
  else if(rating < 2) {
    content = (
      <div className="mt-3 flex items-center justify-start gap-1">
        <Image src={star} width="20px" alt="" />
      </div>
    )
  }

  return <div>{content}</div>;
};

export default Ratings;
