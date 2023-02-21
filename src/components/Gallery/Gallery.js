import React from "react";
import { Link } from "react-router-dom";
import "./gallery.css";
import { config } from "../../config";

const Gallery = ({ images }) => {
  if (!images.length) return <h1>Loading...</h1>;
  return (
    <div className="imageRow">
      {images?.map((img) => {
        return (
          <Link to={`/images/${img["media-id"]}`} key={img["media-id"]}>
            <img
              src={`${config.imgSrcUrl}/${img.preview}`}
              key={img["media-id"]}
              className="displayImage"
              alt=""
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Gallery;
