import React from "react";

const blocks = [
  { id: 1, title: "Blog 1", image: "https://picsum.photos/300/200?random=1" },
  { id: 2, title: "Blog 2", image: "https://picsum.photos/300/200?random=2" },
  { id: 3, title: "Blog 3", image: "https://picsum.photos/300/200?random=3" },
  { id: 4, title: "Blog 4", image: "https://picsum.photos/300/200?random=4" },
  { id: 5, title: "Blog 5", image: "https://picsum.photos/300/200?random=5" },
  { id: 6, title: "Blog 6", image: "https://picsum.photos/300/200?random=6" },
  { id: 7, title: "Blog 7", image: "https://picsum.photos/300/200?random=7" },
  { id: 8, title: "Blog 8", image: "https://picsum.photos/300/200?random=8" },
  { id: 9, title: "Blog 9", image: "https://picsum.photos/300/200?random=9" },
  { id: 10, title: "Blog 10", image: "https://picsum.photos/300/200?random=10" },
  { id: 11, title: "Blog 11", image: "https://picsum.photos/300/200?random=11" },
  { id: 12, title: "Blog 12", image: "https://picsum.photos/300/200?random=12" },
  { id: 13, title: "Blog 13", image: "https://picsum.photos/300/200?random=13" },
  { id: 14, title: "Blog 14", image: "https://picsum.photos/300/200?random=14" },
  { id: 15, title: "Blog 15", image: "https://picsum.photos/300/200?random=15" },
  { id: 16, title: "Blog 16", image: "https://picsum.photos/300/200?random=16" },
  { id: 17, title: "Blog 17", image: "https://picsum.photos/300/200?random=17" },
  { id: 18, title: "Blog 18", image: "https://picsum.photos/300/200?random=18" },
  { id: 19, title: "Blog 19", image: "https://picsum.photos/300/200?random=19" },
  { id: 20, title: "Blog 20", image: "https://picsum.photos/300/200?random=20" },
];

const Blog = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {blocks.map((block) => (
        <div
          key={block.id}
          style={{
            display: "inline-block",
            width: "300px",
            margin: "10px",
            textAlign: "center",
          }}
        >
          <img src={block.image} alt={block.title} style={{ width: "100%" }} />
<p>{block.description}</p>
<a href={block.readmore}>Read More</a>
</div>
))}
</div>
);
};

export default Blog;

