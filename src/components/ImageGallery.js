import React, { useState, useEffect } from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import styled from "styled-components";

const images = [
  "https://images.unsplash.com/photo-1479219136056-56bb6495a005?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80",
  "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  "https://images.unsplash.com/photo-1512415073221-64c70eee25bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1520088441246-4e0e8037fed1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
  "https://images.unsplash.com/photo-1550640964-4775934de4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];

function ImageGallery() {
  const [image, setImage] = useState(0);

  useEffect(() => {
    const timelimit = setInterval(() => {
      if (image === 5) {
        setImage(0);
      } else {
        setImage(last => last + 1);
      }
    }, 4000);
    return () => clearInterval(timelimit);
  }, [image]);
  return (
    <Section>
      <Gallery
        index={image}
        onRequestChange={i => {
          setImage(i);
        }}
      >
        {images.map(image => (
          <GalleryImage
            objectFit="contain"
            key={image}
            src={image}
          ></GalleryImage>
        ))}
      </Gallery>
    </Section>
  );
}

const Section = styled.section`
  .GallerImage {
    height: "10vh";
    width: "10vw";
  }
`;

export default ImageGallery;
