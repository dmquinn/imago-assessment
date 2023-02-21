import React from "react";
import "./gallery.css";

const Gallery = ({}) => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1528198083909-60c0bf5b0718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      title: "first",
    },
    {
      url: "https://images.unsplash.com/photo-1600251215707-95bb01c73f51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
      title: "first",
    },
    {
      url: "https://images.unsplash.com/photo-1528198083909-60c0bf5b0718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      title: "first",
    },
    {
      url: "https://images.unsplash.com/photo-1600251215707-95bb01c73f51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
      title: "first",
    },
    {
      url: "https://images.unsplash.com/photo-1528198083909-60c0bf5b0718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      title: "first",
    },
  ];
  return (
    <div className="imageRow">
      {images?.map((img, i) => {
        return <img src={img.url} key={i} className="displayImage" />;
      })}
    </div>
  );
};

export default Gallery;
