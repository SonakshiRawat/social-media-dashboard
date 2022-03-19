import Header from "./Components/Header";
import MainBlocks from "./Components/MainBlocks";
import "./App.css";
import OverviewBlock from "./Components/OverviewBlock";
import { useState } from "react";

function App() {
  const details = [
    {
      key: Math.random().toString(),
      user: "@nathanf",
      like: 1987,
      today: 12,
      iconUrl: "images/icon-facebook.svg",
      arrow: "up",
    },
    {
      key: Math.random().toString(),
      user: "@nathanf",
      like: 1044,
      today: 99,
      iconUrl: "images/icon-twitter.svg",
      arrow: "up",
    },
    {
      key: Math.random().toString(),
      user: "@realnathanf",
      like: "11k",
      today: 1099,
      iconUrl: "images/icon-instagram.svg",
      arrow: "up",
    },
    {
      key: Math.random().toString(),
      user: "Nathan F",
      like: 8239,
      today: 144,
      iconUrl: "images/icon-youtube.svg",
      arrow: "down",
    },
  ];

  const details2 = [
    {
      key: Math.random().toString(),
      state: "Page Views",
      like: 87,
      today: "3%",
      iconUrl: "images/icon-facebook.svg",
      arrow: "up",
    },
    {
      key: Math.random().toString(),
      state: "Likes",
      like: 52,
      today: "2%",
      iconUrl: "images/icon-facebook.svg",
      arrow: "down",
    },
    {
      key: Math.random().toString(),
      state: "Likes",
      like: 5462,
      today: "2257%",
      iconUrl: "images/icon-instagram.svg",
      arrow: "up",
    },
    {
      key: Math.random().toString(),
      state: "Profile Views",
      like: "52k",
      today: "1375%",
      iconUrl: "images/icon-instagram.svg",
      arrow: "up",
    },
    {
      key: Math.random().toString(),
      state: "Retweets",
      like: 117,
      today: "303%",
      iconUrl: "images/icon-twitter.svg",
      arrow: "up",
    },
    {
      key: Math.random().toString(),
      state: "Likes",
      like: 507,
      today: "553%",
      iconUrl: "images/icon-twitter.svg",
      arrow: "up",
    },
    {
      key: Math.random().toString(),
      state: "Likes",
      like: 107,
      today: "19%",
      iconUrl: "images/icon-youtube.svg",
      arrow: "down",
    },
    {
      key: Math.random().toString(),
      state: "Total Views",
      like: 1407,
      today: "12%",
      iconUrl: "images/icon-youtube.svg",
      arrow: "down",
    },
  ];
  const [darkMode, setDarkMode] = useState(false);

  function changeValue(data) {
    setDarkMode(data);
    return data;
  }

  return (
    <div className={darkMode === true ? "invalid" : ""}>
      <Header func={changeValue} />
      <div className="container c1 ">
        {details.map((d) => {
          return (
            <MainBlocks
              key={d.key}
              user={d.user}
              like={d.like}
              today={d.today}
              icon={d.iconUrl}
              arrow={d.arrow}
            ></MainBlocks>
          );
        })}
      </div>
      <h2 className="overview">Overview - Today</h2>

      <div className="container2">
        {details2.map((d) => {
          return (
            <OverviewBlock
              key={d.key}
              state={d.state}
              like={d.like}
              today={d.today}
              icon={d.iconUrl}
              arrow={d.arrow}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
