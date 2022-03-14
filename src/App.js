import Header from "./Components/Header";
import MainBlocks from "./Components/MainBlocks";
import "./App.css";
import OverviewBlock from "./Components/OverviewBlock";
import { useState } from "react";

function App() {
  const details = [
    {
      key:Math.random().toString(),
      user: "@nathanf",
      like: 1987,
      today: 12,
      // icon:require('./images/icon-up.svg'),
      // arrow:'images/icon-up.svg'
    },
    {
      key:Math.random().toString(),
      user: "@nathanf",
      like: 1044,
      today: 99,
    },
    {
      key:Math.random().toString(),
      user: "@realnathanf",
      like: "11k",
      today: 1099,
    },
    {
      key:Math.random().toString(),
      user: "Nathan F",
      like: 8239,
      today: 144,
    },
  ];

  const details2=[
    {
      key:Math.random().toString(),
      state:'Page Views',
      like:87,
      today:'3%'
    },
    {
      key:Math.random().toString(),
      state:'Likes',
      like:52,
      today:'2%'
    },
    {
      key:Math.random().toString(),
      state:'Likes',
      like:5462,
      today:'2257%'
    },
    {
      key:Math.random().toString(),
      state:'Profile Views',
      like:'52k',
      today:'1375%'
    },
    {
      key:Math.random().toString(),
      state:'Retweets',
      like:117,
      today:'303%'
    },
    {
      key:Math.random().toString(),
      state:'Likes',
      like:507,
      today:'553%'
    },
    {
      key:Math.random().toString(),
      state:'Likes',
      like:107,
      today:'19%'
    },
    {
      key:Math.random().toString(),
      state:'Total Views',
      like:1407,
      today:'12%'
    }
  ]
  
  function changeValue(data){
    console.log(data);
      return data;
  }
 
  return (
    <div className="invalid">
      <Header func={changeValue}/>
      <div className="container c1 ">
        {details.map((d) => {
          return (
            <MainBlocks
              user={d.user}
              like={d.like}
              today={details[0].today}
            ></MainBlocks>
          );
        })}
      </div>
    <h2 className="overview">Overview - Today</h2>

      <div className="container2">
        {details2.map((d)=>{
          return (
            <OverviewBlock state={d.state} like={d.like} today={d.today} />

          )
        })}
      </div>
    </div>
  );
}

export default App;
