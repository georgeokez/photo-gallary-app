import React from "react";

const PictureFrame = (props) => {
  return (
    <img
      className="img-thumbnail photo-container"
      alt={props.alt}
      src={props.src}
      width="200px"
      height="200px"
    />
  );
};

export default PictureFrame;
