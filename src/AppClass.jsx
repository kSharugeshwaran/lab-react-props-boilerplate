import React, { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  render() {
    return (
      <div>
        <h2>Kalvium Gallery</h2>
        <div id="gallery">
          {this.props.imageData.map((e) => (
            <img
              className="image"
              src={elephant}
              id={e.id}
              key={e.id}
              alt={`Elephant ${e.id}`}
            />
          ))}
        </div>
      </div>
    );
  }
}
