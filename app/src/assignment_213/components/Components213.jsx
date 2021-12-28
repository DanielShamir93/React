import React, { useRef } from "react";
import "./../styles.css";

export default function Components213 () {
  const imgRef1 = useRef();
  const imgRef2 = useRef();

  const changeColor = (newClassName) => {
    if (newClassName === "img1") {
      imgRef1.current.className = "coloredImg1";
    } else {
      imgRef1.current.className = "img1";
    }

    if (newClassName === "img2") {
      imgRef2.current.className = "coloredImg2";
    } else {
      imgRef2.current.className = "img2";
    }
  };

  return (
    <div>
      <div className="container">
        <div
          ref={imgRef1}
          onMouseEnter={(e) => changeColor(e.target.className)}
          onMouseLeave={(e) => changeColor(e.target.className)}
          className="img1"
        ></div>
        <div
          ref={imgRef2}
          onMouseEnter={(e) => changeColor(e.target.className)}
          onMouseLeave={(e) => changeColor(e.target.className)}
          className="img2"
        ></div>
      </div>
    </div>
  );
};