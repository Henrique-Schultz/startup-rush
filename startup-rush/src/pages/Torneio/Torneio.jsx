// Torneio.jsx
import React, { useState } from "react";
import TrophyDisable from "/trophy-disable.png";
import "./Torneio.css";
import ListaStartups from "../../components/ListaStartups/ListaStartups";

function Torneio({ startups }) {
  return (
    <div className="torneio">
      <ListaStartups startups={startups} />

      <div class="torneio-container">
        <div class="fase1">
          <div className="fase1-left">
            <div className="startup1">startup1</div>
            <div className="startup2">startup2</div>
            <div className="startup3">startup3</div>
            <div className="startup4">startup4</div>
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
            <div className="startup1">startup5</div>
            <div className="startup2">startup6</div>
            <div className="startup3">startup7</div>
            <div className="startup4">startup8</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Torneio;
