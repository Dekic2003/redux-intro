import React from "react";

//15cf2f1b37eb402db1b4aa1dfcd01e6a
function Card({ article }) {
  return (
    <div
      style={{
        width: 300,
        heihgt: 300,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={article.urlToImage}
        style={{ width: 300, heihgt: 150, resize: "cover" }}
      />
      <p>{article.title}</p>
      <p>{article.content}</p>
    </div>
  );
}

export default Card;
