import { Link } from "react-router-dom";
import "./gallery.css";
import { config } from "../../config";

const Gallery = ({ images }) => {
  if (!images.length) return <h1>Loading...</h1>;
  return (
    <div className="galleryContainer">
      <div className="imageRow">
        {images?.map((img) => {
          return (
            //square brackets syntax to use dash in media-id
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
    </div>
  );
};

export default Gallery;
