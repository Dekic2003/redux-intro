import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchNews } from "./state/actions/news";
import Feed from "./components/Feed";

//15cf2f1b37eb402db1b4aa1dfcd01e6a
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>Ovo je naslov</p>
      <Feed />
    </div>
  );
}

export default App;
