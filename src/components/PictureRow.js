import React from "react";
import PictureFrame from "./PictureFrame";

const PictureRow = (props) => {
  return (
    <div className="mb-3">
      {props.photos.map((photo) => (
        <PictureFrame key={photo.alt} src={photo.src} alt={photo.alt} />
      ))}
    </div>
  );
};

export default PictureRow;
