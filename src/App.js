import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="new york" />
        <footer>
          This project was created by Shuai Zhao and is{" "}
          <a
            href="https://github.com/shuaizhao1988/final-react-weather-app"
            target="_blank"
          >
            Open-sourced on Gitbhub
          </a>
        </footer>
      </div>
    </div>
  );
}
