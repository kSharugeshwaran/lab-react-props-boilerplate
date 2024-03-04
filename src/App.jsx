import React from "react";
import "./App.css";

function App({ imageData }) {
  return (
    <div>
      <h2>Kalvium Gallery</h2>
      <div id="gallery">
        {imageData.map((e) => (
          <img
            className="image"
            src={e.img}
            id={e.id}
            key={e.id}
            alt={`Elephant ${e.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
