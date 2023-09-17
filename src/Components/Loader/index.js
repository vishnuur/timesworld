import React from "react";
import "./index.scss";
import { RotatingLines } from "react-loader-spinner";

const Index = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="loader_wrap">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Index;
