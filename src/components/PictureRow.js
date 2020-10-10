import React from "react";
import PictureFrame from "./PictureFrame";

const PictureRow = (props) => {
  return (
    <div>
      {props.photos.map((photo) => (
        <PictureFrame key={photo.alt} src={photo.src} alt={photo.alt} />
      ))}
    </div>
  );
};

export default PictureRow;
