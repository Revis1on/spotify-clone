import React from "react";
import Body from "../Body/Body";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./Player.css";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
