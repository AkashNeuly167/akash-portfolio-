import React from "react";
import '../componentCss/BottomLine.css';

const BottomLine = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-4 z-10">
        <div className="side-line"></div>
        <div className="middle-line">
          <div className="inner-circle"></div>
        </div>
        <div className="side-line"></div>
      </div>
    </>
  );
};

export default BottomLine;