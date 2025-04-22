// Torneio.jsx
import React, { useState } from "react";
import TrophyDisable from "/trophy.png";
import "./Torneio8.css";
import ListaStartups from "../../components/ListaStartups/ListaStartups";
import PitchModal from "../../components/PitchModal/PitchModal";

function Torneio8({ startups, numStartups }) {
  const [fase, setFase] = useState(1);
  const [startupsNaoSorteadas, setStartupsNaoSorteadas] = useState(startups);
  const [startupsSorteadas, setStartupsSorteadas] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [semifinalistasArray, setSemifinalistasArray] = useState([
    null,
    null,
    null,
    null,
  ]);
  const [finalistasArray, setFinalistasArray] = useState([null, null]);
  const [modalPitchList, setModalPitchList] = useState(null);


  function sortearStartup(index) {
    const indiceSorteado = Math.floor(
      Math.random() * startupsNaoSorteadas.length
    );
    const startupSorteada = startupsNaoSorteadas[indiceSorteado];
    const novoArrayNaoSorteadas = startupsNaoSorteadas.filter(
      (s) => s !== startupSorteada
    );
    setStartupsNaoSorteadas(novoArrayNaoSorteadas);
    const novoArraySorteadas = [...startupsSorteadas];
    novoArraySorteadas[index] = startupSorteada;
    setStartupsSorteadas(novoArraySorteadas);
    if(novoArrayNaoSorteadas.length === 0) {
      setFase(2);
    }
  }


  return (
    <div className="torneio">
      <ListaStartups startups={startupsNaoSorteadas} />
      {modalPitchList && (
      <PitchModal
        pitchList={modalPitchList.lista}
        semifinalIndex={modalPitchList.index}

        onSubmit={(vencedora, index) => {
          if(fase == 3){
            const novaLista = [...finalistasArray];
            novaLista[index] = vencedora;
            setFinalistasArray(novaLista);
            setModalPitchList(null);
            if (novaLista.every((s) => s !== null)) {
              setFase(4);
            }
          }

            if(fase == 2){
            const novaLista = [...semifinalistasArray];
            novaLista[index] = vencedora;
            setSemifinalistasArray(novaLista);
            setModalPitchList(null);
            if (novaLista.every((s) => s !== null)) {
              setFase(3);
            }
          }
        }}
      />
    )}


      <div class="torneio-container">
        <div class="fase1">
          <div className="fase1-left">
            {startupsSorteadas[0] === null ? (
              <div className="vazia-startup1">
                <button className="sortear1" onClick={() => sortearStartup(0)}>
                  Sortear
                </button>
              </div>
            ) : (
              <div className="startup1">
                <label>{startupsSorteadas[0].nome}</label>
              </div>
            )}

            {startupsSorteadas[1] === null ? (
              <div className="vazia-startup2">
                <button className="sortear2" onClick={() => sortearStartup(1)}>
                  Sortear
                </button>
              </div>
            ) : (
              <div className="startup2">
                <label>{startupsSorteadas[1].nome}</label>
              </div>
            )}

            {startupsSorteadas[2] === null ? (
              <div className="vazia-startup3">
                <button className="sortear3" onClick={() => sortearStartup(2)}>
                  Sortear
                </button>
              </div>
            ) : (
              <div className="startup3">
                <label>{startupsSorteadas[2].nome}</label>
              </div>
            )}

            {startupsSorteadas[3] === null ? (
              <div className="vazia-startup4">
                <button className="sortear4" onClick={() => sortearStartup(3)}>
                  Sortear
                </button>
              </div>
            ) : (
              <div className="startup4">
                <label>{startupsSorteadas[3].nome}</label>
              </div>
            )}
          </div>


          <div class="fase2">

            <div className="fase2-left">


              {semifinalistasArray[0] === null ? (
                <div className="vazia-semifinalista1">
                  {fase === 2 ? (
                    <button
                    className="pitch1"
                    onClick={() =>
                      setModalPitchList({
                        lista: [startupsSorteadas[0], startupsSorteadas[1]],
                        index: 0,
                      })
                    }
                  >
                    Pitch
                  </button>
                    ):(
                    <label></label>
                  )}
                </div>
              ) : (
                <div className="semifinalista1">
                  <label>{semifinalistasArray[0].nome}</label>
                </div>
              )}




              {semifinalistasArray[1] === null ? (
                <div className="vazia-semifinalista2">
                  {fase === 2 ? (
                    <button
                    className="pitch2"
                    onClick={() =>
                      setModalPitchList({
                        lista: [startupsSorteadas[2], startupsSorteadas[3]],
                        index: 1,
                      })
                    }
                  >
                    Pitch
                  </button>
                    ):(
                    <label></label>
                  )}
                </div>
              ) : (
                <div className="semifinalista2">
                  <label>{semifinalistasArray[1].nome}</label>
                </div>
              )}
            </div>



            
            <div class="final">

              <div class="final-left">
              {finalistasArray[0] === null ? (
                  <div className="vazia-finalista1">
                    {fase === 3 ? (
                      <button
                      className="pitch5"
                      onClick={() =>
                        setModalPitchList({
                          lista: [semifinalistasArray[0], semifinalistasArray[1]],
                          index: 0,
                        })
                      }
                    >
                      Pitch
                    </button>
                      ):(
                      <label></label>
                    )}
                  </div>
                ) : (
                  <div className="finalista1">
                    <label>{finalistasArray[0].nome}</label>
                  </div>
                )}
              </div>


              <img src={TrophyDisable} className="trofeu" alt="Trophy Disable" />


              <div class="final-right">
              {finalistasArray[1] === null ? (
                  <div className="vazia-finalista2">
                    {fase === 3 ? (
                      <button
                      className="pitch6"
                      onClick={() =>
                        setModalPitchList({
                          lista: [semifinalistasArray[2], semifinalistasArray[3]],
                          index: 1,
                        })
                      }
                    >
                      Pitch
                    </button>
                      ):(
                      <label></label>
                    )}
                  </div>
                ) : (
                  <div className="finalista1">
                    <label>{finalistasArray[1].nome}</label>
                  </div>
                )}
              </div>
              
            </div>



            <div className="fase2-right">

              {semifinalistasArray[2] === null ? (
                  <div className="vazia-semifinalista3">
                    {fase === 2 ? (
                      <button
                      className="pitch3"
                      onClick={() =>
                        setModalPitchList({
                          lista: [startupsSorteadas[4], startupsSorteadas[5]],
                          index: 2,
                        })
                      }
                    >
                      Pitch
                    </button>
                      ):(
                      <label></label>
                    )}
                  </div>
                ) : (
                  <div className="semifinalista3">
                    <label>{semifinalistasArray[2].nome}</label>
                  </div>
                )}


                {semifinalistasArray[3] === null ? (
                  <div className="vazia-semifinalista4">
                    {fase === 2 ? (
                      <button
                      className="pitch4"
                      onClick={() =>
                        setModalPitchList({
                          lista: [startupsSorteadas[6], startupsSorteadas[7]],
                          index: 3,
                        })
                      }
                    >
                      Pitch
                    </button>
                      ):(
                      <label></label>
                    )}
                  </div>
                ) : (
                  <div className="semifinalista4">
                    <label>{semifinalistasArray[3].nome}</label>
                  </div>
                )}


            </div>
          </div>
          <div className="fase1-right">
            {startupsSorteadas[4] === null ? (
              <div className="vazia-startup5">
                <button className="sortear5" onClick={() => sortearStartup(4)}>
                  Sortear
                </button>
              </div>
            ) : (
              <div className="startup5">
                <label>{startupsSorteadas[4].nome}</label>
              </div>
            )}

            {startupsSorteadas[5] === null ? (
              <div className="vazia-startup6">
                <button className="sortear6" onClick={() => sortearStartup(5)}>
                  Sortear
                </button>
              </div>
            ) : (
              <div className="startup6">
                <label>{startupsSorteadas[5].nome}</label>
              </div>
            )}

            {startupsSorteadas[6] === null ? (
              <div className="vazia-startup7">
                <button className="sortear7" onClick={() => sortearStartup(6)}>
                  Sortear
                </button>
              </div>
            ) : (
              <div className="startup7">
                <label>{startupsSorteadas[6].nome}</label>
              </div>
            )}

            {startupsSorteadas[7] === null ? (
              <div className="vazia-startup8">
                <button className="sortear8" onClick={() => sortearStartup(7)}>
                  Sortear
                </button>
              </div>
            ) : (
              <div className="startup8">
                <label>{startupsSorteadas[7].nome}</label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Torneio8;