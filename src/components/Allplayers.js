import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Aboutdata } from "../Api/Aboutdata"; // Ensure you're importing the correct data

function Allplayers() {
  return (
    <div>
      <Nav />
      <div className="allplayersPage">
        <h1 className="heading">
          All <span className="partHeader">Players</span>
        </h1>
        <div className="allplayersGrid">
          {Aboutdata.allpayers.map(
            (
              player,
              idx // Corrected the mapping function
            ) => (
              <div className="allPlayerscard" key={idx}>
                {" "}
                {/* Added key prop for list items */}
                <div className="allpalyersImage">
                  <img src={player.image} alt={player.name} />{" "}
                  {/* Added alt text for accessibility */}
                </div>
                <div className="allplayersdetails">
                    {" "}
                    {/* Changed to ul for better semantics */}
                    <li>
                      <b>Name</b>: {player.name}
                    </li>
                    <li>
                      <b>Age</b>: {player.age}
                    </li>
                    <li>
                      <b>State of origin</b>: {player.stateoforigin}
                    </li>
                    <li>
                      <b>Former Club</b>: {player.formerclub}
                    </li>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Allplayers;
