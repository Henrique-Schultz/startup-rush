// Torneio.jsx
import React, { useState } from "react";
import TrophyDisable from "/trophy-disable.png";
import "./Torneio8.css";
import ListaStartups from "../../components/ListaStartups/ListaStartups";

function Torneio8({ startups, numStartups }) {
  const [startupsArray, setStartupsArray] = useState(startups);
  const [semifinalistasArray, setSemiFinalistasArray] = useState([]);
  const [finalistasArray, setFinalistasArray] = useState([]);

  


  return (
    <div className="torneio">
      <ListaStartups startups={startups} />

      <div class="torneio-container">
        <div class="fase1">
          <div className="fase1-left">
            <div className="startup1">
              {startupsArray[0] === null ? (
                <button className="sortear1" onClick={() => setStartupsArray(prev => {
                  const updatedArray = [...prev];
                  updatedArray[0] = startups[0];
                  return updatedArray;
                })}>Sortear</button>
              ) : (<label>{startupsArray[0].nome}</label>

              )}
            </div>
            <div className="startup2">
              <label>{startupsArray[1].nome}</label>
            </div>
            <div className="startup3">
              <label>{startupsArray[2].nome}</label>
            </div>
            <div className="startup4">
              <label>{startupsArray[3].nome}</label>
            </div>
          </div>
          <div class="fase2">
            <div className="fase2-left">
              <div className="semifinalista1">semifinalista1</div>
              <div className="semifinalista2">semifinalista2</div>
            </div>
            <div class="final">
              <div class="final-left">
                <div className="finalista1">finalista1</div>
              </div>
                <img src={TrophyDisable} className="logo" alt="Trophy Disable" />
              <div class="final-right">
                <div className="finalista2">finalista2</div>
              </div>
            </div>
            <div className="fase2-right">
              <div className="semifinalista7">semifinalista3</div>
              <div className="semifinalista8">semifinalista4</div>
            </div>
          </div>
          <div className="fase1-right">
            <div className="startup5">
              <label>{startupsArray[4].nome}</label>
            </div>
            <div className="startup6">
              <label>{startupsArray[5].nome}</label>
            </div>
            <div className="startup7">
              <label>{startupsArray[6].nome}</label>
            </div>
            <div className="startup8">
              <label>{startupsArray[7].nome}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Torneio8;
