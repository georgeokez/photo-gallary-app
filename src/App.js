import React from "react";
import "./App.css";
import PictureRow from "./components/PictureRow";

function App() {
  const photos = [
    {
      src: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      alt: "fruits1",
    },
    {
      src: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      alt: "fruits2",
    },
    {
      src: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      alt: "fruits3",
    },
    {
      src: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      alt: "fruits4",
    },
    {
      src: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      alt: "fruits5",
    },
  ];

  return (
    <div className="container">
      <h1 className="header-text">Photo Gallary App</h1>
      <div>
        <PictureRow photos={photos} />
        <PictureRow photos={photos} />
        <PictureRow photos={photos} />
        <PictureRow photos={photos} />
        <PictureRow photos={photos} />
      </div>
    </div>
  );
}

export default App;
