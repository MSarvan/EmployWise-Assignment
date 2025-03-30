import React from "react";
import "../styles/Card.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingCard = () => {
  return (
    <div className="card">
      <div className="user-avatar">
        <Skeleton width={100} height={100} />
      </div>
      <div className="user-name">
        <div>
          <Skeleton width={100} height={15} />
        </div>
        <div>
          <Skeleton width={100} height={15} />
        </div>
      </div>
      <div className="options">
        <Skeleton width={100} height={25} />
        <Skeleton width={100} height={25} />
      </div>
    </div>
  );
};

export default LoadingCard;
