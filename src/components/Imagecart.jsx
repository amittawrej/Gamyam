import React, { useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";

import Description from "./Description";

const ImageCart = ({
  title,
  mandal_name,
  district_name,
  image,
  area,
  price,
}) => {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((activeImage) => (activeImage + 1) % image.length);
  };

  const previousImage = () => {
    setActiveImage((activeImage) =>
      activeImage === 0 ? image.length - 1 : activeImage - 1
    );
  };

  
  const renderImage = image && image.length > 0 ? (
    <img
      style={{
        id: "image-id",
        width: "100%",
        height: "250px",
        maxWidth: "100%",
        maxHeight: "100%",
        borderRadius: "10px",
      }}
      src={image[activeImage].image}
      alt="Image"
      onClick={nextImage}
    />
  ) : (
    <div
      style={{
        width: "100%",
        height: "250px",
        backgroundColor: "#eee", // Placeholder background color
        borderRadius: "10px",
      }}
    />
  );

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "10px",
        margin: "10px",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        transform: "translateY(-20px)",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer",
      }}
    >
      <div>
        {renderImage}
        <Description
          title={title}
          mandal_name={mandal_name}
          district_name={district_name}
          area={area}
          price={price}
        />
      </div>
      <div>
        <button onClick={previousImage}>
          <BiLeftArrow />
        </button>
        <button onClick={nextImage}>
          <BiRightArrow />
        </button>
      </div>
    </div>
  );
};

export default ImageCart;
