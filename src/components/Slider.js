import React from "react";
import { Carousel } from "react-bootstrap";

const blocks = [
  { id: 1, title: "Blog 1", image: "https://picsum.photos/300/200?random=1", description: "Description 1", readmore: "#" },
  { id: 2, title: "Blog 2", image: "https://picsum.photos/300/200?random=2", description: "Description 2", readmore: "#" },
  { id: 3, title: "Blog 3", image: "https://picsum.photos/300/200?random=3", description: "Description 3", readmore: "#" },
  // ...
];

const Slider = () => {
  return (
    <Carousel>
      {blocks.map((block) => (
        <Carousel.Item key={block.id}>
          <img src={block.image} alt={block.title} className="d-block w-100" />
          <Carousel.Caption>
            <h3>{block.title}</h3>
            <p>{block.description}</p>
            <a href={block.readmore}>Read More</a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
