import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

//15cf2f1b37eb402db1b4aa1dfcd01e6a
function Feed() {
  const news = useSelector((state) => state.newsReducer.all);
  const loading = useSelector((state) => state.newsReducer.loading);
  const error = useSelector((state) => state.newsReducer.error);

  if (loading) {
    return <p>Loading ....</p>;
  }

  if (error !== null) {
    return <p>{error.message}</p>;
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {news.map((article) => {
        return <Card article={article} />;
      })}
    </div>
  );
}

export default Feed;
