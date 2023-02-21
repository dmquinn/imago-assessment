import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "../config";

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
  if (!image) return <p>Loading...</p>;
  return <div>{image.caption}</div>;
};

export default SingleMediaPage;
