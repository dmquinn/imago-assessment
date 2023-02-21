import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "../../config";
import "./singleMediaView.css";

const SingleMediaPage = () => {
  const params = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (params.id) {
      handleGetImageInfo(params.id);
    }
  }, [params.id]);

  const handleGetImageInfo = async (id) => {
    try {
      const resp = await fetch(`${config.apiUrl}/media/${id}`);
      const data = await resp.json();
      if (data) setImage(data);
    } catch (err) {
      console.log(err);
    }
  };
  image && console.log(image);

  //formatting date into dd-mm-yyyy
  let objectDate = new Date(image?.creationdate);
  let day = objectDate.getDate();
  let month = objectDate.getMonth();
  let year = objectDate.getFullYear();

  if (!image) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="colLeft">
        <h5>
          <b>{image.caption}</b>
        </h5>
        <img src={image.mediasrc} alt={image.title} className="singleImage" />
      </div>

      <div className="colRight">
        <div className="center">
          <h2>Choose Your License </h2>
        </div>
        <div className="priceContainer">
          <div className="priceRow">
            <div>
              <p>Premium RF:</p>
            </div>
            <div>
              <span className="muted">from </span>{" "}
              {image.usagelicences[0].credits}{" "}
              {image.usagelicences[0].credits > 1 ? "credits" : "credit"}
            </div>
          </div>
          <div className="priceRow">
            <div className="priceRow">
              <input type="checkBox" />
              <p>Basic</p>
            </div>
            <p>
              {image.usagelicences[0].credits}{" "}
              {image.usagelicences[0].credits > 1 ? "credits" : "credit"}
            </p>
          </div>
          <div className="priceRow">
            <div className="priceRow">
              <input type="checkBox" />
              <p>Full</p>
            </div>
            <p>
              {image.usagelicences[1].credits}{" "}
              {image.usagelicences[1].credits > 1 ? "credits" : "credit"}
            </p>
          </div>
        </div>
        <div className="purchaseButtons">
          <button>Add to Basket</button>
          <button className="highlight">Buy Now</button>
        </div>
        <div className="imgDetails">
          <p>Credit: {image.creator}</p>
          <p>Image Id: {image.mediaid}</p>
          <p>
            Max Size: {image.width} x {image.height}
          </p>
          <p>
            Date: {day}.{month + 1}.{year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMediaPage;
